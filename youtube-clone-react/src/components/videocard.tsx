import type { Video } from "../types/video";
import { formatViews } from "../data/video";
import { FiCheckCircle } from "react-icons/fi";
import "./videocard.css";

interface VideoCardProps {
  video: Video;
}

export default function VideoCard({ video }: VideoCardProps) {
  return (
    <a
      href={`https://www.youtube.com/watch?v=${video.youtubeId}`}
      target="_blank"
      rel="noopener noreferrer"
      className="video-card"
    >
      <div className="thumb-wrap">
        <img className="thumb" src={video.thumbnailUrl} alt={video.title} loading="lazy" />
        <span className="duration-badge">{video.duration}</span>
      </div>
      <div className="video-meta">
        <img className="channel-avatar" src={video.channelAvatarUrl} alt="" />
        <div className="video-text">
          <h3 className="video-title">{video.title}</h3>
          <p className="channel-name">
            {video.channelName}
            {video.channelVerified && <FiCheckCircle className="verified-icon" size={12} />}
          </p>
          <p className="video-stats">
            {formatViews(video.views)} • {video.uploadedAt}
          </p>
        </div>
      </div>
    </a>
  );
}
