import Link from "next/link";
export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-foreground/[0.06] bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="/#hero"
          className="shrink-0 font-sans text-lg font-medium tracking-tight text-foreground"
        >
          Near<span className="font-pixel tracking-[0.04em]">Glasses</span>
        </Link>

        <div className="hidden items-center gap-6 sm:flex">
          <Link
            href="/#beta"
            className="font-sans text-sm font-medium transition-opacity duration-200 hover:opacity-70"
          >
            Get Started
          </Link>
          <Link
            href="/#how-it-works"
            className="font-sans text-sm font-medium transition-opacity duration-200 hover:opacity-70"
          >
            How It Works
          </Link>
        </div>

        <Link
          href="https://apps.apple.com/pt/app/nearby-glasses/id6776279207?l=en-GB"
          target="_blank"
          className="card-shape-sm bg-zinc-100 hover:bg-zinc-200 px-5 py-2.5 font-sans text-sm font-semibold text-zinc-900 transition-all duration-200 hover:scale-105"
        >
          Download
        </Link>
      </div>
    </nav>
  );
}
