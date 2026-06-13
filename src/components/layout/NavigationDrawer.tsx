"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function NavigationDrawer() {
  const pathname = usePathname();

  const navItems = [
    {
      href: "/properties/new",
      label: "ข้อมูลทั่วไป",
      icon: "info",
    },
    {
      href: "/properties/new/step2",
      label: "วิเคราะห์เชิงคุณภาพ",
      icon: "psychology",
    },
    {
      href: "/properties/new/step3",
      label: "วิเคราะห์เชิงปริมาณ",
      icon: "calculate",
    },
    {
      href: "#",
      label: "สรุปผล",
      icon: "description",
      disabled: true,
    },
  ];

  return (
    <aside className="hidden md:flex flex-col gap-stack-md p-margin-desktop h-full w-80 shrink-0 bg-surface border-r border-outline-variant min-h-[calc(100vh-64px)]">
      <div className="mb-4">
        <Link href="/" className="font-headline-md text-headline-md text-primary px-4 block hover:opacity-80 transition-opacity">
          &larr; กลับหน้าแดชบอร์ด
        </Link>
      </div>
      <nav className="flex flex-col gap-1">
        {navItems.map((item) => {
          const isActive = pathname === item.href;

          if (item.disabled) {
            return (
              <div
                key={item.label}
                className="flex items-center gap-3 px-4 py-3 text-on-surface-variant transition-all rounded-lg opacity-50 cursor-not-allowed"
              >
                <span className="material-symbols-outlined">{item.icon}</span>
                <span className="font-body-md text-body-md">{item.label}</span>
              </div>
            );
          }

          return (
            <Link
              key={item.label}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3 transition-all rounded-lg ${
                isActive
                  ? "bg-secondary-container text-on-secondary-container font-bold"
                  : "text-on-surface-variant hover:bg-surface-variant"
              }`}
            >
              <span className={`material-symbols-outlined ${isActive ? "fill-icon" : ""}`}>
                {item.icon}
              </span>
              <span className="font-body-md text-body-md">{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
