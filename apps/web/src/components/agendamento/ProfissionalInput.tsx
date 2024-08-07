import Image from 'next/image';

import type { Professional } from '@barba-brutal/core';
import { cn } from '@barba-brutal/ui/utils';

import useProfessionals from '@/hooks/useProfessionals';

interface Props {
  onChange: (professional: Professional) => void;
  value: null | Professional;
}

export default function ProfessionalInput({ onChange, value }: Props) {
  const { professionals } = useProfessionals();

  return (
    <div className="flex flex-col gap-5">
      <span className="text-sm uppercase text-zinc-400">
        Profissionais disponíveis
      </span>

      <div className="grid grid-cols-2 gap-5 self-start md:grid-cols-3">
        {professionals.map((professional) => {
          const { avatarUrl, id, name } = professional;

          const selected = value?.id === id;

          return (
            <div
              key={id}
              className={cn(
                'flex h-[180px] w-[150px] cursor-pointer select-none flex-col items-center overflow-hidden rounded-lg border',
                selected ? 'border-green-400' : 'border-zinc-700',
              )}
              onClick={() => onChange(professional)}
            >
              <Image
                alt={name}
                height={150}
                src={avatarUrl}
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
