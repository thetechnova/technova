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
          <div className="flex-shrink-0 flex justify-center items-center size-16 bg-blue-100/10 rounded-full dark:bg-blue-900/10 mb-4 mx-auto">
            <svg
              className="size-10 text-blue-500"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
          </div>
          <h4 className="font-medium text-lg text-gray-800 dark:text-neutral-200">
            Starter
          </h4>
          <span className="mt-2 text-sm text-gray-500 dark:text-neutral-400">
            For: Students, freelancers, or experts building a personal brand
          </span>
          <span className="mt-5 text-lg text-gray-800 dark:text-neutral-200">
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

          <a
            className="mt-5 py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-[#ffb400] text-black hover:bg-[#e5a200] disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            href="#contact"
          >
            Get Your Portfolio
          </a>
        </div>

        {/* Growth Card */}
        <div className="flex flex-col border border-gray-200 text-center rounded-xl p-8 dark:border-neutral-700">
          <div className="flex-shrink-0 flex justify-center items-center size-16 bg-yellow-100/10 rounded-full dark:bg-yellow-900/10 mb-4 mx-auto">
            <svg
              className="size-10 text-[#ffb400]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
            </svg>
          </div>
          <h4 className="font-medium text-lg text-gray-800 dark:text-neutral-200">
            Growth
          </h4>
          <span className="mt-2 text-sm text-gray-500 dark:text-neutral-400">
            For: Small businesses, startups, and founders launching online
          </span>
          <span className="mt-5 text-lg text-gray-800 dark:text-neutral-200">
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

          <a
            className="mt-5 py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-[#ffb400] text-black hover:bg-[#e5a200] disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            href="#contact"
          >
            Start Your Website
          </a>
        </div>

        {/* Custom Build Card */}
        <div className="flex flex-col border border-gray-200 text-center rounded-xl p-8 dark:border-neutral-700">
          <div className="flex-shrink-0 flex justify-center items-center size-16 bg-purple-100/10 rounded-full dark:bg-purple-900/10 mb-4 mx-auto">
            <svg
              className="size-10 text-purple-500"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 3a6 6 0 0 0-6 6v7" />
              <path d="M18 9a6 6 0 0 0-6-6" />
              <path d="M6 19v2" />
              <path d="M18 19v2" />
              <rect width="12" height="4" x="6" y="15" rx="2" />
            </svg>
          </div>
          <h4 className="font-medium text-lg text-gray-800 dark:text-neutral-200">
            Custom Build
          </h4>
          <span className="mt-2 text-sm text-gray-500 dark:text-neutral-400">
            For: MVPs, dashboards, or full custom functionality
          </span>
          <span className="mt-5 text-lg text-gray-800 dark:text-neutral-200">
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

          <a
            className="mt-5 py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-[#ffb400] text-black hover:bg-[#e5a200] disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            href="#contact"
          >
            Talk to Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
