let wpmValues: number[] = [];

export const calculateWPM = (
  time_taken: number,
  num_words: number
): { currentWPM: string | number; highestWPM: number; lowestWPM: number } => {
  const wpm: string | number =
    time_taken > 0 ? ((num_words / time_taken) * 60).toFixed(0) : 0;

  wpmValues.push(Number(wpm));

  const highestWPM: number = Math.max(...wpmValues);
  const lowestWPM: number = Math.min(...wpmValues);

  return {
    currentWPM: wpm,
    highestWPM,
    lowestWPM,
  };
};

export const calculateAccuracy = (
  correct: number,
  wrong: number
): string | number => {
  return correct + wrong > 0
    ? ((correct / (correct + wrong)) * 100).toFixed(1)
    : 0;
};

export const timeAgo = (curr_date: string): string => {
  const seconds = Math.floor(
    (new Date().getTime() - new Date(curr_date).getTime()) / 1000
  );

  const time_tables = [
    { label: "year", div: 31536000 },
    { label: "month", div: 2592000 },
    { label: "day", div: 86400 },
    { label: "hour", div: 3600 },
    { label: "minute", div: 60 },
  ];

  for (const table of time_tables) {
    const { label, div } = table;
    const interval = seconds / div;
    if (interval >= 1) {
      return `${Math.floor(interval).toString()} ${label}${
        interval > 1 ? "s" : ""
      } ago`;
    }
  }
  return "Just now";
};
