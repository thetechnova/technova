import React from "react";

const Pricing = () => {
  return (
    <div
      id="pricing"
      className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto"
    >
      {/* Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Starter Card */}
        <div className="flex flex-col border border-gray-200 text-center rounded-xl p-8 dark:border-neutral-700">
          {/* <div className="flex-shrink-0 flex justify-center items-center size-12 bg-green-100 rounded-lg dark:bg-green-900/30 mb-4">
            <span className="text-2xl">🟩</span>
          </div> */}
          <h4 className="font-medium text-lg text-gray-800 dark:text-neutral-200">
            Starter
          </h4>
          <span className="mt-2 text-sm text-gray-500 dark:text-neutral-400">
            For: Students, freelancers, or experts building a personal brand
          </span>
          <span className="mt-5 font-bold text-2xl text-gray-800 dark:text-neutral-200">
            ₹4,999
          </span>

          {/* Features */}
          <ul className="mt-7 space-y-2.5 text-sm">
            <li className="flex space-x-2">
              <span className="text-green-600">✅</span>
              <span className="text-gray-800 dark:text-neutral-200">
                1-page portfolio site
              </span>
            </li>
            <li className="flex space-x-2">
              <span className="text-green-600">✅</span>
              <span className="text-gray-800 dark:text-neutral-200">
                Mobile-responsive
              </span>
            </li>
            <li className="flex space-x-2">
              <span className="text-green-600">✅</span>
              <span className="text-gray-800 dark:text-neutral-200">
                Fast delivery (7-10 days)
              </span>
            </li>
            <li className="flex space-x-2">
              <span className="text-green-600">✅</span>
              <span className="text-gray-800 dark:text-neutral-200">
                Deployed on your domain
              </span>
            </li>
            <li className="flex space-x-2">
              <span className="text-green-600">✅</span>
              <span className="text-gray-800 dark:text-neutral-200">
                Free updates for 14 days
              </span>
            </li>
            <li className="flex space-x-2">
              <span>📄</span>
              <span className="text-gray-800 dark:text-neutral-200">
                Includes project documentation
              </span>
            </li>
            <li className="flex space-x-2">
              <span>🔁</span>
              <span className="text-gray-800 dark:text-neutral-200">
                1 round of revision
              </span>
            </li>
            <li className="flex space-x-2">
              <span>🔗</span>
              <span className="text-gray-800 dark:text-neutral-200">
                Hosting & domain guidance
              </span>
            </li>
          </ul>
          {/* End Features */}

          <a
            className="mt-5 py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-[#ffb400] text-black hover:bg-[#e5a200] disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            href="#contact"
          >
            🚀 Get Your Portfolio
          </a>
        </div>
        {/* End Starter Card */}

        {/* Growth Card */}
        <div className="flex flex-col border-2 border-[#ffb400] text-center shadow-xl rounded-xl p-8 dark:border-[#ffb400]">
          {/* <div className="flex-shrink-0 flex justify-center items-center size-12 bg-yellow-100 rounded-lg dark:bg-yellow-900/30 mb-4">
            <span className="text-2xl">🟨</span>
          </div> */}
          <h4 className="font-medium text-lg text-gray-800 dark:text-neutral-200">
            Growth
          </h4>
          <span className="mt-2 text-sm text-gray-500 dark:text-neutral-400">
            For: Small businesses, startups, and founders launching online
          </span>
          <span className="mt-5 font-bold text-2xl text-gray-800 dark:text-neutral-200">
            Starting at: ₹30,000
          </span>

          {/* Features */}
          <ul className="mt-7 space-y-2.5 text-sm">
            <li className="flex space-x-2">
              <span className="text-green-600">✅</span>
              <span className="text-gray-800 dark:text-neutral-200">
                Up to 5 custom pages
              </span>
            </li>
            <li className="flex space-x-2">
              <span className="text-green-600">✅</span>
              <span className="text-gray-800 dark:text-neutral-200">
                Contact form, CMS/blog setup
              </span>
            </li>
            <li className="flex space-x-2">
              <span className="text-green-600">✅</span>
              <span className="text-gray-800 dark:text-neutral-200">
                Mobile-first & SEO-ready
              </span>
            </li>
            <li className="flex space-x-2">
              <span className="text-green-600">✅</span>
              <span className="text-gray-800 dark:text-neutral-200">
                Fast, lightweight code
              </span>
            </li>
            <li className="flex space-x-2">
              <span className="text-green-600">✅</span>
              <span className="text-gray-800 dark:text-neutral-200">
                Deployed + launch support
              </span>
            </li>
            <li className="flex space-x-2">
              <span className="text-green-600">✅</span>
              <span className="text-gray-800 dark:text-neutral-200">
                Basic CMS (optional)
              </span>
            </li>
            <li className="flex space-x-2">
              <span>📄</span>
              <span className="text-gray-800 dark:text-neutral-200">
                Professional documentation
              </span>
            </li>
            <li className="flex space-x-2">
              <span>🔁</span>
              <span className="text-gray-800 dark:text-neutral-200">
                2 rounds of revision
              </span>
            </li>
            <li className="flex space-x-2">
              <span>🕑</span>
              <span className="text-gray-800 dark:text-neutral-200">
                Delivered in ~10–14 days
              </span>
            </li>
            <li className="flex space-x-2">
              <span>💳</span>
              <span className="text-gray-800 dark:text-neutral-200">
                50% upfront, 50% on delivery
              </span>
            </li>
          </ul>
          {/* End Features */}

          <a
            className="mt-5 py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-[#ffb400] text-black hover:bg-[#e5a200] disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            href="#contact"
          >
            ⚡ Start Your Website
          </a>
        </div>
        {/* End Growth Card */}

        {/* Custom Build Card */}
        <div className="flex flex-col border border-gray-200 text-center rounded-xl p-8 dark:border-neutral-700">
          {/* <div className="flex-shrink-0 flex justify-center items-center size-12 bg-red-100 rounded-lg dark:bg-red-900/30 mb-4">
            <span className="text-2xl">🟥</span>
          </div> */}
          <h4 className="font-medium text-lg text-gray-800 dark:text-neutral-200">
            Custom Build
          </h4>
          <span className="mt-2 text-sm text-gray-500 dark:text-neutral-400">
            For: MVPs, dashboards, or full custom functionality
          </span>
          <span className="mt-5 font-bold text-2xl text-gray-800 dark:text-neutral-200">
            Starts at: ₹50,000+
          </span>
          <span className="mt-2 text-sm text-gray-500 dark:text-neutral-400">
            (hourly/project-based)
          </span>

          {/* Features */}
          <ul className="mt-7 space-y-2.5 text-sm">
            <li className="flex space-x-2">
              <span className="text-green-600">✅</span>
              <span className="text-gray-800 dark:text-neutral-200">
                Fully custom web dev (frontend + backend)
              </span>
            </li>
            <li className="flex space-x-2">
              <span className="text-green-600">✅</span>
              <span className="text-gray-800 dark:text-neutral-200">
                Scalable MVP or SaaS builds
              </span>
            </li>
            <li className="flex space-x-2">
              <span className="text-green-600">✅</span>
              <span className="text-gray-800 dark:text-neutral-200">
                Dynamic content, APIs, auth, forms
              </span>
            </li>
            <li className="flex space-x-2">
              <span className="text-green-600">✅</span>
              <span className="text-gray-800 dark:text-neutral-200">
                Ongoing support & iterations
              </span>
            </li>
            <li className="flex space-x-2">
              <span>📄</span>
              <span className="text-gray-800 dark:text-neutral-200">
                Milestone documentation
              </span>
            </li>
            <li className="flex space-x-2">
              <span>🧩</span>
              <span className="text-gray-800 dark:text-neutral-200">
                Add-ons: Admin Panel, API setup, more
              </span>
            </li>
            <li className="flex space-x-2">
              <span>🕑</span>
              <span className="text-gray-800 dark:text-neutral-200">
                Timeline based on scope
              </span>
            </li>
            <li className="flex space-x-2">
              <span>💳</span>
              <span className="text-gray-800 dark:text-neutral-200">
                50% upfront, milestone-based after
              </span>
            </li>
          </ul>
          {/* End Features */}

          <a
            className="mt-5 py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-[#ffb400] text-black hover:bg-[#e5a200] disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            href="#contact"
          >
            🧠 Talk to Us
          </a>
        </div>
        {/* End Custom Build Card */}
      </div>
      {/* End Grid */}
    </div>
  );
};

export default Pricing;
