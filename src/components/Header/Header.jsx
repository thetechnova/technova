import React from "react";

const Header = () => {
  return (
    <header class="sticky top-4 inset-x-0 flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full before:absolute before:inset-0 before:max-w-5xl before:mx-2 lg:before:mx-auto before:rounded-[26px] before:bg-neutral-800/30 before:backdrop-blur-md">
      <nav class="relative max-w-5xl w-full flex flex-wrap md:flex-nowrap basis-full items-center justify-between py-2 ps-5 pe-2 md:py-0 mx-2 lg:mx-auto">
        <div class="flex items-center">
          {/* <!-- Logo --> */}
          <a
            class="flex-none rounded-md text-xl inline-block font-semibold focus:outline-hidden focus:opacity-80"
            href="/"
            aria-label="Tech Nova"
          >
            <svg
              width="468.59999999999997"
              height="136.00829268292682"
              viewBox="0 0 410 119"
              class="w-32 h-auto looka-1j8o68f"
            >
              <defs id="SvgjsDefs1027"></defs>
              <g
                id="SvgjsG1028"
                featurekey="rootContainer"
                transform="matrix(1,0,0,1,0,0)"
                fill="transparent"
              >
                <rect
                  xmlns="http://www.w3.org/2000/svg"
                  width="116"
                  height="32"
                  rx="10"
                  ry="10"
                ></rect>
              </g>
              <g
                id="SvgjsG1029"
                featurekey="PG4fjM-0"
                transform="matrix(0.952461816404006,0,0,0.952461816404006,-0.051787555651063855,14.000068986529836)"
                fill="#ffb400"
              >
                <g
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  stroke="black"
                  font-family="Times New Roman"
                  font-size="16"
                  transform="scale(1 -1)"
                >
                  <g transform="translate(0 -96)">
                    <g>
                      <path
                        d="M 21.633,34.925 C 24.973,46.855 40.837,53.71 46.922,66.223 C 49.866,72.279 48.49,83.461 43.464,87.939 C 43.197,88.178 42.09,90.326 43.217,89.521 C 54.416,81.327 63.521,70.509 59.309,60.068 C 53.464,45.577 38.409,38.34 38.519,23.585 C 38.566,17.447 43.088,12.523 48.838,7.375 L 49.073,6.299 C 34.143,10.56 17.742,21.028 21.633,34.925 Z M 59.314,18.723 C 67.987,26.524 73.282,31.263 71.043,40.298 C 73.766,36.119 76.295,30.323 74.135,25.806 C 72.203,21.769 70.28,18.956 63.244,15.02 C 59.515,12.935 56.712,10.677 54.37,6.898 C 54.248,10.853 55.011,14.852 59.314,18.723 Z M 49.686,32.153 C 53.003,38.255 57.845,42.622 62.538,48.882 C 65.869,53.325 68.92,60.704 65.731,66.728 L 65.937,67.016 C 70.824,61.556 71.028,52.654 69.495,46.059 C 67.086,35.69 58.5,31.5 53.511,23.918 C 51.557,20.948 50.446,17.311 51,13.5 C 45.461,18.021 46.717,26.69 49.686,32.153 Z"
                        stroke-linejoin="miter"
                        stroke-linecap="round"
                        stroke="none"
                        stroke-width="0.75"
                        fill="#ffb400"
                        marker-start="none"
                        marker-end="none"
                        stroke-miterlimit="79.8403193612775"
                      ></path>
                    </g>
                  </g>
                </g>
              </g>
              <g
                id="SvgjsG1030"
                featurekey="jxYttZ-0"
                transform="matrix(2.8847774929776584,0,0,2.8847774929776584,88.11522319480689,20.46038733127386)"
                fill="#f6f6f6"
              >
                <path d="M4.24 20 c-0.14 0 -0.24 -0.12 -0.24 -0.26 l0 -9.44 l-2.74 0 c-0.14 0 -0.26 -0.1 -0.26 -0.24 l0 -2.3 c0 -0.14 0.12 -0.26 0.26 -0.26 l8.58 0 c0.16 0 0.26 0.12 0.26 0.26 l0 2.3 c0 0.14 -0.1 0.24 -0.26 0.24 l-2.74 0 l0 9.44 c0 0.14 -0.12 0.26 -0.26 0.26 l-2.6 0 z M12.1 20 l0 -11.98 c0 -0.5 0.1 -0.6 0.26 -0.6 l8.76 0 c0.14 0 0.26 0.1 0.26 0.24 l0 2.26 c0 0.14 -0.12 0.26 -0.26 0.26 l-5.92 0 l0 2.08 l3.74 0 c0.14 0 0.26 0.12 0.26 0.26 l0 2.24 c0 0.14 -0.12 0.26 -0.26 0.26 l-3.74 0 l0 2.14 l5.9 0 c0.14 0 0.26 0.12 0.26 0.26 l0 2.24 c0 0.14 -0.12 0.26 -0.26 0.26 l-8.74 0 c-0.16 0 -0.26 -0.12 -0.26 0.08 z M29.68 20 c-1.18 0 -2.26 -0.28 -3.22 -0.84 c-0.96 -0.58 -1.72 -1.36 -2.26 -2.34 s-0.82 -2.08 -0.82 -3.3 c0 -1.18 0.28 -2.28 0.84 -3.26 c0.56 -0.96 1.34 -1.74 2.3 -2.3 c0.98 -0.56 2.08 -0.84 3.24 -0.84 c0.88 0 1.74 0.2 2.58 0.56 c0.84 0.38 1.56 0.88 2.16 1.52 c0.08 0.1 0.08 0.24 0 0.34 l-1.9 1.56 c-0.06 0.06 -0.12 0.1 -0.2 0.1 s-0.16 -0.04 -0.2 -0.1 c-1.02 -1.24 -2.66 -1.5 -4.04 -0.64 c-1.2 0.74 -1.64 2.1 -1.58 3.46 c0.06 1.38 1.06 2.56 2.38 2.96 c1.2 0.36 2.38 0.08 3.24 -0.84 c0.06 -0.04 0.12 -0.08 0.2 -0.06 c0.08 0 0.14 0.02 0.18 0.08 l1.94 1.36 c0.08 0.1 0.08 0.24 0 0.34 c-0.64 0.68 -1.4 1.24 -2.24 1.64 c-0.86 0.4 -1.74 0.6 -2.6 0.6 z M36.839999999999996 20 c-0.14 0 -0.26 -0.12 -0.26 -0.26 l0 -11.98 c0 -0.14 0.12 -0.26 0.26 -0.26 l2.6 0 c0.14 0 0.26 0.12 0.26 0.26 l0 4.92 l4.52 0 l0 -4.92 c0 -0.14 0.12 -0.26 0.26 -0.26 l2.6 0 c0.14 0 0.26 0.12 0.26 0.26 l0 11.98 c0 0.14 -0.12 0.26 -0.26 0.26 l-2.6 0 c-0.14 0 -0.26 -0.12 -0.26 -0.26 l0 -4.3 l-4.52 0 l0 4.3 c0 0.14 -0.12 0.26 -0.26 0.26 l-2.6 0 z M54.99999999999999 20 c-0.14 0 -0.26 -0.12 -0.26 -0.26 l0 -11.98 c0 -0.14 0.12 -0.26 0.26 -0.26 l2.36 0 c0.08 0 0.16 0.04 0.22 0.1 l4.6 7.1 l0 -6.94 c0 -0.14 0.12 -0.26 0.26 -0.26 l2.46 0 c0.14 0 0.26 0.12 0.26 0.26 l0 11.98 c0 0.14 -0.12 0.26 -0.26 0.26 l-2.36 0 c-0.08 0 -0.16 -0.04 -0.22 -0.1 l-4.58 -7.06 l0 6.9 c0 0.14 -0.12 0.26 -0.26 0.26 l-2.48 0 z M73.6 20 c-1.2 0 -2.3 -0.28 -3.26 -0.84 c-0.98 -0.56 -1.76 -1.36 -2.34 -2.32 c-0.56 -0.98 -0.84 -2.1 -0.84 -3.3 c0 -1.18 0.28 -2.28 0.84 -3.26 c0.58 -0.98 1.34 -1.76 2.32 -2.32 s2.08 -0.84 3.28 -0.84 c1.18 0 2.28 0.28 3.26 0.84 s1.76 1.34 2.32 2.32 c0.58 0.98 0.86 2.08 0.86 3.26 c0 1.2 -0.28 2.3 -0.86 3.28 c-0.56 0.98 -1.34 1.76 -2.32 2.34 c-0.98 0.56 -2.08 0.84 -3.26 0.84 z M73.64 17.12 c0.58 0 1.12 -0.16 1.6 -0.46 c0.5 -0.32 0.9 -0.74 1.18 -1.3 c0.3 -0.54 0.44 -1.16 0.44 -1.82 c0 -0.64 -0.14 -1.26 -0.44 -1.8 c-0.28 -0.54 -0.68 -0.96 -1.18 -1.28 c-0.48 -0.3 -1.02 -0.46 -1.6 -0.46 c-0.6 0 -1.14 0.16 -1.64 0.46 c-0.52 0.32 -0.92 0.74 -1.22 1.28 c-0.3 0.56 -0.44 1.16 -0.44 1.8 c0 0.66 0.14 1.28 0.44 1.82 c0.32 0.54 0.72 0.98 1.22 1.28 c0.5 0.32 1.04 0.48 1.64 0.48 z M85.7 20 c-0.1 0 -0.2 -0.06 -0.24 -0.16 l-4 -12 c-0.04 -0.08 -0.02 -0.16 0.02 -0.24 c0.06 -0.06 0.14 -0.1 0.22 -0.1 l2.8 0 c0.1 0 0.2 0.06 0.24 0.18 l2.38 7.82 l2.4 -7.82 c0.04 -0.12 0.14 -0.18 0.24 -0.18 l2.68 0 c0.08 0 0.16 0.04 0.22 0.1 c0.04 0.08 0.06 0.16 0.02 0.24 l-4.06 12 c-0.04 0.1 -0.12 0.16 -0.24 0.16 l-2.68 0 z M92.36000000000001 20 c-0.08 0 -0.16 -0.04 -0.2 -0.12 c-0.06 -0.06 -0.06 -0.16 -0.04 -0.24 l4.66 -11.98 c0.04 -0.1 0.14 -0.16 0.24 -0.16 l2.68 0 c0.1 0 0.2 0.06 0.24 0.16 l4.58 11.98 c0.02 0.08 0.02 0.16 -0.04 0.24 c-0.04 0.08 -0.12 0.12 -0.2 0.12 l-2.78 0 c-0.1 0 -0.2 -0.06 -0.24 -0.16 l-0.74 -1.84 l-4.5 0.02 l-0.74 1.82 c-0.04 0.1 -0.14 0.16 -0.24 0.16 l-2.68 0 z M96.84 15.5 l2.88 0 l-1.44 -4.24 z"></path>
              </g>
            </svg>
          </a>
          {/* <!-- End Logo --> */}
        </div>

        {/* <!-- Button Group --> */}
        <div class="md:order-3 flex items-center gap-x-3">
          <div class="md:ps-3">
            <a
              class="group inline-flex items-center gap-x-2 py-2 px-3 bg-[#ffb400] md:font-medium font-bold text-sm text-nowrap text-neutral-800 rounded-full focus:outline-hidden"
              href="#"
            >
              Conatct Now
            </a>
          </div>

          <div class="md:hidden">
            <button
              type="button"
              class="hs-collapse-toggle size-9 flex justify-center items-center text-sm font-semibold rounded-full bg-neutral-800 text-white disabled:opacity-50 disabled:pointer-events-none"
              id="hs-navbar-floating-dark-collapse"
              aria-expanded="false"
              aria-controls="hs-navbar-floating-dark"
              aria-label="Toggle navigation"
              data-hs-collapse="#hs-navbar-floating-dark"
            >
              <svg
                class="hs-collapse-open:hidden shrink-0 size-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <line x1="3" x2="21" y1="6" y2="6" />
                <line x1="3" x2="21" y1="12" y2="12" />
                <line x1="3" x2="21" y1="18" y2="18" />
              </svg>
              <svg
                class="hs-collapse-open:block hidden shrink-0 size-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </button>
          </div>
        </div>
        {/* <!-- End Button Group --> */}

        {/* <!-- Collapse --> */}
        <div
          id="hs-navbar-floating-dark"
          class="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow md:block"
          aria-labelledby="hs-navbar-floating-dark-collapse"
        >
          <div class="flex flex-col md:flex-row md:items-center md:justify-end gap-y-3 py-2 md:py-0 md:ps-7">
            <a
              class="pe-3 ps-px sm:px-3 md:py-4 text-sm text-white hover:text-neutral-300 focus:outline-hidden focus:text-neutral-300"
              href="/"
              aria-current="page"
            >
              Home
            </a>
            <a
              class="pe-3 ps-px sm:px-3 md:py-4 text-sm text-white hover:text-neutral-300 focus:outline-hidden focus:text-neutral-300"
              href="#"
            >
              Projects
            </a>
            <a
              class="pe-3 ps-px sm:px-3 md:py-4 text-sm text-white hover:text-neutral-300 focus:outline-hidden focus:text-neutral-300"
              href="#"
            >
              Testimonials
            </a>
            <a
              class="pe-3 ps-px sm:px-3 md:py-4 text-sm text-white hover:text-neutral-300 focus:outline-hidden focus:text-neutral-300"
              href="#"
            >
              Approach
            </a>

            {/* <!-- Dropdown Link --> */}
            {/*  */}
            {/* <!-- End Dropdown Link --> */}
          </div>
        </div>
        {/* <!-- End Collapse --> */}
      </nav>
    </header>
  );
};

export default Header;
