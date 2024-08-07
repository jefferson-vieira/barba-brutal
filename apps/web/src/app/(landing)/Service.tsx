import Image from 'next/image';
import Link from 'next/link';

import type { Service } from '@barba-brutal/core';

import { toCurrency } from '@/utils/currency';

interface Props {
  service: Service;
}

export default function Service({ service }: Props) {
  const { description, logoUrl, name, price } = service;

  return (
    <Link
      className="flex select-none overflow-hidden rounded-xl bg-zinc-800"
      href="/appointment"
    >
      <Image
        alt={name}
        className="object-cover"
        height={150}
        src={logoUrl}
        width={150}
      />

      <div className="flex flex-col gap-2 p-5">
        <span className="text-xl font-black">{name}</span>

        <span className="flex-1 text-xs text-zinc-400">{description}</span>

        <span className="text-lg font-bold">{toCurrency(price)}</span>
      </div>
    </Link>
  );
}
