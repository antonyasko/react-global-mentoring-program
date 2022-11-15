export function getTimeFromMinutes(time: string): string {
  const hours = Math.ceil(+time / 60);
  const minutes = +time % 60;

  return `${hours ? `${hours}h ` : ''}${minutes}min`;
}
