import Logo from "../common/Logo";

const navigation = [
  "Home",
  "Articles",
  "Travel",
  "Recipes",
  "About",
  "Contact",
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-900/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Logo />

        <nav className="hidden gap-8 text-sm md:flex">
          {navigation.map((item) => (
            <a
              key={item}
              href="#"
              className="transition hover:text-emerald-400"
            >
              {item}
            </a>
          ))}
        </nav>

        <button className="rounded-lg border border-slate-700 p-2 md:hidden">
          ☰
        </button>
      </div>
    </header>
  );
}