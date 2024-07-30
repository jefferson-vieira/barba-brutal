const A_MINUTE_IN_MS = 60_000;

export default class DateTimeUtils {
  constructor(private date: Date) {}

  static minutesToMilliseconds(minutes: number) {
    return minutes * A_MINUTE_IN_MS;
  }

  static setTime(date: Date, time: string): Date {
    const newDate = new Date(date);

    const [hours, min] = time.split(':');

    newDate.setHours(parseInt(hours!), parseInt(min!));

    return newDate;
  }

  static today() {
    const today = new Date();

    today.setHours(0, 0, 0, 0);

    return today;
  }

  plusMinutes(minutes: number): Date {
    return new Date(
      this.date.getTime() + DateTimeUtils.minutesToMilliseconds(minutes),
    );
  }
}
