import Logo from "../common/Logo";
import { NavLink } from "react-router-dom";

const navigation = [
  { label: "Home", to: "/" },
  { label: "Articles", to: "/articles" },
  { label: "Travel", to: "/travel" },
  { label: "Recipes", to: "/recipes" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-900/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Logo />

        <nav className="hidden gap-8 text-sm md:flex">
          {navigation.map((item) => (
  <NavLink
    key={item.to}
    to={item.to}
    className={({ isActive }) =>
      `transition ${
        isActive
          ? "text-emerald-400"
          : "text-white hover:text-emerald-400"
      }`
    }
  >
    {item.label}
  </NavLink>
))}
        </nav>

        <button className="rounded-lg border border-slate-700 p-2 md:hidden">
          ☰
        </button>
      </div>
    </header>
  );
}