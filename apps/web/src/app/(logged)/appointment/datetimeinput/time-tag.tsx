import { IconX } from '@tabler/icons-react';

import { cn } from '@barba-brutal/ui/utils';

import { useAppointmentContext } from '@/contexts/appointment';

interface Props {
  onClick: () => void;
  onHoverIn: () => void;
  onHoverOut: () => void;
  schedule: string[];
  selectedSchedule: string[];
  slots: number;
  time: string;
}

export default function TimeTag({
  onClick,
  onHoverIn,
  onHoverOut,
  schedule,
  selectedSchedule,
  slots,
  time,
}: Props) {
  const { busySlots: busyTimes } = useAppointmentContext();

  const availableSchedule = schedule.length === slots;

  const isTimeInSchedule = schedule.includes(time);

  const unavailableTime = !availableSchedule && isTimeInSchedule;

  const busySchedule =
    isTimeInSchedule &&
    schedule.some((scheduleTime) => busyTimes.includes(scheduleTime));

  const busyTime = busyTimes.includes(time);

  const handleClick = () => {
    if (unavailableTime || busySchedule || busyTime) {
      return;
    }

    onClick();
  };

  const highlightTime = availableSchedule && isTimeInSchedule;

  const selectedTime =
    selectedSchedule.length === slots && selectedSchedule.includes(time);

  return (
    <div
      className={cn(
        'flex h-8 cursor-pointer select-none items-center justify-center rounded border border-zinc-800 text-sm text-zinc-400',
        {
          'bg-green-500 font-semibold text-white': selectedTime,
          'bg-red-500': unavailableTime || busySchedule,
          'bg-yellow-400 font-semibold text-black': highlightTime,
          'cursor-not-allowed bg-zinc-800 font-semibold text-zinc-400':
            busyTime,
        },
      )}
      onClick={handleClick}
      onMouseEnter={onHoverIn}
      onMouseLeave={onHoverOut}
    >
      {unavailableTime || busySchedule || busyTime ? (
        <IconX
          className="text-white"
          size={18}
        />
      ) : (
        time
      )}
    </div>
  );
}
