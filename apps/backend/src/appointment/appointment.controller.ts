import { Appointment, useCases } from '@barba-brutal/core';
import { AppointmentRepository } from './appointment.repository';
import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  ParseIntPipe,
} from '@nestjs/common';

@Controller('appointments')
export class AppointmentController {
  constructor(private readonly appointmentRepository: AppointmentRepository) {}

  @Post()
  create(@Body() appointment: Appointment) {
    return this.appointmentRepository.create(appointment);
  }

  @Get(':email')
  findByEmail(@Param('email') email: string) {
    return this.appointmentRepository.findByEmail(email);
  }

  @Get('busy/:professionalId/:date')
  findByDateAndProfessional(
    @Param('professionalId', ParseIntPipe) professionalId: number,
    @Param('date') date: string,
  ) {
    const useCase = new useCases.GetBusySlots(this.appointmentRepository);

    return useCase.execute(professionalId, new Date(date));
  }
}
