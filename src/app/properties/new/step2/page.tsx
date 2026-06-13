import { TopAppBar } from "@/components/layout/TopAppBar";
import { NavigationDrawer } from "@/components/layout/NavigationDrawer";
import { BottomNavBar } from "@/components/layout/BottomNavBar";
import Link from "next/link";

export default function AddPropertyStep2() {
  return (
    <div className="bg-background text-on-surface font-body-md min-h-screen flex flex-col">
      <TopAppBar />

      <main className="flex-grow flex flex-col md:flex-row max-w-container-max mx-auto w-full">
        <NavigationDrawer />

        {/* Main Content Area */}
        <section className="flex-grow p-margin-mobile md:p-margin-desktop overflow-y-auto pb-24 md:pb-8">
          {/* Progress Indicator */}
          <div className="mb-stack-lg">
            <div className="flex justify-between items-end mb-2">
              <div>
                <p className="text-primary font-label-md uppercase tracking-wider">
                  ขั้นตอนที่ 2 จาก 4
                </p>
                <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg mt-1">
                  การวิเคราะห์เชิงคุณภาพ (Qualitative Analysis)
                </h2>
              </div>
              <span className="hidden md:block font-label-sm text-on-surface-variant">
                เสร็จสิ้น 50%
              </span>
            </div>
            <div className="h-2 w-full bg-surface-container rounded-full overflow-hidden">
              <div
                className="h-full bg-primary-container step-active transition-all duration-500"
                style={{ width: "50%" }}
              ></div>
            </div>
          </div>

          {/* Bento Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
            {/* Card: Surrounding Environment */}
            <div className="md:col-span-8 bg-surface/80 backdrop-blur-md border border-outline-variant/50 rounded-xl p-6 shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <span className="material-symbols-outlined text-primary">
                  location_on
                </span>
                <h3 className="font-headline-md text-headline-md">
                  สภาพแวดล้อมรอบๆ
                </h3>
              </div>
              <div className="space-y-stack-md">
                <div>
                  <label className="block font-label-md text-on-surface-variant mb-2">
                    แหล่งงาน
                  </label>
                  <textarea
                    className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg p-3 text-body-md min-h-[80px] focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                    placeholder="เช่น นิคมอุตสาหกรรม, โรงพยาบาล, ย่านธุรกิจ..."
                  ></textarea>
                </div>
                <div>
                  <label className="block font-label-md text-on-surface-variant mb-2">
                    สิ่งอำนวยความสะดวก
                  </label>
                  <div className="flex flex-wrap gap-2 mb-2">
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-label-sm flex items-center gap-1">
                      ซูเปอร์มาร์เก็ต{" "}
                      <span className="material-symbols-outlined text-[14px] cursor-pointer hover:opacity-80">
                        close
                      </span>
                    </span>
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-label-sm flex items-center gap-1">
                      สถานีรถไฟฟ้า{" "}
                      <span className="material-symbols-outlined text-[14px] cursor-pointer hover:opacity-80">
                        close
                      </span>
                    </span>
                    <button
                      className="px-3 py-1 border border-dashed border-primary text-primary rounded-full text-label-sm hover:bg-primary/5 transition-colors"
                      type="button"
                    >
                      + เพิ่มแท็ก
                    </button>
                  </div>
                  <input
                    className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg p-3 text-body-md focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                    placeholder="ระบุสิ่งอำนวยความสะดวก คั่นด้วยเครื่องหมายจุลภาค"
                    type="text"
                  />
                </div>
              </div>
            </div>

            {/* Card: Demand Analysis */}
            <div className="md:col-span-4 bg-surface/80 backdrop-blur-md border border-outline-variant/50 rounded-xl p-6 shadow-sm flex flex-col">
              <div className="flex items-center gap-2 mb-4">
                <span className="material-symbols-outlined text-tertiary">
                  trending_up
                </span>
                <h3 className="font-headline-md text-headline-md">
                  การวิเคราะห์ความต้องการ
                </h3>
              </div>
              <div className="flex-grow space-y-stack-md">
                <div>
                  <label className="block font-label-md text-on-surface-variant mb-2">
                    ความต้องการของผู้เช่า (Tenant Needs/Upgrades)
                  </label>
                  <div className="flex flex-wrap gap-2 mb-2">
                    <span className="px-3 py-1 bg-tertiary/10 text-tertiary rounded-full text-label-sm flex items-center gap-1">
                      อินเทอร์เน็ต{" "}
                      <span className="material-symbols-outlined text-[14px] cursor-pointer hover:opacity-80">
                        close
                      </span>
                    </span>
                    <span className="px-3 py-1 bg-tertiary/10 text-tertiary rounded-full text-label-sm flex items-center gap-1">
                      เครื่องปรับอากาศ{" "}
                      <span className="material-symbols-outlined text-[14px] cursor-pointer hover:opacity-80">
                        close
                      </span>
                    </span>
                    <button
                      className="px-3 py-1 border border-dashed border-tertiary text-tertiary rounded-full text-label-sm hover:bg-tertiary/5 transition-colors"
                      type="button"
                    >
                      + เพิ่มแท็ก
                    </button>
                  </div>
                  <input
                    className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg p-3 text-body-md focus:outline-none focus:border-tertiary focus:ring-2 focus:ring-tertiary/20 transition-all"
                    placeholder="ความต้องการหลักของผู้เช่า..."
                    type="text"
                  />
                </div>
                <div>
                  <label className="block font-label-md text-on-surface-variant mb-2">
                    ลักษณะของผู้เช่า (Target Tenants)
                  </label>
                  <textarea
                    className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg p-3 text-body-md min-h-[100px] focus:outline-none focus:border-tertiary focus:ring-2 focus:ring-tertiary/20 transition-all"
                    placeholder="บรรยายลักษณะผู้เช่าเป้าหมายของคุณ..."
                  ></textarea>
                </div>
              </div>
            </div>

            {/* Card: Pros & Cons */}
            <div className="md:col-span-12 bg-surface/80 backdrop-blur-md border border-outline-variant/50 rounded-xl p-6 shadow-sm border-l-4 border-l-primary">
              <div className="flex items-center gap-2 mb-6">
                <span className="material-symbols-outlined text-primary">
                  balance
                </span>
                <h3 className="font-headline-md text-headline-md">
                  ข้อดี/ข้อเสีย
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-stack-lg">
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-primary">
                    <span className="material-symbols-outlined">
                      add_circle
                    </span>
                    <span className="font-label-md">จุดเด่นของทรัพย์สิน</span>
                  </div>
                  <textarea
                    className="w-full bg-primary/5 border border-primary/20 rounded-lg p-3 text-body-md min-h-[120px] focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                    placeholder="ระบุข้อดีหลักของการลงทุนครั้งนี้..."
                  ></textarea>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-error">
                    <span className="material-symbols-outlined">
                      remove_circle
                    </span>
                    <span className="font-label-md">ข้อกังวล/ความเสี่ยง</span>
                  </div>
                  <textarea
                    className="w-full bg-error/5 border border-error/20 rounded-lg p-3 text-body-md min-h-[120px] focus:outline-none focus:border-error focus:ring-2 focus:ring-error/20 transition-all"
                    placeholder="ระบุความเสี่ยงหรือข้อเสียที่อาจเกิดขึ้น..."
                  ></textarea>
                </div>
              </div>
            </div>

            {/* Card: Future Outlook & Opportunities */}
            <div className="md:col-span-12 bg-surface/80 backdrop-blur-md border border-outline-variant/50 rounded-xl p-6 shadow-sm border-l-4 border-l-tertiary">
              <div className="flex items-center gap-2 mb-6">
                <span className="material-symbols-outlined text-tertiary">
                  rocket_launch
                </span>
                <h3 className="font-headline-md text-headline-md">
                  แนวโน้มและโอกาสในอนาคต
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-stack-lg">
                <div className="space-y-3">
                  <label className="block font-label-md text-on-surface-variant">
                    โอกาสในการสร้างรายได้เพิ่ม/ลดรายจ่าย
                  </label>
                  <textarea
                    className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg p-3 text-body-md min-h-[100px] focus:outline-none focus:border-tertiary focus:ring-2 focus:ring-tertiary/20 transition-all"
                    placeholder="เช่น การเพิ่มค่าเช่าในอนาคต, การปรับปรุงเพื่อลดค่าไฟ..."
                  ></textarea>
                </div>
                <div className="space-y-3">
                  <label className="block font-label-md text-on-surface-variant">
                    โอกาสและอุปสรรคของพื้นที่ในอนาคต
                  </label>
                  <textarea
                    className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg p-3 text-body-md min-h-[100px] focus:outline-none focus:border-tertiary focus:ring-2 focus:ring-tertiary/20 transition-all"
                    placeholder="เช่น การตัดถนนใหม่, ห้างสรรพสินค้าที่จะเปิดตัว..."
                  ></textarea>
                </div>
              </div>
            </div>

            {/* Card: Required Improvements */}
            <div className="md:col-span-12 bg-surface/80 backdrop-blur-md border border-outline-variant/50 rounded-xl p-6 shadow-sm flex flex-col md:flex-row gap-6 items-start">
              <div className="w-full md:w-1/3">
                <div className="flex items-center gap-2 mb-2">
                  <span className="material-symbols-outlined text-secondary">
                    build
                  </span>
                  <h3 className="font-headline-md text-headline-md">
                    สิ่งที่ต้องปรับปรุงก่อนเช่า
                  </h3>
                </div>
                <p className="text-body-sm text-on-surface-variant">
                  รายละเอียดการซ่อมแซมหรือปรับปรุงเพื่อให้ได้ผลตอบแทนสูงสุด
                  (ROI)
                </p>
                <div className="mt-4 rounded-lg overflow-hidden h-32 relative">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    alt="Renovation illustration"
                    className="w-full h-full object-cover grayscale opacity-50"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAmbOpB3E4rzwz0kpgkYwVHKj78Td2HD8HuKBukt2u4FotRMRahozoYCi83PTl6ErNQcNhTZ7VpP3i_vAHMxbXSJexvfVaAKs8HZ8foTWCnlbkIsGc_-qC5XMmbyykIaU0As3YX_vK6rBeL1fayuqwTjjk0J6SpykC4iqspkLZ7XIGv4bO4MMV1jvJHz52UbNYspQ85gbX7n8wrdou_IvCRIDf8LNuGBb8217IzbMn_fqa9NFZfEeK7EnIh99MUoC_mh5BTuMqJSm1l"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent"></div>
                </div>
              </div>
              <div className="w-full md:w-2/3">
                <textarea
                  className="w-full h-full bg-surface-container-lowest border border-outline-variant rounded-lg p-4 text-body-md min-h-[160px] focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all"
                  placeholder="ระบุการซ่อมแซม การตกแต่งภายใน หรือการเปลี่ยนแปลงโครงสร้างที่จำเป็น..."
                ></textarea>
              </div>
            </div>
          </div>

          {/* Navigation Actions */}
          <div className="flex justify-between items-center mt-stack-lg pt-6 border-t border-outline-variant">
            <Link
              className="flex items-center gap-2 px-6 py-3 text-secondary font-label-md border border-outline-variant rounded-lg hover:bg-surface-container transition-colors active:scale-95 duration-200"
              href="/properties/new"
            >
              <span className="material-symbols-outlined">arrow_back</span>
              กลับ
            </Link>
            <div className="flex gap-4">
              <button
                className="hidden md:block px-6 py-3 text-on-surface-variant font-label-md hover:underline decoration-primary"
                type="button"
              >
                บันทึกร่าง
              </button>
              <button
                className="flex items-center gap-2 px-8 py-3 bg-primary text-on-primary font-label-md rounded-lg shadow-sm hover:bg-primary-container transition-all active:scale-95 duration-200"
                type="button"
              >
                ขั้นตอนถัดไป
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </div>
          </div>
        </section>
      </main>

      <BottomNavBar />
    </div>
  );
}
