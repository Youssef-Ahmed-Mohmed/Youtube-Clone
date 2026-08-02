import type { Video, Category } from "../types/video";

export const categories: Category[] = [
  { id: "all", label: "All" },
  { id: "pop", label: "Pop" },
  { id: "dance-pop", label: "Dance / Pop" },
  { id: "kpop", label: "K-Pop" },
  { id: "kids", label: "Kids" },
  { id: "classic-rock", label: "Classic Rock" },
];

function avatarFor(channel: string): string {
  return `https://ui-avatars.com/api/?name=${encodeURIComponent(channel)}&background=random&bold=true`;
}

function thumbFor(youtubeId: string): string {
  return `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`;
}

const raw: Omit<Video, "thumbnailUrl" | "channelAvatarUrl" | "id">[] = [
  {
    youtubeId: "XqZsoesa55w",
    title: "Baby Shark Dance",
    channelName: "Pinkfong Baby Shark - Kids' Songs & Stories",
    channelVerified: true,
    views: 16_900_000_000,
    uploadedAt: "9 years ago",
    duration: "2:16",
    category: "kids",
  },
  {
    youtubeId: "kJQP7kiw5Fk",
    title: "Luis Fonsi - Despacito ft. Daddy Yankee",
    channelName: "Luis Fonsi",
    channelVerified: true,
    views: 8_900_000_000,
    uploadedAt: "9 years ago",
    duration: "4:42",
    category: "pop",
  },
  {
    youtubeId: "9bZkp7q19f0",
    title: "PSY - GANGNAM STYLE(강남스타일) M/V",
    channelName: "officialpsy",
    channelVerified: true,
    views: 5_100_000_000,
    uploadedAt: "13 years ago",
    duration: "4:13",
    category: "kpop",
  },
  {
    youtubeId: "RgKAFK5djSk",
    title: "Wiz Khalifa - See You Again ft. Charlie Puth [Official Video] Furious 7 Soundtrack",
    channelName: "Wiz Khalifa",
    channelVerified: true,
    views: 6_500_000_000,
    uploadedAt: "10 years ago",
    duration: "3:49",
    category: "pop",
  },
  {
    youtubeId: "JGwWNGJdvx8",
    title: "Ed Sheeran - Shape of You (Official Music Video)",
    channelName: "Ed Sheeran",
    channelVerified: true,
    views: 6_300_000_000,
    uploadedAt: "8 years ago",
    duration: "3:53",
    category: "pop",
  },
  {
    youtubeId: "OPf0YbXqDm0",
    title: "Mark Ronson - Uptown Funk (Official Video) ft. Bruno Mars",
    channelName: "Mark Ronson",
    channelVerified: true,
    views: 5_400_000_000,
    uploadedAt: "10 years ago",
    duration: "4:31",
    category: "dance-pop",
  },
  {
    youtubeId: "09R8_2nJtjg",
    title: "Maroon 5 - Sugar (Official Music Video)",
    channelName: "Maroon 5",
    channelVerified: true,
    views: 4_400_000_000,
    uploadedAt: "10 years ago",
    duration: "5:02",
    category: "pop",
  },
  {
    youtubeId: "fRh_vgS2dFE",
    title: "Justin Bieber - Sorry (PURPOSE : The Movement)",
    channelName: "Justin Bieber",
    channelVerified: true,
    views: 3_500_000_000,
    uploadedAt: "9 years ago",
    duration: "3:20",
    category: "dance-pop",
  },
  {
    youtubeId: "CevxZvSJLk8",
    title: "Katy Perry - Roar (Official)",
    channelName: "Katy Perry",
    channelVerified: true,
    views: 3_800_000_000,
    uploadedAt: "12 years ago",
    duration: "3:43",
    category: "pop",
  },
  {
    youtubeId: "fJ9rUzIMcZQ",
    title: "Queen - Bohemian Rhapsody (Official Video Remastered)",
    channelName: "Queen Official",
    channelVerified: true,
    views: 2_100_000_000,
    uploadedAt: "16 years ago",
    duration: "5:55",
    category: "classic-rock",
  },
  {
    youtubeId: "lp-EO5I60KA",
    title: "Ed Sheeran - Thinking Out Loud (Official Music Video)",
    channelName: "Ed Sheeran",
    channelVerified: true,
    views: 3_900_000_000,
    uploadedAt: "10 years ago",
    duration: "4:41",
    category: "pop",
  },
  {
    youtubeId: "60ItHLz5WEA",
    title: "Alan Walker - Faded",
    channelName: "Alan Walker",
    channelVerified: true,
    views: 3_700_000_000,
    uploadedAt: "9 years ago",
    duration: "3:33",
    category: "dance-pop",
  },
];

export const videos: Video[] = raw.map((v, i) => ({
  ...v,
  id: `v${i + 1}`,
  thumbnailUrl: thumbFor(v.youtubeId),
  channelAvatarUrl: avatarFor(v.channelName),
}));

export function formatViews(views: number): string {
  if (views >= 1_000_000_000) {
    return `${(views / 1_000_000_000).toFixed(views % 1_000_000_000 === 0 ? 0 : 1)}B views`;
  }
  if (views >= 1_000_000) {
    return `${(views / 1_000_000).toFixed(views % 1_000_000 === 0 ? 0 : 1)}M views`;
  }
  if (views >= 1_000) {
    return `${(views / 1_000).toFixed(views % 1_000 === 0 ? 0 : 1)}K views`;
  }
  return `${views} views`;
}
