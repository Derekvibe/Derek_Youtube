import { useEffect, useState } from "react"
import VideoCard from "./VideoCard"
import { getYoutubeVideos, YouTubeVideo } from "@/lib/youtubeData"
import { Button } from "@/components/ui/button"

export default function VideoGrid() {
  const [videos, setVideos] = useState<YouTubeVideo[]>([])
  const [visibleCount, setVisibleCount] = useState(6)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchVideos() {
      const allVideos = await getYoutubeVideos()
      const filtered = allVideos.filter((v) => v.type === "video")
      setVideos(filtered)
      setLoading(false)
    }
    fetchVideos()
  }, [])

  if (loading)
    return <p className="text-center text-muted-foreground py-10">Loading videos...</p>
  if (videos.length === 0)
    return <p className="text-center text-muted-foreground py-10">No videos found.</p>

  const visibleVideos = videos.slice(0, visibleCount)

  return (
    <section id="videos" className="py-20">
      <div className="container">
        <div className="space-y-8">
          <div className="text-center space-y-3">
            <h2 className="text-3xl md:text-4xl font-bold">YouTube Videos</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Insightful, full-length videos covering complex tech concepts with clarity and precision.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {visibleVideos.map((video) => (
              <VideoCard key={video.id} {...video} category={video.type} />
            ))}
          </div>

          <div className="text-center mt-8">
            {visibleCount < videos.length ? (
              <Button onClick={() => setVisibleCount(videos.length)}>See More</Button>
            ) : (
              <Button onClick={() => setVisibleCount(6)}>See Less</Button>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
