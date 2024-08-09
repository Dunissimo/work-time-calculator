export const parseTimeAndConvertToMinutes = (time) => {
  const splittedTime = time.split(":");
  const hours = Number.parseInt(splittedTime[0], 10);
  const minutes = Number.parseInt(splittedTime[1], 10);

  return hours * 60 + minutes;
};

export const convertToFormat = (number) => {
  const tempHours = Math.trunc(number / 60);
  const hours = tempHours >= 10 ? tempHours : `0${tempHours}`;

  const tempMinutes = number % 60;
  const minutes = tempMinutes >= 10 ? tempMinutes : `0${tempMinutes}`;

  return `${hours}:${minutes}`;
};

export const formatMoney = (value) => {
  return new Intl.NumberFormat("ru-RU", {
    style: "currency",
    currency: "RUB",
  }).format(value);
};
