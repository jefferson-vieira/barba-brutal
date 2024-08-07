import type { Metadata } from 'next';

import { Inter } from 'next/font/google';

import '@barba-brutal/ui/index.css';

import UserProvider from '@/contexts/user';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  description: 'Seu estilo é o nosso rock!',
  title: 'Barbearia Barba Brutal',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <UserProvider>{children}</UserProvider>
      </body>
    </html>
  );
}
