import type Appointment from './Appointment';

export default interface AppointmentRepository {
  create(appointment: Appointment): Promise<void>;

  findByDateAndProfessional(
    date: Date,
    professional: number,
  ): Promise<Appointment[]>;

  findByEmail(email: string): Promise<Appointment[]>;
}
