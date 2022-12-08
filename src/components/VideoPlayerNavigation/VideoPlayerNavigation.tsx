import { useMemo } from 'react';

import { ProgressBar } from "../../components/ProgressBar";
import { convertDurationToString } from "../../utils";
import volumeIcon from '../../assets/volume-icon@2x.png';
import fullscreenIcon from '../../assets/fullscreen-icon@2x.png';
import './VideoPlayerNavigation.scss';

type VideoPlayerNavigationProps = {
  duration: number;
  progress: number;
}

export const VideoPlayerNavigation = ({
  duration,
  progress
}: VideoPlayerNavigationProps) => {
  const finalLength = useMemo(() => convertDurationToString(duration), [])
  return (
    <div className="navigation">
      <div className="play-button" />
      <ProgressBar
        progress={progress}
        duration={duration}
      />
      <span className="navigation__progress">
        {convertDurationToString(progress)}&nbsp;/&nbsp;{finalLength}</span>
      <img src={volumeIcon} />
      <input type="range" />
      <span>720</span>
      <img src={fullscreenIcon} />
    </div>
  );
};