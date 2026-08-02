import type { Video } from "../types/video";
import VideoCard from "./videocard";
import "./videogrid.css";

interface VideoGridProps {
  videos: Video[];
}

export default function VideoGrid({ videos }: VideoGridProps) {
  if (videos.length === 0) {
    return <p className="empty-state">No videos in this category yet.</p>;
  }

  return (
    <div className="video-grid">
      {videos.map((v) => (
        <VideoCard key={v.id} video={v} />
      ))}
    </div>
  );
}
