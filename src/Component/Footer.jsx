const Footer = () => {
  return (
    <footer className="col-span-12 w-[1080px] left-11 top-40 bg-surface-container border border-outline-variant px-6 py-4 relative overflow-hidden">
      
      <div className="absolute top-0 left-0 w-full h-[1px] bg-primary opacity-30" />

      <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-sm">
        
        {/* Left side */}
        <div className="text-on-surface-variant font-code-snippet">
          © {new Date().getFullYear()} GLOBAL_CONTROL_SYSTEM
        </div>

        {/* Right side */}
        <div className="flex items-center gap-2 font-code-snippet">
          <span className="text-primary animate-pulse">●</span>
          <span className="text-on-surface-variant">
            SYSTEM ONLINE
          </span>
        </div>

      </div>
    </footer>
  );
};

export default Footer;