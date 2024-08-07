'use client';

import type { ReactNode } from 'react';

import { usePathname, useRouter } from 'next/navigation';

import Page from '@/components/Page';

import { useUser } from '@/contexts/user';

export default function Layout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();

  const { user } = useUser();

  if (!user) {
    router.push(`/login?to=${pathname}`);

    return (
      <div className="flex h-screen items-center justify-center">
        Direcionando...
      </div>
    );
  }

  return <Page>{children}</Page>;
}
