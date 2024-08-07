'use client';

import { useState } from 'react';

import type { Professional, Service } from '@barba-brutal/core';

import ProfessionalInput from '@/components/agendamento/ProfissionalInput';
import ServiceInput from '@/components/agendamento/ServicosInput';
import Header from '@/components/Header';
import Stepper from '@/components/Stepper';

import { useAppointmentContext } from '@/contexts/appointment';

import DateTimeInput from './datetimeinput';
import Summary from './Summary';

export default function PaginaAgendamento() {
  const [canContinue, setCanContinue] = useState(false);

  const {
    date,
    professional,
    services,
    setDate,
    setProfessional,
    setServices,
    totalSlots,
  } = useAppointmentContext();

  function handleProfessionalsChange(professional: Professional) {
    setProfessional(professional);

    setCanContinue(true);
  }

  function handleServicesChange(services: Service[]) {
    setServices(services);

    setCanContinue(services.length > 0);
  }

  function handleDateChange(date: Date) {
    setDate(date);

    setCanContinue(true);
  }

  return (
    <div className="flex flex-col bg-zinc-900">
      <Header
        description="Seja atendido exatamente no horário marcado."
        title="Agendamento de Serviços"
      />

      <div className="container flex flex-col items-center gap-10 py-10 lg:flex-row lg:items-start lg:justify-around lg:gap-0">
        <Stepper
          canContinue={canContinue}
          labels={[
            'Selecione o profissional',
            'Informe os serviços',
            'Escolha o horário',
          ]}
          onStepChange={setCanContinue}
        >
          <ProfessionalInput
            value={professional}
            onChange={handleProfessionalsChange}
          />

          <ServiceInput
            value={services}
            onChange={handleServicesChange}
          />

          <DateTimeInput
            slots={totalSlots}
            value={date}
            onChange={handleDateChange}
          />
        </Stepper>

        <Summary />
      </div>
    </div>
  );
}
