import Button from "@/components/Button";

const Partners = () => {
  return (
    <div className="relative px-6 overflow-x-hidden mb-10">
      <div className="mb-10 pt-24 sm:pt-32 md:pt-52 flex flex-col gap-2">
        <span className="text-4xl sm:text-6xl md:text-9xl font-semibold leading-tight">
          PARTNER <br className="hidden md:block" />
          LOVE
        </span>
        <span className="text-base sm:text-xl md:text-2xl text-neutral-600 dark:text-neutral-300">
          In the creative wilderness,
          <br className="hidden sm:block" /> clients find our work truly
          <br className="hidden sm:block" /> beloved.
        </span>
      </div>

      {/* Responsive client review note */}
      {/* Mobile/Tablet: shows below heading, Desktop: fixed at bottom right */}
      <div className="flex md:hidden flex-col gap-3 w-full max-w-xl">
        <span className="text-base sm:text-lg text-neutral-700 dark:text-neutral-200 leading-relaxed text-left">
          Take heed, as the
          <br className="hidden sm:block" /> lion's roar in our client
          <br className="hidden sm:block" /> reviews resounds.
        </span>
      </div>
      <div className="hidden md:flex flex-col gap-5 max-w-xl w-full absolute bottom-0 right-0 items-end pr-6 md:pr-20 pb-6">
        <span className="text-base sm:text-lg text-neutral-700 dark:text-neutral-200 leading-relaxed text-right">
          Take heed, as the
          <br className="hidden sm:block" /> lion's roar in our client
          <br className="hidden sm:block" /> reviews resounds.
        </span>
      </div>
    </div>
  );
};

export default Partners;
