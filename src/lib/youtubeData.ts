export interface YouTubeVideo {
  id: string
  title: string
  thumbnail: string
  publishedAt: string
  views?: string
  duration?: string
  type: "video" | "short"
}

function parseDuration(duration: string): number {
  const match = duration.match(/PT(?:(\d+)M)?(?:(\d+)S)?/)
  const minutes = parseInt(match?.[1] || "0")
  const seconds = parseInt(match?.[2] || "0")
  return minutes * 60 + seconds
}

export async function getYoutubeVideos(): Promise<YouTubeVideo[]> {
  const apiKey = import.meta.env.VITE_YOUTUBE_API_KEY
  const channelId = import.meta.env.VITE_YOUTUBE_CHANNEL_ID

  if (!apiKey || !channelId) {
    console.error("Missing API key or Channel ID")
    return []
  }

  try {
    // Step 1: Fetch basic video list
    const res = await fetch(
      `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&part=snippet,id&order=date&maxResults=20`
    )
    const data = await res.json()

    if (!data.items) return []

    // Step 2: Extract video IDs
    const videoIds = data.items
      .filter((item: any) => item.id.kind === "youtube#video")
      .map((item: any) => item.id.videoId)
      .join(",")

    // Step 3: Fetch details (views + duration)
    const detailsRes = await fetch(
      `https://www.googleapis.com/youtube/v3/videos?key=${apiKey}&id=${videoIds}&part=contentDetails,statistics`
    )
    const detailsData = await detailsRes.json()

    const durations = new Map<string, string>()
    const views = new Map<string, string>()

    detailsData.items.forEach((v: any) => {
      durations.set(v.id, v.contentDetails.duration)
      views.set(v.id, v.statistics.viewCount)
    })

    // Step 4: Combine
    return data.items
      .filter((item: any) => item.id.kind === "youtube#video")
      .map((item: any) => {
        const durationStr = durations.get(item.id.videoId) || "PT0S"
        const durationSec = parseDuration(durationStr)
        const isShort = durationSec < 120 // less than 2 minutes

        return {
          id: item.id.videoId,
          title: item.snippet.title,
          thumbnail: item.snippet.thumbnails.high.url,
          publishedAt: item.snippet.publishedAt,
          views: views.get(item.id.videoId),
          duration: durationStr,
          type: isShort ? "short" : "video",
        } as YouTubeVideo
      })
  } catch (err) {
    console.error("Error fetching YouTube videos:", err)
    return []
  }
}
