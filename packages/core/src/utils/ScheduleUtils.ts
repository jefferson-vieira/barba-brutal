export default class ScheduleUtils {
  private static intervals = [0, 15, 30, 45];

  static daySlots() {
    return {
      afternoon: this.getSlots([14, 15, 16, 17]),
      morning: this.getSlots([8, 9, 10, 11]),
      night: this.getSlots([18, 19, 20, 21]),
    };
  }

  private static getSlots(hours: number[]) {
    return hours.reduce<string[]>((slots, hour) => {
      const hourSlots = this.intervals.map((min) => {
        return `${String(hour).padStart(2, '0')}:${String(min).padStart(2, '0')}`;
      });

      return slots.concat(hourSlots);
    }, []);
  }
}
