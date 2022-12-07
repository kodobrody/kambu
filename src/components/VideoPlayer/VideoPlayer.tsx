import loveIcon from '@/assets/love-icon.png';
import shareIcon from '@/assets/share-icon.png';
import { VideoPlayerNavigation } from '../VideoPlayerNavigation/VideoPlayerNavigation';
import { VideoDescription } from '../VideoDescription';
import { FullVideoType } from '../types';

type VideoPlayerProps = {
  video: FullVideoType;
}

export const VideoPlayer = ({ video }: VideoPlayerProps) => {
  const {
    duration,
    progress,
    ...rest
  } = video;

  return (
    <main className="video-player__wrapper">
      <div className="video-player__container">
        <div className="video-player__top-icons-wrapper">
          <img src={loveIcon} />
          <img src={shareIcon} />
        </div>
        <VideoPlayerNavigation
          duration={duration}
          progress={progress}
        />
      </div>
      <VideoDescription {...rest} />
    </main>
  );
};