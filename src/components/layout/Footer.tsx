import Logo from "../common/Logo";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-slate-950">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-10 md:flex-row md:items-center md:justify-between">
        <div>
          <Logo />
          <p className="mt-2 text-sm text-slate-400">
            Building software, sharing experiences, and documenting the journey.
          </p>
        </div>

        <div className="text-sm text-slate-500">
          © {year} Timoks18. All rights reserved.
        </div>
      </div>
    </footer>
  );
}