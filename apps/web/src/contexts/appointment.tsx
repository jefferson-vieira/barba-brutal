'use client';

import type { ReactNode } from 'react';

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';

import type { Professional, Service } from '@barba-brutal/core';
import { DateTimeUtils, SLOT_DURATION_MS } from '@barba-brutal/core';

import { CURRENT_WORKWEEK } from '@/constants';
import { useUser } from '@/contexts/user';
import useAPI from '@/hooks/useAPI';

const SLOT_DURATION_MIN = SLOT_DURATION_MS / 60_000;

const ONE_HOUR_MIN = 60;

interface IAppointmentContext {
  busySlots: string[];
  date: Date;
  duration: string;
  professional: null | Professional;
  scheduleAppointment(): Promise<void>;
  services: Service[];
  setDate(data: Date): void;
  setProfessional(profissional: Professional): void;
  setServices(servicos: Service[]): void;
  subtotal: number;
  totalSlots: number;
}

const AppointmentContext = createContext({} as IAppointmentContext);

export const useAppointmentContext = () => useContext(AppointmentContext);

export default function AppointmentProvider({
  children,
}: {
  children: ReactNode;
}) {
  const { user } = useUser();

  const { httpGet, httpPost } = useAPI();

  const [busySlots, setBusySlots] = useState<string[]>([]);
  const [date, setDate] = useState<Date>(CURRENT_WORKWEEK[0]);
  const [professional, setProfessional] = useState<null | Professional>(null);
  const [services, setServices] = useState<Service[]>([]);

  const duration = useMemo(() => {
    const duration = services.reduce((duration, service) => {
      return duration + service.totalSlots * SLOT_DURATION_MIN;
    }, 0);

    return `${Math.trunc(duration / ONE_HOUR_MIN)}h ${duration % ONE_HOUR_MIN}m`;
  }, [services]);

  const subtotal = useMemo(
    () => services.reduce((subtotal, service) => subtotal + service.price, 0),
    [services],
  );

  const totalSlots = useMemo(
    () =>
      services.reduce(
        (totalSlots, service) => totalSlots + service.totalSlots,
        0,
      ),
    [services],
  );

  async function scheduleAppointment() {
    if (!user?.email) {
      return;
    }

    await httpPost('appointments', {
      clientEmail: user.email,
      date: date!,
      professional: professional!,
      services,
    });

    clear();
  }

  function clear() {
    setBusySlots([]);
    setDate(DateTimeUtils.today());
    setProfessional(null);
    setServices([]);
  }

  const getBusySlots = useCallback(
    async (date: Date, professional: Professional): Promise<string[]> => {
      if (!date || !professional) {
        return [];
      }

      try {
        const dateOnly = date.toISOString().slice(0, 10);

        const busySlots = await httpGet(
          `appointments/busy/${professional.id}/${dateOnly}`,
        );

        return busySlots ?? [];
      } catch (error) {
        console.log(error);

        return [];
      }
    },
    [httpGet],
  );

  useEffect(() => {
    if (!date || !professional) {
      return;
    }

    getBusySlots(date, professional).then(setBusySlots);
  }, [date, professional, getBusySlots]);

  return (
    <AppointmentContext.Provider
      value={{
        busySlots,
        date,
        duration,
        professional,
        scheduleAppointment,
        services,
        setDate,
        setProfessional,
        setServices,
        subtotal,
        totalSlots,
      }}
    >
      {children}
    </AppointmentContext.Provider>
  );
}
