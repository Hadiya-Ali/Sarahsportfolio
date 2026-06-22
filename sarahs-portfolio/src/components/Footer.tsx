const contactLinks = [
  {
    label: "LinkedIn",
    value: "linkedin.com/in/sarah",
    href: "https://www.linkedin.com/in/sarah-ali-09853a316/",
  },
  {
    label: "Gmail",
    value: "sarah.ali90500@gmail.com",
    href: "mailto:sarah.ali90500@gmail.com",
  },
];

export function Footer() {
  return (
    <footer
      id="contact"
      className="border-t border-[var(--color-line)] bg-[linear-gradient(115deg,#091413f5_0%,#285a48cc_46%,#408a7199_100%)] py-12 sm:py-16"
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-5 lg:flex-row lg:items-end lg:justify-between lg:px-10">
        <div>
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.26em] text-[var(--color-mint)] sm:text-lg sm:tracking-[0.38em]">
            Contact Me
          </p>
          <h2 className="max-w-xl text-2xl font-black leading-tight text-white sm:text-3xl lg:text-4xl">
            Let’s Build Something Meaningful Together
          </h2>
          
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {contactLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noreferrer" : undefined}
              className="min-w-0 rounded-2xl border border-[var(--color-line)] bg-[#09141380] px-5 py-5 transition hover:border-[var(--color-mint)] hover:bg-[var(--color-bg)] sm:min-w-56 sm:px-6"
            >
              <span className="block text-sm font-black uppercase tracking-[0.2em] text-[var(--color-mint)]">
                {link.label}
              </span>
              <span className="mt-2 block break-words text-sm font-bold text-white sm:text-base">
                {link.value}
              </span>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
