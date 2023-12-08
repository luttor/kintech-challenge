const options = {
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
  hour: "2-digit",
  minute: "2-digit",
  hour12: false,
  timeZone: "UTC",
};

export const formattedDate = (inputDate: Date) =>
  new Intl.DateTimeFormat("en-US", options).format(inputDate);
