import { Eye } from "lucide-react"

interface VideoCardProps {
  id: string
  title: string
  thumbnail: string
  publishedAt: string
  category: string
  views?: string
}

export default function VideoCard({
  id,
  title,
  thumbnail,
  publishedAt,
  category,
  views,
}: VideoCardProps) {
  return (
    <a
      href={`https://www.youtube.com/watch?v=${id}`}
      target="_blank"
      rel="noopener noreferrer"
      className="group block rounded-2xl overflow-hidden bg-card shadow hover:shadow-lg transition-all duration-300"
    >
      <div className="relative aspect-video w-full overflow-hidden">
        <img
          src={thumbnail}
          alt={title}
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      <div className="p-4 space-y-2">
        <h3 className="font-semibold line-clamp-2 text-foreground">{title}</h3>
        <div className="flex justify-between">
          <p className="flex justify-between gap-2 items-center text-sm text-muted-foreground">
            <Eye  size={14}/>
          {Number(views || 0).toLocaleString()} views {" "}
        </p>
        <p className="flex justify-between text-sm text-muted-foreground">
          {new Date(publishedAt).toLocaleDateString()}
        </p>
        </div>
       
        <span className="text-xs uppercase tracking-wide text-primary font-medium">
          {category}
        </span>
      </div>
    </a>
  )
}
