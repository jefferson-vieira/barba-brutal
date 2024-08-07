import Image from 'next/image';
import Link from 'next/link';

import Menu from '@/components/Menu';

import Clients from './Clients';
import Professionals from './Professionals';
import Services from './Services';

export default function Landing() {
  return (
    <>
      <div className="relative h-[700px] py-10">
        <Image
          alt="Barbearia"
          className="object-cover"
          fill
          src="/banners/principal.webp"
        />

        <div className="absolute left-0 top-0 flex h-full w-full flex-col items-center bg-black/80 from-black/30 via-black/90 to-black/30 md:bg-transparent md:bg-gradient-to-r">
          <Menu />

          <div className="container z-50 flex flex-1 flex-col items-center justify-center gap-5">
            <h1 className="flex flex-col items-center">
              <span className="text-2xl font-thin tracking-wider sm:text-3xl md:text-4xl lg:text-5xl">
                Transformações
              </span>

              <span className="text-gradient pb-2 text-5xl font-black sm:text-6xl md:text-7xl lg:text-8xl">
                Lendárias
              </span>
            </h1>

            <p className="w-96 text-center text-base font-extralight text-zinc-400 sm:text-lg">
              🤘 Seu estilo é o nosso rock! 🤘
            </p>

            <Link
              className="rounded-md bg-gradient-to-r from-green-500 to-green-600 px-4 py-2 text-base font-semibold text-white hover:from-green-600 hover:to-green-700 md:text-lg"
              href="/appointment"
            >
              Agendar Agora
            </Link>
          </div>
        </div>
      </div>

      <Services />

      <Professionals />

      <Clients />
    </>
  );
}
