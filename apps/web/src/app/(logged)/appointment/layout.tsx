import type { ReactNode } from 'react';

import AppointmentProvider from '@/contexts/appointment';

export default function Layout({ children }: { children: ReactNode }) {
  return <AppointmentProvider>{children}</AppointmentProvider>;
}
