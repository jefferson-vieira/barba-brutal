import type { ReactNode } from 'react';

import Image from 'next/image';

interface Props {
  background: string;
  children: ReactNode;
  description: string;
  tag: string;
  title: string;
}

export default function Container({
  background,
  children,
  description,
  tag,
  title,
}: Props) {
  return (
    <section className="relative">
      <Image
        alt="Background"
        className="-z-30 object-cover"
        fill
        src={background}
      />

      <div className="bg-black/90 from-black/80 via-black/95 to-black/80 sm:bg-transparent sm:bg-gradient-to-r">
        <div className="container flex flex-col gap-16 py-10">
          <header className="flex flex-col items-center gap-2">
            <div className="mb-2 rounded-md bg-zinc-700 px-4 py-1.5 text-sm font-black md:text-base">
              {tag}
            </div>

            <h2 className="text-gradient text-2xl font-bold sm:text-4xl md:text-5xl">
              {title}
            </h2>

            <h3 className="px-7 text-center text-zinc-500 md:w-[450px] md:px-0">
              {description}
            </h3>
          </header>

          {children}
        </div>
      </div>
    </section>
  );
}
