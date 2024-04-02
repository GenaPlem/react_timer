export const formatTime = (ms) => {
    const seconds = Math.floor(ms / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);

    const displaySeconds = seconds % 60;
    const displayMinutes = minutes % 60;
    const displayHours = hours;

    const paddedHours = String(displayHours).padStart(2, '0');
    const paddedMinutes = String(displayMinutes).padStart(2, '0');
    const paddedSeconds = String(displaySeconds).padStart(2, '0');

    return `${paddedHours}:${paddedMinutes}:${paddedSeconds}`;
}