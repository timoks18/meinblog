import { NavLink } from "react-router-dom";

import Logo from "../common/Logo";
import { siteConfig } from "../../config/site";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-900/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Logo />

        <nav className="hidden items-center gap-8 md:flex">
          {siteConfig.navigation.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors duration-200 ${
                  isActive
                    ? "text-emerald-400"
                    : "text-slate-300 hover:text-emerald-400"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <button
          className="rounded-lg border border-slate-700 p-2 md:hidden"
          aria-label="Open navigation menu"
        >
          ☰
        </button>
      </div>
    </header>
  );
}