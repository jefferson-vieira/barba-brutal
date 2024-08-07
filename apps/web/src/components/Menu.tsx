import Logo from '@/components/Logo';
import UserMenu from '@/components/UserMenu';

export default function Menu() {
  return (
    <header className="flex h-24 items-center justify-center self-stretch bg-black/60">
      <nav className="container flex items-center justify-between">
        <Logo />

        <UserMenu />
      </nav>
    </header>
  );
}
