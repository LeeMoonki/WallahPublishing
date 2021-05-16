function animateValue({ start, end, duration, onProgress, onEnd }) {
  let startTimestamp = null;
  let lastValue = null;

  // timestamp : ms value
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;

    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    const value = Math.floor(progress * (end - start) + start);

    if (lastValue !== value) {
      lastValue = value;

      onProgress && onProgress(value);
    }

    if (progress < 1) {
      requestAnimationFrame(step);
    } else {
      onEnd && onEnd();
    }
  };
  requestAnimationFrame(step);
}
