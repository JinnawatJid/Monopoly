import Link from "next/link";

export function TopAppBar() {
  return (
    <header className="w-full top-0 sticky bg-surface border-b border-outline-variant z-50 flex justify-between items-center px-margin-mobile md:px-margin-desktop h-16">
      <div className="flex items-center gap-4">
        <span className="material-symbols-outlined text-primary cursor-pointer">
          menu
        </span>
        <Link href="/" className="font-headline-md text-headline-md font-semibold text-primary">
          ROI Matrix
        </Link>
      </div>
      <div className="flex items-center gap-4">
        <span className="material-symbols-outlined text-on-surface-variant">
          notifications
        </span>
        <div className="w-8 h-8 rounded-full bg-primary-container flex items-center justify-center text-on-primary-container font-bold text-label-sm">
          JD
        </div>
      </div>
    </header>
  );
}
