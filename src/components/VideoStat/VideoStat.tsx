import { handleCount } from "../../utils";
import './VideoStat.scss';

type VideoStatProps = {
  icon: string;
  count: number;
  alt: string;
}

export const VideoStat = ({
  icon,
  count,
  alt
}: VideoStatProps) => {
  return (
    <span className="single-stat">
      <img
        src={icon}
        alt={alt}
      />
      {handleCount(count)}
    </span>
  );
};