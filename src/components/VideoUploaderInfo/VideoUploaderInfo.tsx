import { Button } from "../../components/Button";
import { handleCount } from "../../utils";
import './VideoUploaderInfo.scss';

type VideoUploaderInfoProps = {
  uploader: {
    name: string;
    followersCount: number;
    avatar: string;
  }
  uploadDate: string;
}

export const VideoUploaderInfo = ({
  uploader,
  uploadDate
}: VideoUploaderInfoProps) => {
  const {
    avatar,
    followersCount,
    name
  } = uploader;
  return (
    <div className="creator">
      <div className="creator__wrapper-left">
        <img
          src={avatar}
          alt={`${name} profile picture`}
        />
        <div className="creator__container">
          <span>{name}</span>
          <span>{handleCount(followersCount)} followers</span>
        </div>
        <Button icon={<></>}>
          Follow
        </Button>
      </div>
      <div className="creator__wrapper-right">
        <span>Uploaded:</span>
        <span>{uploadDate}</span>
      </div>
    </div>
  )
}