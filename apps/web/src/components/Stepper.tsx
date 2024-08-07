import type { ReactElement } from 'react';

import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react';
import { useState } from 'react';

export interface PassosProps {
  canContinue: boolean;
  children: ReactElement[];
  labels: string[];
  onStepChange(valor: boolean): void;
}

export default function Stepper(props: PassosProps) {
  const [step, setStep] = useState(0);

  function passoAnterior() {
    setStep(step - 1);

    props.onStepChange(true);
  }

  function proximoPasso() {
    setStep(step + 1);

    props.onStepChange(false);
  }

  return (
    <div className="flex flex-col items-center gap-10 lg:items-stretch">
      <div className="flex flex-col gap-4 md:flex-row md:gap-7">
        {props.labels.map((label, i) => {
          const isCurrentStep = i === step;

          return (
            <div
              key={i}
              className="flex items-center gap-2"
            >
              <span
                className={`flex h-9 w-9 items-center justify-center rounded-full p-1 font-bold ${isCurrentStep ? 'bg-white text-black' : 'bg-zinc-700 text-zinc-500'}`}
              >
                {i + 1}
              </span>

              <span className={isCurrentStep ? 'text-white' : 'text-zinc-700'}>
                {label}
              </span>
            </div>
          );
        })}
      </div>

      <div>{props.children[step]}</div>

      <div className="flex select-none gap-3">
        <button
          className="flex items-center gap-1 rounded-md bg-zinc-700 px-4 py-1.5 text-sm text-white disabled:opacity-30"
          disabled={step === 0}
          onClick={passoAnterior}
        >
          <IconChevronLeft size={20} />

          <span>Anterior</span>
        </button>

        <button
          className="flex items-center gap-1 rounded-md bg-zinc-700 px-4 py-1.5 text-sm text-white disabled:opacity-30"
          disabled={
            step === (props.children?.length ?? 0) - 1 || !props.canContinue
          }
          onClick={proximoPasso}
        >
          <span>Próximo</span>

          <IconChevronRight size={20} />
        </button>
      </div>
    </div>
  );
}
