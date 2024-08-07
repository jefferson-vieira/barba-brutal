import {
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandX,
  IconBrandYoutube,
} from '@tabler/icons-react';
import Image from 'next/image';

import type { Professional } from '@barba-brutal/core';

import Rating from '@/components/Rating';

interface Props {
  professional: Professional;
}

export default function Professional({ professional }: Props) {
  const { avatarUrl, description, name, rating, ratings } = professional;

  return (
    <div className="flex flex-col items-center rounded-lg bg-zinc-800 p-1">
      <div className="relative h-72 w-full">
        <Image
          alt={name}
          className="rounded-t-lg object-cover object-top"
          fill
          src={avatarUrl}
        />
      </div>

      <div className="flex flex-col gap-5 p-4">
        <span className="text-2xl font-black">{name}</span>

        <span className="text-sm text-zinc-400">{description}</span>

        <div className="flex flex-wrap gap-3">
          <Rating
            rating={rating}
            ratings={ratings}
          />
        </div>

        <div className="flex gap-3 text-zinc-300">
          <IconBrandYoutube stroke={1} />

          <IconBrandInstagram stroke={1} />

          <IconBrandX stroke={1} />

          <IconBrandLinkedin stroke={1} />
        </div>
      </div>
    </div>
  );
}
