import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandWhatsapp,
  IconBrandYoutube,
} from '@tabler/icons-react';

import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="flex items-center bg-black">
      <div className="container flex flex-col gap-7 py-10">
        <div className="flex flex-col items-center gap-5 md:flex-row md:items-start md:justify-between">
          <Logo />

          <div className="flex flex-col items-center gap-1 md:items-start">
            <span className="mb-2.5 text-2xl font-bold text-zinc-300">
              Sobre
            </span>

            <span className="text-sm text-zinc-400">Nossa História</span>

            <span className="text-sm text-zinc-400">
              Política de Privacidade
            </span>

            <span className="text-sm text-zinc-400">Termos de Uso</span>
          </div>

          <div className="flex flex-col items-center gap-1 md:items-start">
            <span className="mb-2.5 text-2xl font-bold text-zinc-300">
              Contato
            </span>

            <span className="text-sm text-zinc-400">
              suporte@barbabrutal.com.br
            </span>

            <div className="flex items-center gap-2 text-sm text-zinc-400">
              <IconBrandWhatsapp
                className="text-green-500"
                size={20}
              />

              <span>Whatsapp</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-5 md:flex-row">
          <div className="flex gap-2 text-zinc-400">
            <IconBrandYoutube
              size={28}
              stroke={1}
            />

            <IconBrandInstagram
              size={28}
              stroke={1}
            />

            <IconBrandFacebook
              size={28}
              stroke={1}
            />

            <IconBrandLinkedin
              size={28}
              stroke={1}
            />
          </div>

          <div className="flex flex-col items-center gap-1.5 text-sm text-zinc-400 md:flex-row">
            <div className="flex gap-1.5">
              <span>Feito com</span>

              <span>🪓</span>

              <span>em {new Date().getFullYear()}</span>
            </div>

            <span className="hidden md:inline-block">-</span>

            <span>Todos os direitos reservados</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
