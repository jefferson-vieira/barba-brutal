import Image from 'next/image';
import Link from 'next/link';

import Header from '@/components/Header';

export default function PaginaAgendamento() {
  return (
    <div className="flex flex-col bg-zinc-900">
      <Header
        description="Seu horário está garantido e será um prazer te atender!"
        title="Agendamento de Serviços"
      />

      <div className="container flex flex-col items-center justify-around gap-1 py-10">
        <Image
          alt="Agendado com Sucesso"
          height={400}
          src="/agendamento.png"
          width={400}
        />

        <h2 className="text-3xl font-black">Iradoooo! Tudo marcado!</h2>

        <h3 className="w-96 text-center text-lg font-thin text-zinc-400">
          Tudo certo por aqui! Seu horário está garantido e agora é só aguardar
          para brilhar!
        </h3>

        <Link
          className="button mt-7 bg-green-600"
          href="/"
        >
          Voltar para o início
        </Link>
      </div>
    </div>
  );
}
