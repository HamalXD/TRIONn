import Button from "@/components/Button";

const WhoAreWe = () => {
  return (
    <div className="relative px-6 md:mt-48 overflow-x-hidden mb-10">
      <div className="mb-10 pt-36 md:pt-52 flex flex-col gap-2">
        <span className="text-5xl sm:text-7xl md:text-9xl font-semibold leading-tight">
          WHO <br className="hidden md:block" /> WE ARE
        </span>
        <span className="text-lg sm:text-xl md:text-2xl text-neutral-600 dark:text-neutral-300">
          In the creative wilderness,
          <br className="hidden sm:block" /> clients find our work truly
          <br className="hidden sm:block" /> beloved.
        </span>
      </div>
      <div className="relative md:absolute bottom-0 right-0 md:pt-20 flex flex-col gap-5 max-w-xl w-full">
        <span className="text-base sm:text-lg text-neutral-700 dark:text-neutral-200 leading-relaxed">
          We roar with creativity, staying updated with the
          <br className="hidden sm:block" /> latest tech to make your brand a
          formidable force
          <br className="hidden sm:block" /> in the digital wilderness and
          deliver exceptional
          <br className="hidden sm:block" /> website and app experiences.
        </span>
        <div className="mt-2 flex justify-end pr-40">
          <Button text="Explore Work" />
        </div>
      </div>
    </div>
  );
};

export default WhoAreWe;
