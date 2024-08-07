const SUNDAY_WEEKDAY = 0;

const NO_WORKDAY = SUNDAY_WEEKDAY;

export default function filterNoWorkdays(date: Date) {
  return date.getDay() !== NO_WORKDAY;
}
