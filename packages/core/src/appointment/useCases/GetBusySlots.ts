import { SLOT_DURATION_MS } from '@/constants';
import DateTimeUtils from '@/utils/DateTimeUtils';

import type AppointmentRepository from '../AppointmentRepository';

export default class GetBusySlots {
  constructor(private readonly appointmentRepository: AppointmentRepository) {}

  async execute(professionalId: number, date: Date): Promise<string[]> {
    const appointments =
      await this.appointmentRepository.findByDateAndProfessional(
        date,
        professionalId,
      );

    const busySlots = appointments
      .map((appointment) => {
        return {
          date: appointment.date,
          requiredSlots: appointment.services.reduce(
            (total, service) => total + service.totalSlots,
            0,
          ),
        };
      })
      .reduce((busySlots, { date, requiredSlots }) => {
        const serviceDuration = Array.from({ length: requiredSlots }, (_, i) =>
          new DateTimeUtils(date).plusMinutes(i * SLOT_DURATION_MS),
        );

        return [...busySlots, ...serviceDuration];
      }, [] as Date[])
      .map((date) => date.toTimeString().slice(0, 5));

    return busySlots;
  }
}
