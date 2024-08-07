import { cn } from '@barba-brutal/ui/utils';

import { CURRENT_WORKWEEK } from '@/constants';

export interface Props {
  onChange(data: Date): void;
  value: Date;
}

export default function DateInput({ onChange, value }: Props) {
  return (
    <div className="flex flex-col gap-5">
      <span className="text-sm uppercase text-zinc-400">Dias disponíveis</span>

      <div className="flex gap-5 overflow-hidden rounded-lg bg-zinc-950">
        {CURRENT_WORKWEEK.map((date) => {
          const selected = date.getDate() === value.getDate();

          return (
            <div
              key={String(date)}
              className={cn(
                'flex flex-1 cursor-pointer flex-col items-center gap-2 py-4',
                selected ? 'bg-yellow-400 text-black' : 'text-zinc-400',
              )}
              onClick={() => onChange(date)}
            >
              <div className="flex items-center gap-1">
                <span className="text-2xl font-black">{date.getDate()}</span>

                <span className="text-xs font-light uppercase">
                  {date.toLocaleDateString('pt-BR', { month: 'short' })}
                </span>
              </div>

              <div
                className={cn(
                  'rounded-full px-3 py-0.5 text-center text-xs font-light uppercase',
                  selected ? 'bg-black/10' : 'bg-white/10',
                )}
              >
                {date.toLocaleDateString('pt-BR', { weekday: 'short' })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
