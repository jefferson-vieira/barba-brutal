import {
  IconStar,
  IconStarFilled,
  IconStarHalfFilled,
} from '@tabler/icons-react';

interface Props {
  rating: number;
  ratings: number;
}

export default function Rating({ rating, ratings }: Props) {
  const stars = Array.from({ length: 5 }, (_, index) => {
    const star = index + 1;

    if (rating >= star) {
      return (
        <IconStarFilled
          key={index}
          size={18}
        />
      );
    }

    if (rating + 1 > star) {
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
  });

  return (
    <div className="flex items-end gap-2">
      <div className="flex items-center gap-1 text-yellow-400">{stars}</div>

      <div className="flex text-xs text-zinc-300">({ratings})</div>
    </div>
  );
}
