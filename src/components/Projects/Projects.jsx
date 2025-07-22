const Projects = () => {
  return (
    //    {/* Card Blog */}
    <div
      id="projects"
      className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto"
    >
      {/* Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Card */}
        <div className="group flex flex-col h-full bg-white border border-gray-200 shadow-2xs rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70">
          <div className="h-52 flex flex-col justify-center items-center bg-blue-600 rounded-t-xl">
            <svg
              className="size-28"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 6.94975C2 6.06722 2 5.62595 2.06935 5.25839C2.37464 3.64031 3.64031 2.37464 5.25839 2.06935C5.62595 2 6.06722 2 6.94975 2C7.33642 2 7.52976 2 7.71557 2.01738C8.51665 2.09229 9.27652 2.40704 9.89594 2.92051C10.0396 3.03961 10.1763 3.17633 10.4497 3.44975L11 4C11.8158 4.81578 12.2237 5.22367 12.7121 5.49543C13.2006 5.76719 13.7597 5.86858 14.878 6.07137L17 6.5C20.4505 7.15156 22.1758 7.47734 23.0879 8.98867C24 10.5 24 12.5 24 16.5C24 20.5 24 22.5 23.0879 24.0113C22.1758 25.5227 20.4505 25.8484 17 26.5L14.878 26.9286C13.7597 27.1314 13.2006 27.2328 12.7121 27.5046C12.2237 27.7763 11.8158 28.1842 11 29L10.4497 29.5503C10.1763 29.8237 10.0396 29.9604 9.89594 30.0795C9.27652 30.593 8.51665 30.9077 7.71557 30.9826C7.52976 31 7.33642 31 6.94975 31C6.06722 31 5.62595 31 5.25839 30.9307C3.64031 30.6254 2.37464 29.3597 2.06935 27.7416C2 27.374 2 26.9328 2 26.0503V6.94975Z"
                fill="white"
              />
            </svg>
          </div>
          <div className="p-4 md:p-6">
            <span className="block mb-1 text-xs font-semibold uppercase text-blue-600 dark:text-blue-500">
              Academic Website
            </span>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-neutral-300 dark:hover:text-white">
              Assessment On Click
            </h3>
            <p className="mt-3 text-gray-500 dark:text-neutral-500">
              A acedemic writing company.
            </p>
          </div>
          <div className="mt-auto flex border-t border-gray-200 divide-x divide-gray-200 dark:border-neutral-700 dark:divide-neutral-700">
            <a
              className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-es-xl bg-white text-gray-800 shadow-2xs hover:bg-gray-50 focus:outline-hidden focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
              href="https://assessmentonclick.com/"
            >
              View Website
            </a>
            {/* <a
              className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-ee-xl bg-white text-gray-800 shadow-2xs hover:bg-gray-50 focus:outline-hidden focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
              href="#"
            >
              View API
            </a> */}
          </div>
        </div>
        {/* End Card */}

        {/* Card */}
        <div className="group flex flex-col h-full bg-white border border-gray-200 shadow-2xs rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70">
          <div className="h-52 flex flex-col justify-center items-center bg-rose-500 rounded-t-xl">
            <svg
              className="size-28"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 6.94975C2 6.06722 2 5.62595 2.06935 5.25839C2.37464 3.64031 3.64031 2.37464 5.25839 2.06935C5.62595 2 6.06722 2 6.94975 2C7.33642 2 7.52976 2 7.71557 2.01738C8.51665 2.09229 9.27652 2.40704 9.89594 2.92051C10.0396 3.03961 10.1763 3.17633 10.4497 3.44975L11 4C11.8158 4.81578 12.2237 5.22367 12.7121 5.49543C13.2006 5.76719 13.7597 5.86858 14.878 6.07137L17 6.5C20.4505 7.15156 22.1758 7.47734 23.0879 8.98867C24 10.5 24 12.5 24 16.5C24 20.5 24 22.5 23.0879 24.0113C22.1758 25.5227 20.4505 25.8484 17 26.5L14.878 26.9286C13.7597 27.1314 13.2006 27.2328 12.7121 27.5046C12.2237 27.7763 11.8158 28.1842 11 29L10.4497 29.5503C10.1763 29.8237 10.0396 29.9604 9.89594 30.0795C9.27652 30.593 8.51665 30.9077 7.71557 30.9826C7.52976 31 7.33642 31 6.94975 31C6.06722 31 5.62595 31 5.25839 30.9307C3.64031 30.6254 2.37464 29.3597 2.06935 27.7416C2 27.374 2 26.9328 2 26.0503V6.94975Z"
                fill="white"
              />
            </svg>
          </div>
          <div className="p-4 md:p-6">
            <span className="block mb-1 text-xs font-semibold uppercase text-rose-600 dark:text-rose-500">
              Assignment
            </span>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-neutral-300 dark:hover:text-white">
              Teachief Academy
            </h3>
            <p className="mt-3 text-gray-500 dark:text-neutral-500">
              A Assignment company.
            </p>
          </div>
          <div className="mt-auto flex border-t border-gray-200 divide-x divide-gray-200 dark:border-neutral-700 dark:divide-neutral-700">
            <a
              className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-es-xl bg-white text-gray-800 shadow-2xs hover:bg-gray-50 focus:outline-hidden focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
              href="https://teachiefacademy.com/"
            >
              View Website
            </a>
            {/* <a
              className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-ee-xl bg-white text-gray-800 shadow-2xs hover:bg-gray-50 focus:outline-hidden focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
              href="#"
            >
              View API
            </a> */}
          </div>
        </div>
        {/* End Card */}

        {/* Card */}
        <div className="group flex flex-col h-full bg-white border border-gray-200 shadow-2xs rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70">
          <div className="h-52 flex flex-col justify-center items-center bg-amber-500 rounded-t-xl">
            <svg
              className="size-28"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 6.94975C2 6.06722 2 5.62595 2.06935 5.25839C2.37464 3.64031 3.64031 2.37464 5.25839 2.06935C5.62595 2 6.06722 2 6.94975 2C7.33642 2 7.52976 2 7.71557 2.01738C8.51665 2.09229 9.27652 2.40704 9.89594 2.92051C10.0396 3.03961 10.1763 3.17633 10.4497 3.44975L11 4C11.8158 4.81578 12.2237 5.22367 12.7121 5.49543C13.2006 5.76719 13.7597 5.86858 14.878 6.07137L17 6.5C20.4505 7.15156 22.1758 7.47734 23.0879 8.98867C24 10.5 24 12.5 24 16.5C24 20.5 24 22.5 23.0879 24.0113C22.1758 25.5227 20.4505 25.8484 17 26.5L14.878 26.9286C13.7597 27.1314 13.2006 27.2328 12.7121 27.5046C12.2237 27.7763 11.8158 28.1842 11 29L10.4497 29.5503C10.1763 29.8237 10.0396 29.9604 9.89594 30.0795C9.27652 30.593 8.51665 30.9077 7.71557 30.9826C7.52976 31 7.33642 31 6.94975 31C6.06722 31 5.62595 31 5.25839 30.9307C3.64031 30.6254 2.37464 29.3597 2.06935 27.7416C2 27.374 2 26.9328 2 26.0503V6.94975Z"
                fill="white"
              />
            </svg>
          </div>
          <div className="p-4 md:p-6">
            <span className="block mb-1 text-xs font-semibold uppercase text-amber-500">
              Travel & Tour Website
            </span>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-neutral-300 dark:hover:text-white">
              PerfectTrip Creator
            </h3>
            <p className="mt-3 text-gray-500 dark:text-neutral-500">
              A tour & travel website.
            </p>
          </div>
          <div className="mt-auto flex border-t border-gray-200 divide-x divide-gray-200 dark:border-neutral-700 dark:divide-neutral-700">
            <a
              className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-es-xl bg-white text-gray-800 shadow-2xs hover:bg-gray-50 focus:outline-hidden focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
              href="https://perfecttripcreator.com/"
            >
              View Website
            </a>
            {/* <a
              className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-ee-xl bg-white text-gray-800 shadow-2xs hover:bg-gray-50 focus:outline-hidden focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
              href="#"
            >
              View API
            </a> */}
          </div>
        </div>
        {/* End Card */}
      </div>
      {/* End Grid */}
    </div>
    // {/* End Card Blog */}/
  );
};

export default Projects;
