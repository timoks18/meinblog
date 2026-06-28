import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import { siteConfig } from "../../config/site";

export default function Hero() {
  return (
    <section className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-7xl items-center px-6">
      <div className="max-w-3xl">
        <p className="mb-4 text-lg font-semibold tracking-wide text-emerald-400">
          {siteConfig.tagline}
        </p>

        <h1 className="text-5xl font-extrabold leading-tight md:text-7xl">
          Building software.
          <br />
          Growing wealth.
          <br />
          Exploring the world.
        </h1>

        <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-300">
          {siteConfig.description}
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            to="/articles"
            className="inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-6 py-3 font-semibold text-slate-900 transition-all duration-200 hover:bg-emerald-400 hover:scale-105"
          >
            Read Articles
            <ArrowRight size={18} />
          </Link>

          <Link
            to="/travel"
            className="rounded-xl border border-slate-700 px-6 py-3 font-semibold transition-all duration-200 hover:border-emerald-500 hover:text-emerald-400 hover:scale-105"
          >
            Explore Travel
          </Link>
        </div>
      </div>
    </section>
  );
}