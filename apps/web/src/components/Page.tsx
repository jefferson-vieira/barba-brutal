import type { ReactNode } from 'react';

import Footer from './Footer';

interface Props {
  children: ReactNode;
}

export default function Page({ children }: Props) {
  return (
    <div className="flex min-h-full w-full flex-col">
      <main>{children}</main>

      <Footer />
    </div>
  );
}
