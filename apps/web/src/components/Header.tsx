import Image from 'next/image';

import Menu from '@/components/Menu';

interface Props {
  description: string;
  title: string;
}

export default function Header({ description, title }: Props) {
  return (
    <div className="relative h-[180px] py-10">
      <Image
        alt="Barbearia"
        className="object-cover"
        fill
        src="/banners/principal.webp"
      />

      <div className="absolute left-0 top-0 flex h-full w-full flex-col items-center bg-black/80 from-black/30 via-black/90 to-black/30 md:bg-transparent md:bg-gradient-to-r">
        <Menu />

        <div className="container flex flex-1 flex-col items-center justify-center">
          <h1 className="text-3xl font-black text-white/70">{title}</h1>

          <p className="text-md font-light text-white/60">{description}</p>
        </div>
      </div>
    </div>
  );
}
