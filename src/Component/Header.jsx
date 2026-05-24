const headerIcons = [
  "notifications_active",
  "terminal",
  "settings",
];

function Header() {
  return (
    <header className="fixed top-0 left-0 z-50 flex items-center justify-between w-full h-[70px] px-8 border-b bg-[#111111]/95 border-[#2a2415] backdrop-blur-sm">

      {/* Left Logo */}
      <div className="flex items-center gap-3">
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDLWeBt2JUFXYApzY9mWChyhFgKoJhVwW24cvkxQFqFObbIma7akbKO5fllXX4566XFsh9mzhNcfOG4C5oK8zzsa8cQpkoJ8mrcBK3MAkHMX8VT5dGABdqjFxKnY-EEmuN6YG7sF566j90wTcaEtrcNi125KeLiT72rkJEVLox0WFTX2sC28sIDWsxR8uXVMZy21Ucs-BlrtE-Atl-CMFrZqEPIS6hA7sMmfRdEZ_mOD_kbCsOKnRn6A6C8O8B0zCD0cSEairhkFWE"
          alt="CubicSec Logo"
          className="w-6 h-6"
        />

        <h1 className="text-[#f5d84c] text-sm font-semibold tracking-wide uppercase">
          CUBICSEC
        </h1>
      </div>

      {/* Search Bar */}
      <div className="flex-1 max-w-md mx-10">
        <div className="relative">
          <input
            type="text"
            placeholder="SEARCH DIRECTORY..."
            className="w-full h-10 px-4 pr-12 text-xs tracking-wider uppercase bg-transparent border text-[#d7d2c8] border-[#4a412d] outline-none focus:border-[#d6b700] placeholder:text-[#7b7667]"
          />

          <button className="absolute border-1 p-2 -translate-y-1/2 material-symbols-outlined right-0 top-1/2 text-[#9b927b] text-[18px]" type="button">
           search
          </button>
        </div>
      </div>

      {/* Right Actions */}
      <div className="flex items-center gap-5">
        {headerIcons.map((icon) => (
          <button
            key={icon}
            className="transition text-[#a7a08f] hover:text-[#f5d84c]"
          >
            <span className="material-symbols-outlined text-[20px]">
              {icon}
            </span>
          </button>
        ))}
      </div>
    </header>
  );
}

export default Header;