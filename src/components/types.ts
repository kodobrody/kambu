export type RelatedVideoType = {
  duration: number;
  title: string;
  views: number;
  id: number;
}

export type FullVideoType = {
  duration: number;
  progress: number;
  title: string;
  description: string;
  stats: {
    comments: number;
    likes: number;
    views: number;
  };
  uploader: {
    avatar: string;
    followersCount: number;
    name: string;
    },
  uploadDate: string;
}