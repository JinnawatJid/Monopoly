export function BottomNavBar() {
  return (
    <nav className="md:hidden fixed bottom-0 w-full z-50 bg-surface-container-lowest border-t border-outline-variant shadow-md flex justify-around items-center h-20 px-4 pb-safe">
      <div className="flex flex-col items-center justify-center text-secondary px-4 py-1">
        <span className="material-symbols-outlined">dashboard</span>
        <span className="font-label-sm text-label-sm">แดชบอร์ด</span>
      </div>
      <div className="flex flex-col items-center justify-center bg-primary-container text-on-primary-container rounded-xl px-4 py-1">
        <span className="material-symbols-outlined fill-icon">analytics</span>
        <span className="font-label-sm text-label-sm">วิเคราะห์</span>
      </div>
      <div className="flex flex-col items-center justify-center text-secondary px-4 py-1">
        <span className="material-symbols-outlined">settings</span>
        <span className="font-label-sm text-label-sm">ตั้งค่า</span>
      </div>
    </nav>
  );
}
