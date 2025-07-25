import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const Testimonials = () => {
  return (
    <>
      <div
        id="testimonials"
        className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto"
      >
        <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
          <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">
            Our Clients Says
          </h2>
          <p className="mt-1 text-gray-600 dark:text-neutral-400">
            See how game-changing companies are making the most of every
            engagement with Tech.
          </p>
        </div>
        {/* Grid */}
        <div className="relative">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={20}
            slidesPerView={4}
            loop={true}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
            }}
            speed={5000}
            allowTouchMove={false}
            style={{ transitionTimingFunction: "linear" }}
            breakpoints={{
              320: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
            }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {/* Card */}
            <SwiperSlide className="flex flex-col border shadow-2xs rounded-xl bg-neutral-900 border-neutral-700">
              <div className="flex-auto p-4">
                <p className="text-base text-white">
                  <em>
                    "We handed TechNova a half-baked spec and somehow got back a
                    production-ready backend in 10 days. No fluff, no delays —
                    just clean, scalable code that worked out of the box."
                  </em>
                </p>
              </div>

              <div className="p-4 rounded-b-xl">
                <h3 className="text-sm font-semibold text-neutral-200">
                  Anirudh Mehra, CTO, Blinqly
                </h3>
                <p className="text-xs text-neutral-500">
                  Startup CTO – Tech Product (SaaS)
                </p>
              </div>
            </SwiperSlide>
            {/* End Card */}

            {/* Card */}
            <SwiperSlide className="flex flex-col border shadow-2xs rounded-xl bg-neutral-900 border-neutral-700">
              <div className="flex-auto p-4">
                <p className="text-base text-white">
                  <em>
                    "What I liked most was how they didn't overcomplicate
                    things. We got a lightning-fast website that just works. No
                    design drama, no jargon — just functional, conversion-ready
                    pages."
                  </em>
                </p>
              </div>

              <div className="p-4 rounded-b-xl">
                <h3 className="text-sm font-semibold text-neutral-200">
                  Tanvi B., Founder, The Earth Edit
                </h3>
                <p className="text-xs text-neutral-500">
                  D2C Brand Owner – E-commerce
                </p>
              </div>
            </SwiperSlide>
            {/* End Card */}

            {/* Card */}
            <SwiperSlide className="flex flex-col border shadow-2xs rounded-xl bg-neutral-900 border-neutral-700">
              <div className="flex-auto p-4">
                <p className="text-base text-white">
                  <em>
                    "As a design-first studio, we needed a dev partner who could
                    bring our Figma files to life pixel-perfectly. TechNova
                    respected every detail and optimized load times."
                  </em>
                </p>
              </div>

              <div className="p-4 rounded-b-xl">
                <h3 className="text-sm font-semibold text-neutral-200">
                  Krishna Rao, Co-founder, FolioHive Studio
                </h3>
                <p className="text-xs text-neutral-500">
                  Agency Partner – Design Studio
                </p>
              </div>
            </SwiperSlide>
            {/* End Card */}

            {/* Card */}
            <SwiperSlide className="flex flex-col border shadow-2xs rounded-xl bg-neutral-900 border-neutral-700">
              <div className="flex-auto p-4">
                <p className="text-base text-white">
                  <em>
                    "I had zero tech background and a rough idea of what I
                    needed. TechNova not only built the web app but also
                    explained everything in plain English."
                  </em>
                </p>
              </div>

              <div className="p-4 rounded-b-xl">
                <h3 className="text-sm font-semibold text-neutral-200">
                  Sanya Kapoor, Founder, LegalEasePro
                </h3>
                <p className="text-xs text-neutral-500">
                  Solo Founder – Service Business
                </p>
              </div>
            </SwiperSlide>
            {/* End Card */}

            {/* Card */}
            <SwiperSlide className="flex flex-col border shadow-2xs rounded-xl bg-neutral-900 border-neutral-700">
              <div className="flex-auto p-4">
                <p className="text-base text-white">
                  <em>
                    "We've worked with agencies before, but TechNova hit the
                    sweet spot — lean, responsive, and technically sharp.
                    They're the kind of dev team that makes you forget
                    deadlines."
                  </em>
                </p>
              </div>

              <div className="p-4 rounded-b-xl">
                <h3 className="text-sm font-semibold text-neutral-200">
                  Rajat D., PM at VortexPay
                </h3>
                <p className="text-xs text-neutral-500">
                  Product Manager – Corporate Client
                </p>
              </div>
            </SwiperSlide>
            {/* End Card */}
          </Swiper>
          {/* Add edge shadows */}
          <div className="absolute top-0 left-0 w-12 h-full bg-gradient-to-r from-neutral-900/80 via-neutral-900/40 to-transparent pointer-events-none z-10"></div>
          <div className="absolute top-0 right-0 w-12 h-full bg-gradient-to-l from-neutral-900/80 via-neutral-900/40 to-transparent pointer-events-none z-10"></div>
        </div>
        {/* End Grid */}
      </div>
    </>
  );
};

export default Testimonials;
