'use client';

import Image from 'next/image';
import Link from 'next/link';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@barba-brutal/ui/dropdown-menu';

import { useUser } from '@/contexts/user';

export default function UserMenu() {
  const { logout, user } = useUser();

  if (!user) {
    return <Link href="/login">Entrar</Link>;
  }

  const { email, name } = user;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div className="flex items-center gap-2">
          <div className="flex flex-col items-end">
            <span className="text-lg font-bold leading-5">{name}</span>

            <span className="text-xs text-zinc-400">{email}</span>
          </div>

          <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-zinc-700 p-1">
            <Image
              alt={name}
              height={40}
              src="/avatar.png"
              width={40}
            />
          </div>
        </div>
      </DropdownMenuTrigger>

      <DropdownMenuContent>
        <DropdownMenuItem
          className="cursor-pointer"
          onClick={logout}
        >
          Logout (Sair)
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
