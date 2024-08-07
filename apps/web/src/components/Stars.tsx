import {
  IconStar,
  IconStarFilled,
  IconStarHalfFilled,
} from '@tabler/icons-react';

interface Props {
  value: number;
}

export default function Stars({ value }: Props) {
  return (
    <div className="flex items-center gap-1 text-yellow-400">
      {Array.from({ length: 5 }, (_, index) => {
        const star = index + 1;

        if (value >= star) {
          return (
            <IconStarFilled
              key={index}
              size={18}
            />
          );
        }

        if (value + 1 > star) {
          return (
            <IconStarHalfFilled
              key={index}
              size={18}
            />
          );
        }

        return (
          <IconStar
            key={index}
            size={18}
          />
        );
      })}
    </div>
  );
}
