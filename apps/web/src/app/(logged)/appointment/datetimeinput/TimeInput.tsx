import { useMemo, useState } from 'react';

import { DateTimeUtils, ScheduleUtils } from '@barba-brutal/core';

import TimeTag from './time-tag';

const { afternoon, morning, night } = ScheduleUtils.daySlots();

function getSchedule(time: null | string, requiredSlots: number) {
  if (!time) {
    return [];
  }

  const times = morning.includes(time)
    ? morning
    : afternoon.includes(time)
      ? afternoon
      : night;

  const timeIndex = times.indexOf(time);

  return times.slice(timeIndex, timeIndex + requiredSlots);
}

export interface Props {
  onChange(data: Date): void;
  slots: number;
  value: Date;
}

export default function Time({ onChange, slots, value }: Props) {
  const [hoveredTime, setHoveredTime] = useState<null | string>(null);

  const selectedSchedule = useMemo(
    () =>
      getSchedule(
        value.toLocaleTimeString('pt-BR', {
          hour: '2-digit',
          minute: '2-digit',
        }),
        slots,
      ),
    [value, slots],
  );

  const nextSchedule = getSchedule(hoveredTime, slots);

  function renderTimeTag(time: string) {
    return (
      <TimeTag
        key={time}
        schedule={nextSchedule}
        selectedSchedule={selectedSchedule}
        slots={slots}
        time={time}
        onClick={() => {
          onChange(DateTimeUtils.setTime(value, time));
        }}
        onHoverIn={() => setHoveredTime(time)}
        onHoverOut={() => setHoveredTime(null)}
      />
    );
  }

  return (
    <div className="flex flex-col gap-5">
      <span className="text-sm uppercase text-zinc-400">
        Horários disponíveis
      </span>

      <div className="flex select-none flex-col gap-3">
        <span className="text-xs uppercase text-zinc-400">Manhã</span>

        <div className="grid grid-cols-8 gap-1">
          {morning.map(renderTimeTag)}
        </div>

        <span className="text-xs uppercase text-zinc-400">Tarde</span>

        <div className="grid grid-cols-8 gap-1">
          {afternoon.map(renderTimeTag)}
        </div>

        <span className="text-xs uppercase text-zinc-400">Noite</span>

        <div className="grid grid-cols-8 gap-1">{night.map(renderTimeTag)}</div>
      </div>
    </div>
  );
}
