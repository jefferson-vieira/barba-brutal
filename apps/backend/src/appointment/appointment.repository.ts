import { Injectable } from '@nestjs/common';
// import {
//   Appointment,
//   AppointmentRepository as IAppointmentRepository,
// } from '@barba-brutal/core';
import { PrismaService } from 'src/db/prisma.service';

@Injectable()
export class AppointmentRepository /* implements IAppointmentRepository */ {
  constructor(private readonly prismaService: PrismaService) {}

  async create(appointment: any): Promise<void> {
    await this.prismaService.appointment.create({
      data: {
        date: appointment.date,
        clientEmail: appointment.clientEmail,
        professional: { connect: { id: appointment.professional.id } },
        services: { connect: appointment.services.map(({ id }) => ({ id })) },
      },
    });
  }

  findByEmail(email: string): Promise<any[]> {
    return this.prismaService.appointment.findMany({
      where: {
        clientEmail: email,
        date: {
          gte: new Date(),
        },
      },
      include: {
        services: true,
        professional: true,
      },
      orderBy: {
        date: 'desc',
      },
    });
  }

  async findByDateAndProfessional(
    date: Date,
    professional: number,
  ): Promise<any[]> {
    const year = date.getFullYear();
    const month = date.getUTCMonth();
    const day = date.getUTCDate();

    const dayStarts = new Date(year, month, day, 0, 0, 0);
    const dayEnds = new Date(year, month, day, 23, 59, 59);

    return this.prismaService.appointment.findMany({
      where: {
        professionalId: professional,
        date: {
          gte: dayStarts,
          lte: dayEnds,
        },
      },
      include: {
        services: true,
        professional: true,
      },
    });
  }
}
