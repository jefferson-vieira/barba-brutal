import type { Professional } from '../professional';
import type { Service } from '../service';

export default interface Appointment {
  clientEmail: string;
  date: Date;
  id: number;
  professional: Professional;
  services: Service[];
}
