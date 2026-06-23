const navItems = [
  { label: "Home", href: "/" },
  { label: "3D Designer", href: "/fusion" },
  { label: "Embedded", href: "/embedded" },
  { label: "ML & Comp Vision", href: "/ml-comp-vision" },
];

export function Navbar() {
  return (
    <header className="fixed top-3 left-1/2 z-50 w-[95%] max-w-7xl -translate-x-1/2 sm:top-5">
      <nav className="flex flex-col gap-3 rounded-2xl border border-white/10 bg-[#091413]/80 px-4 py-4 backdrop-blur-2xl shadow-[0_10px_50px_rgba(0,0,0,0.35)] lg:h-20 lg:flex-row lg:items-center lg:justify-between lg:px-8 lg:py-0">

        {/* Logo */}
        <a href="/" className="flex items-center gap-4">
          <div>
            <h1 className="text-base font-black tracking-[0.22em] text-white sm:text-lg sm:tracking-[0.3em]">
              SARAH ALI
            </h1>
            <p className="text-[10px] uppercase tracking-[0.28em] text-[var(--color-muted)] sm:tracking-[0.4em]">
              Portfolio
            </p>
          </div>
        </a>

        {/* Navigation */}
        <div className="flex max-w-full flex-wrap items-center gap-2 rounded-[8px] border border-white/10 bg-white/5 p-2 sm:rounded-full lg:flex-nowrap">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="
                group
                relative
                shrink-0
                rounded-full
                px-4
                py-2
                text-xs
                font-semibold
                text-[var(--color-muted)]
                transition-all
                hover:text-white
                lg:px-5
                lg:text-sm
              "
            >
              {item.label}

              <span
                className="
                  absolute
                  bottom-0
                  left-1/2
                  h-[2px]
                  w-0
                  -translate-x-1/2
                  bg-[var(--color-mint)]
                  transition-all
                  duration-300
                  group-hover:w-8
                "
              />
            </a>
          ))}
        </div>

     
      </nav>
    </header>
  );
}
