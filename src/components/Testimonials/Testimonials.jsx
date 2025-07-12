import React from "react";

const Testimonials = () => {
  return (
    <>
      // {/* Testimonials */}
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div class="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
          <h2 class="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">
            Our Clients Says
          </h2>
          <p class="mt-1 text-gray-600 dark:text-neutral-400">
            See how game-changing companies are making the most of every
            engagement with Tech .
          </p>
        </div>
        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card */}
          <div className="flex flex-col border shadow-2xs rounded-xl bg-neutral-900 border-neutral-700">
            <div className="flex-auto p-4 md:p-6">
              <p className="mt-3 sm:mt-6 text-base md:text-xl text-white">
                <em>
                  "We handed TechNova a half-baked spec and somehow got back a
                  production-ready backend in 10 days. No fluff, no delays —
                  just clean, scalable code that worked out of the box. It felt
                  like having an extended dev team without the overhead."
                </em>
              </p>
            </div>

            <div className="p-4 rounded-b-xl md:px-6">
              <h3 className="text-sm font-semibold sm:text-base text-neutral-200">
                Anirudh Mehra, CTO, Blinqly
              </h3>
              <p className="text-sm text-neutral-500">
                Startup CTO – Tech Product (SaaS)
              </p>
            </div>
          </div>
          {/* End Card */}

          {/* Card */}
          <div className="flex flex-col border shadow-2xs rounded-xl bg-neutral-900 border-neutral-700">
            <div className="flex-auto p-4 md:p-6">
              <p className="mt-3 sm:mt-6 text-base md:text-xl text-white">
                <em>
                  "What I liked most was how they didn't overcomplicate things.
                  We got a lightning-fast website that just works. No design
                  drama, no jargon — just functional, conversion-ready pages
                  delivered ahead of time."
                </em>
              </p>
            </div>

            <div className="p-4 rounded-b-xl md:px-6">
              <h3 className="text-sm font-semibold sm:text-base text-neutral-200">
                Tanvi B., Founder, The Earth Edit
              </h3>
              <p className="text-sm text-neutral-500">
                D2C Brand Owner – E-commerce
              </p>
            </div>
          </div>
          {/* End Card */}

          {/* Card */}
          <div className="flex flex-col border shadow-2xs rounded-xl bg-neutral-900 border-neutral-700">
            <div className="flex-auto p-4 md:p-6">
              <p className="mt-3 sm:mt-6 text-base md:text-xl text-white">
                <em>
                  "As a design-first studio, we needed a dev partner who could
                  bring our Figma files to life pixel-perfectly. TechNova didn’t
                  just 'code it up' — they respected every detail, optimized
                  load times, and were always available for quick tweaks. That’s
                  rare."
                </em>
              </p>
            </div>

            <div className="p-4 rounded-b-xl md:px-6">
              <h3 className="text-sm font-semibold sm:text-base text-neutral-200">
                Krishna Rao, Co-founder, FolioHive Studio
              </h3>
              <p className="text-sm text-neutral-500">
                Agency Partner – Design Studio Collaboration
              </p>
            </div>
          </div>
          {/* End Card */}
          {/* Card */}
          <div className="flex flex-col border shadow-2xs rounded-xl bg-neutral-900 border-neutral-700">
            <div className="flex-auto p-4 md:p-6">
              <p className="mt-3 sm:mt-6 text-base md:text-xl text-white">
                <em>
                  "I had zero tech background and a rough idea of what I needed.
                  TechNova not only built the web app but also explained
                  everything in plain English. They didn’t just deliver — they
                  de-risked the entire process for me."
                </em>
              </p>
            </div>

            <div className="p-4 rounded-b-xl md:px-6">
              <h3 className="text-sm font-semibold sm:text-base text-neutral-200">
                Sanya Kapoor, Founder, LegalEasePro
              </h3>
              <p className="text-sm text-neutral-500">
                Solo Founder – Service Business
              </p>
            </div>
          </div>
          {/* End Card */}
          {/* Card */}
          <div className="flex flex-col border shadow-2xs rounded-xl bg-neutral-900 border-neutral-700">
            <div className="flex-auto p-4 md:p-6">
              <p className="mt-3 sm:mt-6 text-base md:text-xl text-white">
                <em>
                  "We’ve worked with agencies before, but TechNova hit the sweet
                  spot — lean, responsive, and technically sharp. They’re the
                  kind of dev team that makes you forget deadlines because
                  things just get done."
                </em>
              </p>
            </div>

            <div className="p-4 rounded-b-xl md:px-6">
              <h3 className="text-sm font-semibold sm:text-base text-neutral-200">
                Rajat D., PM at VortexPay
              </h3>
              <p className="text-sm text-neutral-500">
                Product Manager – Corporate Client
              </p>
            </div>
          </div>
          {/* End Card */}
        </div>
        {/* End Grid */}
      </div>
      // {/* End Testimonials */}
    </>
  );
};

export default Testimonials;
