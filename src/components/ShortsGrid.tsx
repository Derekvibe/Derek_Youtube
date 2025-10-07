import { useEffect, useState } from "react"
import VideoCard from "./VideoCard"
import { getYoutubeVideos, YouTubeVideo } from "@/lib/youtubeData"
import { Button } from "@/components/ui/button"

export default function ShortGrid() {
  const [shorts, setShorts] = useState<YouTubeVideo[]>([])
  const [visibleCount, setVisibleCount] = useState(6)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchShorts() {
      const allVideos = await getYoutubeVideos()
      const filtered = allVideos.filter((v) => v.type === "short")
      setShorts(filtered)
      setLoading(false)
    }
    fetchShorts()
  }, [])

  if (loading)
    return <p className="text-center text-muted-foreground py-10">Loading Shorts...</p>
  if (shorts.length === 0)
    return <p className="text-center text-muted-foreground py-10">No Shorts found.</p>

  const visibleShorts = shorts.slice(0, visibleCount)

  return (
    <section id="shorts" className="py-20">
      <div className="container">
        <div className="space-y-8">
          <div className="text-center space-y-3">
            <h2 className="text-3xl md:text-4xl font-bold">YouTube Shorts</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
             Motivational and life-changing short clips to keep you inspired and focused every day.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {visibleShorts.map((short) => (
              <VideoCard key={short.id} {...short} category={short.type} />
            ))}
          </div>

          <div className="text-center mt-8">
            {visibleCount < shorts.length ? (
              <Button onClick={() => setVisibleCount(shorts.length)}>See More</Button>
            ) : (
              <Button onClick={() => setVisibleCount(6)}>See Less</Button>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
