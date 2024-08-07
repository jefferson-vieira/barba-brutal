import Image from 'next/image';

import type { Service } from '@barba-brutal/core';
import { cn } from '@barba-brutal/ui/utils';

import useServices from '@/hooks/useServices';

interface Props {
  onChange: (services: Service[]) => void;
  value: Service[];
}

export default function ServiceInput({ onChange, value }: Props) {
  const { services } = useServices();

  function handleToggleServiceSelectionClick(
    service: Service,
    isSelected: boolean,
  ) {
    onChange(
      isSelected
        ? value.toSpliced(value.indexOf(service), 1)
        : [...value, service],
    );
  }

  return (
    <div className="flex flex-col gap-5">
      <span className="text-sm uppercase text-zinc-400">
        Serviços disponíveis
      </span>

      <div className="grid grid-cols-3 gap-5 self-start">
        {services.map((service) => {
          const { id, logoUrl, name } = service;

          const selected = value.some(({ id }) => id === service.id);

          return (
            <div
              key={id}
              className={cn(
                'flex cursor-pointer select-none flex-col items-center overflow-hidden rounded-lg border',
                selected ? 'border-green-400' : 'border-zinc-700',
              )}
              onClick={() =>
                handleToggleServiceSelectionClick(service, selected)
              }
            >
              <Image
                alt={name}
                height={120}
                src={logoUrl}
                width={150}
              />

              <div
                className={cn(
                  'h-full w-full py-2 text-center text-xs',
                  selected
                    ? 'bg-green-400 font-semibold text-black'
                    : 'bg-zinc-900 font-light text-zinc-400',
                )}
              >
                {name}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
