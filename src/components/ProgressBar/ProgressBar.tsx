import './ProgressBar.scss';

type ProgressBarProps = {
  progress: number;
  duration: number;
}

export const ProgressBar = ({
  progress,
  duration }: ProgressBarProps) => {
  const progressPercentage = (progress / duration) * 100;

  return (
    <div className="progress__wrapper">
      <div
        className="progress__bar"
        style={{ width: `${progressPercentage}%` }}
      />
    </div>
  );
};