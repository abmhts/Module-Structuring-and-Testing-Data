function formatAs12HourClock(time) {
  const hours = Number(time.slice(0, 2));
  const minutes = time.slice(3, 5);
  if (hours === 0) {
    return `12:${minutes} am`;
  } else if (hours < 12) {
    return `${time} am`;
  } else if (hours === 12) {
    return `${time} pm`;
  }
  return `${String(hours - 12).padStart(2, "0")}:${minutes} pm`;
}
export { formatAs12HourClock };
