'use client';

import type { ComponentProps } from 'react';

import { clients } from '@barba-brutal/core/mocks';
import { LayoutGrid } from '@barba-brutal/ui/layout-grid';

import Container from '@/components/Container';

import Client from './Client';

const CARD_SPAN_MAP = [
  'md:col-span-2',
  'col-span-1',
  'col-span-1',
  'md:col-span-2',
];

export default function Clients() {
  const cards = clients.map<ComponentProps<typeof LayoutGrid>['cards'][number]>(
    ({ avatarUrl, id, name, testimony }, i) => {
      return {
        className: CARD_SPAN_MAP[i],
        content: (
          <Client
            name={name}
            testimony={testimony}
          />
        ),
        id,
        thumbnail: avatarUrl,
      };
    },
  );

  return (
    <Container
      background="/banners/clientes.webp"
      description="Nossos clientes são os chefes! Aqui eles mandam, desmandam e ainda saem com estilo de RockStar!"
      tag="Clientes"
      title="Quem Manda Aqui"
    >
      <div className="h-[900px] w-full">
        <LayoutGrid cards={cards} />
      </div>
    </Container>
  );
}
