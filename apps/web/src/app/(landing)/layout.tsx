import type { ReactNode } from 'react';

import Page from '@/components/Page';

interface Props {
  children: ReactNode;
}

export default function Layout({ children }: Props) {
  return <Page>{children}</Page>;
}
