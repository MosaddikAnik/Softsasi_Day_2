const menu = [
  {  label: "DASHBOARD", active: true },
  {  label: "CUBESCAN" },
  {  label: "CUBESTRIKE" },
  {  label: "CUBECROWD" },
  {  label: "CUBEPURGE" },
  {  label: "CUBESHIELD" },
  {  label: "CUBESENTRY" },
  {  label: "SYSTEM_HEALTH" },
];

function Sidebar({ label, active }) {
  return (
    <button
      className={`
        w-full flex items-center gap-4 px-5 py-3
        text-xs tracking-widest uppercase transition-all duration-200
        border-r-2
        ${
          active
            ? "bg-[#2a2a2a] border-[#f5d84c] text-[#f5d84c]"
            : "border-transparent text-[#9a9485] hover:bg-[#1b1b1b] hover:text-[#f5d84c]"
        }
      `}
    >

      <span>{label}</span>
    </button>
  );
}

function SideBar() {
  return (
    <aside className="fixed left-0 top-[70px] w-[250px] h-[calc(100vh-70px)] bg-[#111111] border-r border-[#2a2415] flex flex-col">

      {/* Profile */}
      <div className="p-5 border-b border-[#2a2415]">
        <div className="flex items-center gap-3">

          <div>
            <h3 className="text-[10px] font-semibold tracking-[2px] text-[#f5d84c] uppercase">
              OPERATOR_01
            </h3>

            <p className="text-[10px] text-[#88806f] uppercase tracking-wider">
              CLEARANCE: OMEGA
            </p>
          </div>
        </div>
      </div>

      {/* Menu */}
      <nav className="flex-1 py-4">
        {menu.map((item) => (
          <Sidebar
            key={item.label}
            icon={item.icon}
            label={item.label}
            active={item.active}
          />
        ))}
      </nav>

      {/* Bottom Button */}
      <div className="p-4 border-t border-[#2a2415]">
        <button className="w-full py-3 text-xs font-semibold tracking-[2px] uppercase transition border bg-[#d6b700] text-black border-[#f5d84c] hover:shadow-[0_0_20px_rgba(245,216,76,0.35)]">
          INITIATE SCAN
        </button>
      </div>
    </aside>
  );
}

export default SideBar;