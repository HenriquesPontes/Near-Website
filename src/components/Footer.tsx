export default function Footer() {
  return (
    <footer className="border-t border-foreground/[0.06]">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-12 font-mono text-xs tracking-[0.1em] opacity-50 sm:flex-row lg:text-sm">
        <p>&copy; NEARBY GLASSES, 2026. Privacy awareness in your pocket.</p>

        <div className="flex items-center gap-4 lg:gap-6">
          <a
            href="/privacy"
            className="transition-opacity hover:opacity-100"
          >
            PRIVACY
          </a>
          <a
            href="/terms"
            className="transition-opacity hover:opacity-100"
          >
            TERMS
          </a>
          <a
            href="/eula"
            className="transition-opacity hover:opacity-100"
          >
            EULA
          </a>

        </div>
      </div>
    </footer>
  );
}
