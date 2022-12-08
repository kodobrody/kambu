import { VideoStat } from "../../components/VideoStat";
import { VideoUploaderInfo } from "../../components/VideoUploaderInfo";
import viewsIcon from '../../assets/views-icon@2x.png';
import heartIcon from '../../assets/heart-icon@2x.png';
import commentIcon from '../../assets/comment-icon@2x.png';
import './VideoDescription.scss';
import { FullVideoType } from "../types";

type VideoDescriptionProps = Omit<FullVideoType, 'duration' | 'progress'>

export const VideoDescription = ({
  title,
  description,
  stats,
  uploader,
  uploadDate
}: VideoDescriptionProps) => {
  const {
    likes,
    comments,
    views,
  } = stats;

  return (
    <div className="info">
      <span className="info__title">{title}</span>
      <span className="info__description">{description}</span>
      <div className="info__stats">
        <VideoStat
          icon={viewsIcon}
          count={views}
          alt="views icon"
        />
        <VideoStat
          icon={heartIcon}
          count={likes}
          alt="heart icon"
        />
        <VideoStat
          icon={commentIcon}
          count={comments}
          alt="comment icon"
        />
      </div>
      <VideoUploaderInfo
        uploader={uploader}
        uploadDate={uploadDate}
      />
    </div>
  );
};
