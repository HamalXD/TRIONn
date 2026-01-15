export const Footer = () => {
  return (
    <footer className="relative z-50 w-full border-t border-neutral-800 bg-neutral-950 py-8 px-4 flex flex-col md:flex-row justify-between items-center gap-4 text-neutral-400 text-sm">
      <div>
        <span className="font-bold tracking-wide text-neutral-100 uppercase">
          TRIONN<sup className="text-xs">®</sup>
        </span>
        <span className="mx-2 text-xs">|</span>
        <span>
          &copy; {new Date().getFullYear()} Trionn. All rights reserved.
        </span>
      </div>
      <div className="flex gap-4">
        <a
          href="mailto:info@trionn.com"
          className="hover:text-neutral-100 transition-colors"
          aria-label="Email"
        >
          info@trionn.com
        </a>
        <span className="hidden md:inline text-xs">|</span>
        <a
          href="https://twitter.com/trionn"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-neutral-100 transition-colors"
          aria-label="Twitter"
        >
          Twitter
        </a>
        <a
          href="https://linkedin.com/company/trionn"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-neutral-100 transition-colors"
          aria-label="LinkedIn"
        >
          LinkedIn
        </a>
      </div>
    </footer>
  );
};
