"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* TopAppBar */}
      <header
        className={`fixed top-0 z-40 flex h-16 w-full items-center justify-between border-b border-outline-variant px-margin-mobile transition-all ${
          isScrolled
            ? "bg-white/90 shadow-md backdrop-blur-md"
            : "bg-surface"
        }`}
      >
        <div className="flex items-center gap-4">
          <button className="rounded-full p-2 text-primary transition-colors hover:bg-surface-container active:opacity-80">
            <span className="material-symbols-outlined" data-icon="menu">
              menu
            </span>
          </button>
          <h1 className="font-headline-md text-headline-md font-semibold text-primary">
            เกมเศรษฐี - ROI Matrix
          </h1>
        </div>
        <div className="flex items-center gap-2">
          <button className="rounded-full p-2 text-on-surface-variant transition-colors hover:bg-surface-container">
            <span className="material-symbols-outlined" data-icon="search">
              search
            </span>
          </button>
          <button className="rounded-full p-2 text-on-surface-variant transition-colors hover:bg-surface-container">
            <span
              className="material-symbols-outlined"
              data-icon="notifications"
            >
              notifications
            </span>
          </button>
        </div>
      </header>

      {/* Main Content Canvas */}
      <main className="mx-auto max-w-container-max p-margin-mobile pb-32 pt-24 md:p-margin-desktop md:pt-24">
        {/* Hero Stats / Summary Section (Modern Asymmetric Layout) */}
        <section className="mb-stack-lg">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
            <div className="relative overflow-hidden rounded-xl bg-primary-container p-8 text-on-primary-container shadow-sm lg:col-span-8">
              <div className="relative z-10">
                <h2 className="font-headline-lg-mobile text-headline-lg-mobile mb-2 md:font-headline-lg md:text-headline-lg">
                  ภาพรวมพอร์ตโฟลิโอ
                </h2>
                <p className="font-body-md text-body-md mb-6 opacity-90">
                  การลงทุนในอสังหาริมทรัพย์ของคุณมีผลตอบแทนสูงกว่าค่าเฉลี่ยตลาด 12% ในไตรมาสนี้
                </p>
                <div className="flex flex-wrap gap-8">
                  <div>
                    <p className="font-label-sm text-label-sm uppercase tracking-wider opacity-75">
                      มูลค่าทรัพย์สินสุทธิ
                    </p>
                    <p className="font-headline-md text-headline-md font-bold">
                      ฿42,500,000
                    </p>
                  </div>
                  <div>
                    <p className="font-label-sm text-label-sm uppercase tracking-wider opacity-75">
                      CCR เฉลี่ย
                    </p>
                    <p className="font-headline-md text-headline-md font-bold">
                      9.2%
                    </p>
                  </div>
                </div>
              </div>
              {/* Decorative element */}
              <div className="absolute bottom-[-20px] right-[-20px] opacity-10">
                <span
                  className="material-symbols-outlined text-[160px]"
                  data-icon="trending_up"
                >
                  trending_up
                </span>
              </div>
            </div>

            <div className="flex flex-col justify-between rounded-xl border border-outline-variant bg-surface-container-lowest p-6 lg:col-span-4">
              <div>
                <h3 className="font-label-md text-label-md mb-4 text-secondary">
                  ความคืบหน้าเป้าหมายการลงทุน
                </h3>
                <div className="mb-2 h-3 w-full overflow-hidden rounded-full bg-slate-100">
                  <div
                    className="h-full bg-primary"
                    style={{ width: "65%" }}
                  ></div>
                </div>
                <div className="font-label-sm text-label-sm flex justify-between">
                  <span className="font-bold text-primary">บรรลุเป้าหมาย 65%</span>
                  <span className="text-on-surface-variant">เป้าหมาย: ฿65M</span>
                </div>
              </div>
              <button className="font-label-md text-label-md mt-6 w-full rounded-lg border border-primary py-3 text-primary transition-colors hover:bg-primary-container/10 active:scale-[0.98]">
                ดูข้อมูลวิเคราะห์โดยละเอียด
              </button>
            </div>
          </div>
        </section>

        {/* Filter & Section Header */}
        <div className="mb-stack-md flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <h2 className="font-headline-md text-headline-md text-on-surface">
            ทรัพย์สินที่อยู่ภายใต้การจัดการ
          </h2>
          <div className="flex gap-2">
            <span className="font-label-sm text-label-sm flex items-center gap-1 rounded-full bg-surface-variant px-3 py-1 text-on-surface-variant">
              <span className="material-symbols-outlined text-sm" data-icon="filter_list">
                filter_list
              </span>{" "}
              ทุกสถานะ
            </span>
            <span className="font-label-sm text-label-sm flex items-center gap-1 rounded-full bg-surface-variant px-3 py-1 text-on-surface-variant">
              <span className="material-symbols-outlined text-sm" data-icon="sort">
                sort
              </span>{" "}
              ล่าสุด
            </span>
          </div>
        </div>

        {/* Property Cards Grid */}
        <div className="property-grid">
          {/* Card 1 */}
          <div className="group cursor-pointer overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-md active:scale-[0.98]">
            <div className="relative h-48 overflow-hidden">
              <img
                alt="บ้านพักตากอากาศหรู"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCSGwY5iPGJ4heTrTMq12I6A9undasPrOqgFAi-doTG8DQfpwmHVC9ByHBzjIWRYfKQudLYLjRhasuWEJ6j3tR3wTZ0ZH6_Kzh3Cp2X1scf0N_GcpxKKk3zzxl2hEUHm7k1TyAB1_zfy1asenPx7Ib99muMh5FX2GV2SwTGrVuitq0az0ap4mr9MNinJNwcG9IYd8sISfi32H_0D_azL0dmKUeItWOW_sE1OT-Ng8ZzgOQBT-PAa620AOIpxrvoSdf5A0nUcNkAlz6T"
              />
              <div className="absolute right-3 top-3 rounded-full border border-primary/20 bg-white/95 px-3 py-1 shadow-sm backdrop-blur-sm">
                <span className="text-label-md font-bold text-primary">
                  CCR: 8.5%
                </span>
              </div>
              <div className="font-label-sm absolute bottom-3 left-3 rounded bg-on-background/60 px-2 py-1 text-white backdrop-blur-md">
                ที่อยู่อาศัย
              </div>
            </div>
            <div className="p-5">
              <div className="mb-2 flex items-start justify-between">
                <h3 className="font-headline-md text-headline-md text-on-surface">
                  Green Valley Estate
                </h3>
                <span className="font-body-lg text-body-lg font-bold text-primary">
                  ฿12.5M
                </span>
              </div>
              <p className="font-body-sm text-body-sm mb-4 flex items-center gap-1 text-on-surface-variant">
                <span
                  className="material-symbols-outlined text-sm"
                  data-icon="location_on"
                >
                  location_on
                </span>
                สุขุมวิท 101, กรุงเทพฯ
              </p>
              <div className="grid grid-cols-3 gap-2 border-t border-slate-100 pt-4">
                <div className="text-center">
                  <p className="font-label-sm text-label-sm text-secondary">
                    รายรับ (เดือน)
                  </p>
                  <p className="font-label-md text-label-md font-bold">
                    ฿45,000
                  </p>
                </div>
                <div className="border-x border-slate-100 text-center">
                  <p className="font-label-sm text-label-sm text-secondary">
                    อัตราผู้เช่า
                  </p>
                  <p className="font-label-md text-label-md font-bold text-primary">
                    100%
                  </p>
                </div>
                <div className="text-center">
                  <p className="font-label-sm text-label-sm text-secondary">
                    รายจ่าย
                  </p>
                  <p className="font-label-md text-label-md font-bold text-error">
                    ฿8,200
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="group cursor-pointer overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-md active:scale-[0.98]">
            <div className="relative h-48 overflow-hidden">
              <img
                alt="คอนโดมิเนียมสมัยใหม่"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBzbF6p1KafqQzkrfuNYXmyqCaYpdMV_ROP9N7gr5TRSw9so1rvwz1yMeS6VaiSn_5zpzgcsgzImOAq7FiK1ChReeJAJ-THcOXwPlfWwPG5VIj9KKxvcUkRnNQE2xip1ozJV4faVTHyP1FGt_Yli4ZFOjHOsDGL0IzaHhkDXYpIvht5tmfEu5ZnLqF0cvWsKA_nvPSx2H8eNANjSsjPnjAaIGb5-3rCv_WYJL-3bxtCwl4oO_855LYkphMdrlSedYWV9W2eMsAe4GEa"
              />
              <div className="absolute right-3 top-3 rounded-full border border-primary/20 bg-white/95 px-3 py-1 shadow-sm backdrop-blur-sm">
                <span className="text-label-md font-bold text-primary">
                  CCR: 10.2%
                </span>
              </div>
              <div className="font-label-sm absolute bottom-3 left-3 rounded bg-on-background/60 px-2 py-1 text-white backdrop-blur-md">
                เชิงพาณิชย์
              </div>
            </div>
            <div className="p-5">
              <div className="mb-2 flex items-start justify-between">
                <h3 className="font-headline-md text-headline-md text-on-surface">
                  The Prime Hub
                </h3>
                <span className="font-body-lg text-body-lg font-bold text-primary">
                  ฿24.8M
                </span>
              </div>
              <p className="font-body-sm text-body-sm mb-4 flex items-center gap-1 text-on-surface-variant">
                <span
                  className="material-symbols-outlined text-sm"
                  data-icon="location_on"
                >
                  location_on
                </span>
                พระราม 9, กรุงเทพฯ
              </p>
              <div className="grid grid-cols-3 gap-2 border-t border-slate-100 pt-4">
                <div className="text-center">
                  <p className="font-label-sm text-label-sm text-secondary">
                    รายรับ (เดือน)
                  </p>
                  <p className="font-label-md text-label-md font-bold">
                    ฿115,000
                  </p>
                </div>
                <div className="border-x border-slate-100 text-center">
                  <p className="font-label-sm text-label-sm text-secondary">
                    อัตราผู้เช่า
                  </p>
                  <p className="font-label-md text-label-md font-bold text-primary">
                    95%
                  </p>
                </div>
                <div className="text-center">
                  <p className="font-label-sm text-label-sm text-secondary">
                    รายจ่าย
                  </p>
                  <p className="font-label-md text-label-md font-bold text-error">
                    ฿22,500
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="group cursor-pointer overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-md active:scale-[0.98]">
            <div className="relative h-48 overflow-hidden">
              <img
                alt="อพาร์ทเมนท์บูติค"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCzwbMJZkQQ1_9urW74UPVS88q5UvEyjBOX3hTMv_yPHOisgI4PN9cyo4tDsdeSmpyuhy3L-OOtNI4LCvlcjtsnfB_x42szNwnitXZLlTTVAhtAKTussMDs_YWg9QTL8-xCQ4Kii8hu03QZBSWgR2Nuk0J29HKMCFHb4CMRIHUuyXpA_ayA8HQLLSHalvg558Dkvy47wutFjgeXXSQBU2XVOR_-scNAgyk4_h_9Zv6FH_EVGXj7WEknVm1Fg25KdCRG1Lqg_ugGelO2"
              />
              <div className="absolute right-3 top-3 rounded-full border border-primary/20 bg-white/95 px-3 py-1 shadow-sm backdrop-blur-sm">
                <span className="text-label-md font-bold text-primary">
                  CCR: 7.9%
                </span>
              </div>
              <div className="font-label-sm absolute bottom-3 left-3 rounded bg-on-background/60 px-2 py-1 text-white backdrop-blur-md">
                ที่อยู่อาศัย
              </div>
            </div>
            <div className="p-5">
              <div className="mb-2 flex items-start justify-between">
                <h3 className="font-headline-md text-headline-md text-on-surface">
                  Urban Loft Collection
                </h3>
                <span className="font-body-lg text-body-lg font-bold text-primary">
                  ฿8.2M
                </span>
              </div>
              <p className="font-body-sm text-body-sm mb-4 flex items-center gap-1 text-on-surface-variant">
                <span
                  className="material-symbols-outlined text-sm"
                  data-icon="location_on"
                >
                  location_on
                </span>
                อารีย์, พญาไท, กรุงเทพฯ
              </p>
              <div className="grid grid-cols-3 gap-2 border-t border-slate-100 pt-4">
                <div className="text-center">
                  <p className="font-label-sm text-label-sm text-secondary">
                    รายรับ (เดือน)
                  </p>
                  <p className="font-label-md text-label-md font-bold">
                    ฿32,000
                  </p>
                </div>
                <div className="border-x border-slate-100 text-center">
                  <p className="font-label-sm text-label-sm text-secondary">
                    อัตราผู้เช่า
                  </p>
                  <p className="font-label-md text-label-md font-bold text-primary">
                    100%
                  </p>
                </div>
                <div className="text-center">
                  <p className="font-label-sm text-label-sm text-secondary">
                    รายจ่าย
                  </p>
                  <p className="font-label-md text-label-md font-bold text-error">
                    ฿5,400
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* FAB: Add New Property */}
      <button className="group fixed bottom-24 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-on-primary shadow-lg transition-all hover:scale-110 hover:shadow-xl active:scale-90">
        <span className="material-symbols-outlined text-[28px]" data-icon="add">
          add
        </span>
        <span className="text-label-sm pointer-events-none absolute right-16 whitespace-nowrap rounded bg-on-background px-3 py-1 text-white opacity-0 shadow-sm transition-opacity group-hover:opacity-100">
          เพิ่มทรัพย์สินใหม่
        </span>
      </button>

      {/* BottomNavBar */}
      <nav className="pb-safe fixed bottom-0 z-50 flex h-20 w-full items-center justify-around rounded-t-[2rem] border-t border-outline-variant bg-surface-container-lowest px-4 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
        {/* Active Tab: Dashboard */}
        <a
          href="#"
          className="flex flex-col items-center justify-center rounded-full bg-primary-container px-4 py-1 text-on-primary-container transition-transform duration-200 active:scale-90"
        >
          <span
            className="material-symbols-outlined"
            data-icon="dashboard"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            dashboard
          </span>
          <span className="font-label-sm text-label-sm">หน้าหลัก</span>
        </a>
        <a
          href="#"
          className="flex flex-col items-center justify-center px-4 py-1 text-secondary transition-transform duration-200 hover:text-primary active:scale-90"
        >
          <span className="material-symbols-outlined" data-icon="analytics">
            analytics
          </span>
          <span className="font-label-sm text-label-sm">วิเคราะห์ข้อมูล</span>
        </a>
        <a
          href="#"
          className="flex flex-col items-center justify-center px-4 py-1 text-secondary transition-transform duration-200 hover:text-primary active:scale-90"
        >
          <span className="material-symbols-outlined" data-icon="settings">
            settings
          </span>
          <span className="font-label-sm text-label-sm">ตั้งค่า</span>
        </a>
      </nav>
    </>
  );
}