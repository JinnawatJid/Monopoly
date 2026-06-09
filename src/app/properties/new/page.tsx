import { TopAppBar } from "@/components/layout/TopAppBar";
import { NavigationDrawer } from "@/components/layout/NavigationDrawer";
import { BottomNavBar } from "@/components/layout/BottomNavBar";
import { LiveSummaryCard } from "@/components/ui/LiveSummaryCard";

export default function AddPropertyStep1() {
  return (
    <div className="bg-background text-on-surface min-h-screen flex flex-col font-body-md">
      <TopAppBar />

      <main className="flex-grow flex flex-col md:flex-row max-w-container-max mx-auto w-full md:gap-stack-lg">
        <NavigationDrawer />

        {/* Content Area */}
        <div className="flex-grow p-margin-mobile md:p-margin-desktop max-w-4xl pb-32 md:pb-margin-desktop">
          {/* Progress Header */}
          <div className="mb-6">
            <div className="flex justify-between items-end mb-2">
              <div>
                <span className="text-primary font-label-md uppercase tracking-wider">
                  Property Setup
                </span>
                <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mt-1">
                  ข้อมูลทั่วไปและภาพประกอบ
                </h2>
              </div>
              <span className="font-label-md text-primary">
                ขั้นตอนที่ 1 จาก 4
              </span>
            </div>
            <div className="w-full h-2 bg-surface-container rounded-full overflow-hidden">
              <div className="h-full bg-primary w-1/4 transition-all duration-500"></div>
            </div>
          </div>

          <LiveSummaryCard />

          {/* Main Form Card */}
          <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 md:p-8 shadow-sm">
            <form className="space-y-stack-lg">
              {/* Property Name/Address Section */}
              <div className="grid grid-cols-1 gap-gutter">
                <div className="flex flex-col gap-2">
                  <label
                    className="font-label-md text-on-surface-variant focus-within:text-primary transition-colors"
                    htmlFor="property_name"
                  >
                    ชื่อสินทรัพย์ / ทำเลที่ตั้ง
                  </label>
                  <input
                    className="w-full px-4 py-3 rounded-lg border border-outline focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all bg-surface"
                    id="property_name"
                    placeholder="เช่น สกายไลน์ เรสซิเดนซ์ - ห้อง 402"
                    type="text"
                  />
                </div>
              </div>

              {/* Financial Inputs Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
                <div className="flex flex-col gap-2">
                  <label
                    className="font-label-md text-on-surface-variant focus-within:text-primary transition-colors"
                    htmlFor="asking_price"
                  >
                    ราคาขาย (฿)
                  </label>
                  <input
                    className="w-full px-4 py-3 rounded-lg border border-outline focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all bg-surface"
                    id="asking_price"
                    placeholder="5,000,000"
                    type="number"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label
                    className="font-label-md text-on-surface-variant focus-within:text-primary transition-colors"
                    htmlFor="appraised_value"
                  >
                    มูลค่าตามการประเมิน (฿)
                  </label>
                  <input
                    className="w-full px-4 py-3 rounded-lg border border-outline focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all bg-surface"
                    id="appraised_value"
                    placeholder="5,200,000"
                    type="number"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label
                    className="font-label-md text-on-surface-variant focus-within:text-primary transition-colors"
                    htmlFor="down_payment"
                  >
                    เงินดาวน์ (฿)
                  </label>
                  <input
                    className="w-full px-4 py-3 rounded-lg border border-outline focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all bg-surface"
                    id="down_payment"
                    placeholder="500,000"
                    type="number"
                  />
                </div>
              </div>

              {/* Missing Fields Added */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
                <div className="flex flex-col gap-2">
                  <label
                    className="font-label-md text-on-surface-variant focus-within:text-primary transition-colors"
                    htmlFor="area_size"
                  >
                    ขนาดพื้นที่ (ตร.ม. / ตร.ว.)
                  </label>
                  <input
                    className="w-full px-4 py-3 rounded-lg border border-outline focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all bg-surface"
                    id="area_size"
                    placeholder="35"
                    type="number"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label
                    className="font-label-md text-on-surface-variant focus-within:text-primary transition-colors"
                    htmlFor="units_count"
                  >
                    จำนวนห้องเช่า
                  </label>
                  <input
                    className="w-full px-4 py-3 rounded-lg border border-outline focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all bg-surface"
                    id="units_count"
                    placeholder="1"
                    type="number"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label
                    className="font-label-md text-on-surface-variant focus-within:text-primary transition-colors"
                    htmlFor="year_built"
                  >
                    ปีก่อสร้าง
                  </label>
                  <input
                    className="w-full px-4 py-3 rounded-lg border border-outline focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all bg-surface"
                    id="year_built"
                    placeholder="2565"
                    type="number"
                  />
                </div>
              </div>

              {/* Amenities Multi-select */}
              <div className="flex flex-col gap-2">
                <label className="font-label-md text-on-surface-variant">
                  สิ่งอำนวยความสะดวกในห้อง
                </label>
                <div className="flex flex-wrap gap-2 p-3 rounded-lg border border-outline bg-surface">
                  <span className="inline-flex items-center gap-1 px-3 py-1 bg-primary-container text-on-primary-container rounded-full text-label-sm">
                    เครื่องปรับอากาศ{" "}
                    <button
                      className="material-symbols-outlined text-[16px]"
                      type="button"
                    >
                      close
                    </button>
                  </span>
                  <span className="inline-flex items-center gap-1 px-3 py-1 bg-primary-container text-on-primary-container rounded-full text-label-sm">
                    ตู้เย็น{" "}
                    <button
                      className="material-symbols-outlined text-[16px]"
                      type="button"
                    >
                      close
                    </button>
                  </span>
                  <span className="inline-flex items-center gap-1 px-3 py-1 bg-primary-container text-on-primary-container rounded-full text-label-sm">
                    ทีวี{" "}
                    <button
                      className="material-symbols-outlined text-[16px]"
                      type="button"
                    >
                      close
                    </button>
                  </span>
                  <button
                    className="inline-flex items-center gap-1 px-3 py-1 border border-primary text-primary rounded-full text-label-sm font-bold hover:bg-primary-container/10 transition-colors"
                    type="button"
                  >
                    <span className="material-symbols-outlined text-[16px]">
                      add
                    </span>{" "}
                    เพิ่ม
                  </button>
                </div>
              </div>

              {/* Image Upload Section */}
              <div className="flex flex-col gap-4">
                <label className="font-label-md text-on-surface-variant">
                  รูปภาพทรัพย์สิน
                </label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {/* Upload Trigger */}
                  <div className="aspect-square border-2 border-dashed border-outline-variant rounded-xl flex flex-col items-center justify-center gap-2 cursor-pointer hover:bg-primary-container/10 hover:border-primary transition-all group">
                    <span className="material-symbols-outlined text-primary text-3xl group-hover:scale-110 transition-transform">
                      add_a_photo
                    </span>
                    <span className="font-label-sm text-on-surface-variant">
                      อัปโหลดรูปภาพ
                    </span>
                  </div>
                  {/* Thumbnail Preview 1 */}
                  <div className="relative aspect-square rounded-xl overflow-hidden border border-outline-variant group">
                    {/* Using standard img for mockup to match Stitch's HTML, would switch to next/image in production with proper domains */}
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      className="w-full h-full object-cover"
                      alt="Modern apartment interior"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuAsbUyesV43P-CG_4Nk7pojZwCuh40ZWPYyzLQJNiyf1j9Mi6-AVzs9zXAyV7Wtk666Rhhn8Vn4ElR1TECdcCFtBnZhpLpObyIFCvXPESHypmXOo7btTjpVZjje_VTFxnrgGiFDD1WXNfg_sffxhQ73FkZgw-FGESNUF-w7EjxawYbOv0fbX5dNgXBSXSPs4qWJbkAGgNsEVEpJUSUXuNWcNecUnPo2l4iBRC4phSS_XLD1q2yMWSL2tSpX-flTB3ybQ_ewg_xNWk-0"
                    />
                    <button
                      className="absolute top-2 right-2 w-6 h-6 bg-error text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                      type="button"
                    >
                      <span className="material-symbols-outlined text-xs">
                        close
                      </span>
                    </button>
                  </div>
                  {/* Thumbnail Preview 2 */}
                  <div className="relative aspect-square rounded-xl overflow-hidden border border-outline-variant group">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      className="w-full h-full object-cover"
                      alt="Kitchen detail"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuCpxIrNOTpAqeOgcLclUajo184iZaL-gWliPhwqcNJ1T2xH271baqCOQXrcozx2mL0DsRcfUlxfzBZJ_qtdjmfc_qZRSoO-tlu3M6qIhnB76Q8eWpQQLXyiB0PS0yERhmeYQLvXa_EdHYh3jlOudCCkuYRrMpDoDrsjcgfySTP44-VjjCZ64n0QMJ6uaVVtl4LsvfASpTX0Uwa1aUcrBwRy79yBl-V3W1NFvT68qALFw7TsYIXXAZDJuXwYPdAO3YnOb0fWeY0G2yxC"
                    />
                    <button
                      className="absolute top-2 right-2 w-6 h-6 bg-error text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                      type="button"
                    >
                      <span className="material-symbols-outlined text-xs">
                        close
                      </span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="pt-stack-md flex flex-col md:flex-row justify-between gap-4">
                <button
                  className="px-6 py-3 rounded-full border border-outline text-on-surface-variant font-label-md hover:bg-surface-variant transition-colors order-2 md:order-1"
                  type="button"
                >
                  กลับ
                </button>
                <div className="flex gap-4 order-1 md:order-2 w-full md:w-auto justify-end">
                  <button
                    className="px-6 py-3 rounded-full border border-outline text-on-surface-variant font-label-md hover:bg-surface-variant transition-colors"
                    type="button"
                  >
                    บันทึกร่าง
                  </button>
                  <button
                    className="px-8 py-3 rounded-full bg-primary text-on-primary font-label-md shadow-md active:scale-95 transition-all flex items-center gap-2"
                    type="submit"
                  >
                    ถัดไป
                    <span className="material-symbols-outlined">
                      arrow_forward
                    </span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </main>

      <BottomNavBar />
    </div>
  );
}
