type LogoProps = {
  showTagline?: boolean;
};

export default function Logo({ showTagline = false }: LogoProps) {
  return (
    <div className="select-none">
      <h1 className="text-2xl font-bold tracking-tight">
        <span className="text-emerald-500">Tim</span>
        <span className="text-white">oks18</span>
      </h1>

      {showTagline && (
        <p className="text-sm text-gray-400 mt-1">
          Software Engineer • Investor • Traveler • Food Lover
        </p>
      )}
    </div>
  );
}