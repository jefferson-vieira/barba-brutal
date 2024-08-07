import { IconCalendar } from '@tabler/icons-react';
import { Loader2 } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

import { useAppointmentContext } from '@/contexts/appointment';

export default function Summary() {
  const [carregando, setCarregando] = useState(false);

  const {
    scheduleAppointment: agendar,
    date: data,
    duration,
    subtotal: precoTotal,
    professional,
    services,
  } = useAppointmentContext();

  const router = useRouter();

  async function finalizarAgendamento() {
    try {
      setCarregando(true);

      await agendar();

      router.push('/appointment/success');
    } finally {
      setCarregando(false);
    }
  }

  function renderService(name: string, i: number) {
    return (
      <div
        key={i}
        className="flex items-center rounded-md bg-zinc-700"
      >
        <span className="flex w-5 items-center justify-center bg-black/25 px-3 py-1.5 text-xs text-zinc-400">
          {i}
        </span>

        <span className="px-2 text-sm font-light text-zinc-300">{name}</span>
      </div>
    );
  }

  function podeFinalizar() {
    if (!professional) return false;
    if (!services.length) return false;

    return data && data.getHours() >= 8 && data.getHours() <= 21;
  }

  return (
    <div className="flex w-96 flex-col rounded-lg bg-zinc-950 lg:w-96">
      <div className="flex gap-2 border-b border-zinc-800 p-4">
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-zinc-800">
          <IconCalendar
            size={20}
            stroke={1}
          />
        </div>

        <div className="flex flex-col">
          <span className="font-bold leading-6 text-zinc-300">
            Sumário do agendamento
          </span>

          <span className="text-xs leading-3 text-zinc-500">
            Será um prazer atendê-lo!
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-6 border-b border-zinc-800 p-5">
        <div className="flex flex-col gap-3">
          <span className="text-xs uppercase text-zinc-400">Profissional</span>

          <span className="text-sm text-white">
            {professional ? professional.name : 'Não selecionado'}
          </span>
        </div>

        <div className="flex flex-col gap-3">
          <span className="text-xs uppercase text-zinc-400">Serviços</span>

          <span className="flex flex-wrap gap-2 text-sm text-white">
            {services.length
              ? services.map((service, i) => renderService(service.name, i + 1))
              : 'Não selecionado'}
          </span>
        </div>

        <div className="flex flex-col gap-3">
          <span className="text-xs uppercase text-zinc-400">Duração</span>

          <span className="text-sm text-white">{duration}</span>
        </div>

        <div className="flex flex-col gap-3">
          <span className="text-xs uppercase text-zinc-400">Horário</span>

          <span className="text-sm text-white">
            {data &&
              data.toLocaleString('pt-br', {
                dateStyle: 'full',
                timeStyle: 'short',
              })}
          </span>
        </div>
      </div>

      <div className="flex items-center justify-between border-b border-zinc-800 p-5">
        <span className="text-xs uppercase text-zinc-400">Valor Total</span>

        <span className="font-semibold text-white">R$ {precoTotal},00</span>
      </div>

      <div className="p-5">
        <button
          className={`flex items-center justify-center text-sm font-semibold ${podeFinalizar() ? 'bg-yellow-400' : 'bg-zinc-600'} w-full rounded-lg py-3 text-zinc-900`}
          disabled={!podeFinalizar()}
          onClick={finalizarAgendamento}
        >
          {carregando && data ? (
            <Loader2
              className="animate-spin"
              size={20}
            />
          ) : (
            'Finalizar Agendamento'
          )}
        </button>
      </div>
    </div>
  );
}
