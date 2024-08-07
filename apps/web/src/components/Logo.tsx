import Image from 'next/image';
import Link from 'next/link';

export default function Logo() {
  return (
    <Link
      className="flex h-14 items-center"
      href="/"
    >
      <Image
        alt="Logo"
        className="hidden sm:block"
        height={65}
        src="/logo.png"
        width={65}
      />

      <Image
        alt="Logo"
        className="block sm:hidden"
        height={50}
        src="/logo.png"
        width={50}
      />

      <div className="flex h-full flex-col justify-center">
        <span className="text-gradient text-xl font-extralight leading-6 tracking-widest sm:text-2xl">
          Barba
        </span>

        <span className="text-gradient pl-px text-[20px] font-bold leading-6 sm:text-[24px]">
          Brutal
        </span>
      </div>
    </Link>
  );
}
