export function LiveSummaryCard() {
  return (
    <div className="mb-stack-lg bg-primary-container text-on-primary-container p-6 rounded-xl shadow-sm grid grid-cols-2 gap-4">
      <div className="flex flex-col">
        <span className="text-label-sm opacity-90">
          กระแสเงินสดต่อเดือน (Monthly Cash Flow)
        </span>
        <span className="text-headline-md font-bold">฿ 0.00</span>
      </div>
      <div className="flex flex-col border-l border-on-primary-container/20 pl-4">
        <span className="text-label-sm opacity-90">
          ผลตอบแทนรูปเงินสด (CCR %)
        </span>
        <span className="text-headline-md font-bold">0.00%</span>
      </div>
    </div>
  );
}
