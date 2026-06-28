import { siteConfig } from "../../config/site";

type LogoProps = {
  showTagline?: boolean;
};

export default function Logo({ showTagline = false }: LogoProps) {
  const [firstWord, ...rest] = siteConfig.name.split(" ");

  return (
    <div className="select-none">
     <h1 className="text-2xl font-bold tracking-tight text-emerald-500">
  {siteConfig.name}
     </h1>

      {showTagline && (
        <p className="mt-1 text-sm text-slate-400">
          {siteConfig.tagline}
        </p>
      )}
    </div>
  );
}