import Link from "next/link";

export function NavigationDrawer() {
  return (
    <aside className="hidden md:flex flex-col gap-stack-md p-margin-desktop h-full w-80 bg-surface border-r border-outline-variant min-h-[calc(100vh-64px)]">
      <div className="mb-4">
        <h2 className="font-headline-md text-headline-md text-primary px-4">
          ระบบประเมิน
        </h2>
      </div>
      <nav className="flex flex-col gap-1">
        <Link
          href="/properties/new"
          className="flex items-center gap-3 px-4 py-3 bg-secondary-container text-on-secondary-container font-bold rounded-lg"
        >
          <span className="material-symbols-outlined fill-icon">info</span>
          <span className="font-body-md text-body-md">ข้อมูลทั่วไป</span>
        </Link>
        <Link
          href="#"
          className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-variant transition-all rounded-lg"
        >
          <span className="material-symbols-outlined">psychology</span>
          <span className="font-body-md text-body-md">ข้อมูลเชิงคุณภาพ</span>
        </Link>
        <Link
          href="#"
          className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-variant transition-all rounded-lg"
        >
          <span className="material-symbols-outlined">calculate</span>
          <span className="font-body-md text-body-md">ข้อมูลเชิงปริมาณ</span>
        </Link>
        <Link
          href="#"
          className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-variant transition-all rounded-lg"
        >
          <span className="material-symbols-outlined">description</span>
          <span className="font-body-md text-body-md">สรุปผล</span>
        </Link>
      </nav>
    </aside>
  );
}
