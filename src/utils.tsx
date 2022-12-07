export const handleCount = (count: number) => count.toLocaleString('en-US');

export const convertDurationToString = (duration: number) => {
  const tempSeconds = Math.floor(duration % 60)
  const tempMinutes = Math.floor((duration / 60) % 60)

  const seconds = (tempSeconds < 10) ? "0" + tempSeconds : tempSeconds;

  return `${tempMinutes}:${seconds}`;
}