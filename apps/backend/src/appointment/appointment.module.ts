import { Module } from '@nestjs/common';
import { AppointmentController } from './appointment.controller';
import { AppointmentRepository } from './appointment.repository';
import { DbModule } from 'src/db/db.module';

@Module({
  imports: [DbModule],
  controllers: [AppointmentController],
  providers: [AppointmentRepository],
})
export class AppointmentModule {}
