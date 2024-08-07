'use client';

import type { Route } from 'next';
import type { SubmitHandler } from 'react-hook-form';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { Controller, useForm } from 'react-hook-form';

import type { User } from '@barba-brutal/core';
import { TelUtils } from '@barba-brutal/core';

import Logo from '@/components/Logo';

import { useUser } from '@/contexts/user';

export default function Login() {
  const router = useRouter();
  const params = useSearchParams();

  const { login, user } = useUser();

  const { control, handleSubmit, register } = useForm<User>();

  if (user) {
    const redirectUrl = (params.get('to') as Route) ?? '/';

    router.push(redirectUrl);

    return;
  }

  const onSubmit: SubmitHandler<User> = (data) => {
    login(data);
  };

  return (
    <div className="relative flex h-screen items-center justify-center">
      <Image
        alt="Barbearia"
        className="object-cover"
        fill
        src="/banners/principal.webp"
      />

      <div className="absolute left-0 top-0 flex h-full w-full flex-col items-center justify-center gap-10 bg-black/80 from-black/30 via-black/90 to-black/30 md:bg-transparent md:bg-gradient-to-r">
        <Logo />

        <div className="flex w-1/5 flex-col gap-5">
          <form
            className="flex flex-col gap-4 rounded"
            onSubmit={handleSubmit(onSubmit)}
          >
            <input
              {...register('name', {
                required: true,
              })}
              className="rounded bg-zinc-900 px-4 py-2"
              placeholder="Nome"
              type="text"
            />

            <input
              {...register('email', {
                required: true,
              })}
              className="rounded bg-zinc-900 px-4 py-2"
              placeholder="E-mail"
              type="email"
            />

            <Controller
              control={control}
              name="mobilePhone"
              render={({ field }) => (
                <input
                  className="rounded bg-zinc-900 px-4 py-2"
                  placeholder="Telefone"
                  type="tel"
                  value={TelUtils.format(field.value)}
                  onChange={(e) =>
                    field.onChange(TelUtils.onlyNumbers(e.target.value))
                  }
                />
              )}
              rules={{
                required: true,
              }}
            />

            <div className="flex gap-5">
              <button
                className="button flex-1 bg-green-600"
                type="submit"
              >
                Entrar
              </button>

              <Link
                className="button flex-1 text-center"
                href="/"
              >
                Cancelar
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
