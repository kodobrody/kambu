import viewsIcon from '@/assets/views-icon.png';
import {
  convertDurationToString,
  handleCount
} from '@/utils';
import { VideoStat } from '../VideoStat';
import './RelatedVideo.scss';

type RelatedVideoProps = {
  duration: number;
  title: string;
  views: number;
}

export const RelatedVideo = ({
  duration,
  title,
  views
}: RelatedVideoProps) => {
  return (
    <li className="related-video">
      <div className="related-video__background">
        <img src="" />
        <div className="related-video__duration">{convertDurationToString(duration)}</div>
      </div>
      <div className="related-video__info">
        <span className="related-video__info-title">{title}</span>
        <VideoStat
          icon={viewsIcon}
          count={views}
          alt=""
        />
      </div>
    </li>
  )
}