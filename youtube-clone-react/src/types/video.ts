export interface Video {
  id: string;
  youtubeId: string;
  title: string;
  thumbnailUrl: string;
  channelName: string;
  channelAvatarUrl: string;
  channelVerified: boolean;
  views: number;
  uploadedAt: string;
  duration: string; // "12:34"
  category: string;
}

export interface Category {
  id: string;
  label: string;
}
