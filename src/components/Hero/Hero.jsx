import React from "react";

const Hero = () => {
  return (
    <>
      <div className="relative overflow-hidden before:absolute before:top-0 before:start-1/2 before:bg-[url('https://preline.co/assets/svg/examples-dark/squared-bg-element.svg')] before:bg-no-repeat before:bg-top before:size-full before:-z-1 before:transform before:-translate-x-1/2">
        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10">
          <div className="mt-5 max-w-xl text-center mx-auto">
            <h1 className="block font-bold text-4xl md:text-6xl lg:text-5xl text-neutral-200">
              Your Idea. Our Code. <br /> Live in Days.
            </h1>
          </div>

          <div className="mt-5 max-w-3xl text-center mx-auto">
            <p className="text-lg text-neutral-400">
              TechNova helps small teams and solo founders launch landing pages,
              portfolios, and MVPs that actually work. Clean code, clear
              timelines, no surprises.
            </p>
          </div>

          {/* Buttons */}
          <div className="mt-8 gap-3 flex justify-center">
            <a
              className="inline-flex justify-center items-center gap-x-3 text-center bg-gradient-to-tl from-[#ffb400] to-[#ffd700] hover:from-[#ffd700] hover:to-[#ffb400] focus:outline-hidden focus:from-[#ffd700] focus:to-[#ffb400] border border-transparent text-neutral-800 text-sm font-medium rounded-full py-3 px-4"
              href="#contact"
            >
              Build With TechNova
            </a>
          </div>

          {/* End Buttons */}
        </div>
      </div>
    </>
  );
};

export default Hero;
