type ResumeDownloadProps = {
  href: string;
  fileName: string;
};

export function ResumeDownload({ href, fileName }: ResumeDownloadProps) {
  return (
    <a
      href={href}
      download={fileName}
      className="mt-8 inline-flex w-full items-center justify-center rounded-full border border-[var(--color-mint)]/60 bg-[var(--color-deep)] px-6 py-3 text-sm font-black uppercase tracking-[0.16em] shadow-[0_18px_45px_rgba(0,0,0,0.28)] transition hover:-translate-y-1 hover:border-white hover:bg-[var(--color-green)]  sm:w-auto"
    >
      Download Resume
    </a>
  );
}
