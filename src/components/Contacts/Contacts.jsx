import React from "react";

const Contacts = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "86eb2c33-5086-44d8-b9da-6d6a299785d8");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    } catch (error) {
      console.log("Error", error);
      setResult("Something went wrong!");
    }
  };

  return (
    // {/* Contact */}
    <div id="contact" className="bg-neutral-900">
      <div className="max-w-5xl px-4 xl:px-0 py-10 lg:py-20 mx-auto">
        {/* Title */}
        <div className="max-w-3xl mb-10 lg:mb-14">
          <h2 className="text-white font-semibold text-2xl md:text-4xl md:leading-tight">
            Contact us
          </h2>
          <p className="mt-1 text-neutral-400">
            Whatever your goal - we will get you there.
          </p>
        </div>
        {/* End Title */}

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 lg:gap-x-16">
          <div className="md:order-2 border-b border-neutral-800 pb-10 mb-10 md:border-b-0 md:pb-0 md:mb-0">
            <form onSubmit={onSubmit}>
              <div className="space-y-4">
                <div className="relative">
                  <input
                    type="text"
                    id="hs-tac-input-name"
                    name="name"
                    required
                    className="peer p-3 sm:p-4 block w-full bg-neutral-800 border-transparent rounded-lg sm:text-sm text-white placeholder:text-transparent focus:outline-hidden focus:ring-0 focus:border-transparent disabled:opacity-50 disabled:pointer-events-none
              focus:pt-6
              focus:pb-2
              not-placeholder-shown:pt-6
              not-placeholder-shown:pb-2
              autofill:pt-6
              autofill:pb-2"
                    placeholder="Name"
                  />
                  <label
                    htmlFor="hs-tac-input-name"
                    className="absolute top-0 start-0 p-3 sm:p-4 h-full text-neutral-400 text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent peer-disabled:opacity-50 peer-disabled:pointer-events-none
                peer-focus:text-xs
                peer-focus:-translate-y-1.5
                peer-focus:text-neutral-400
                peer-not-placeholder-shown:text-xs
                peer-not-placeholder-shown:-translate-y-1.5
                peer-not-placeholder-shown:text-neutral-400"
                  >
                    Name
                  </label>
                </div>
                <div className="relative">
                  <input
                    type="email"
                    id="hs-tac-input-email"
                    name="email"
                    required
                    className="peer p-3 sm:p-4 block w-full bg-neutral-800 border-transparent rounded-lg sm:text-sm text-white placeholder:text-transparent focus:outline-hidden focus:ring-0 focus:border-transparent disabled:opacity-50 disabled:pointer-events-none
              focus:pt-6
              focus:pb-2
              not-placeholder-shown:pt-6
              not-placeholder-shown:pb-2
              autofill:pt-6
              autofill:pb-2"
                    placeholder="Email"
                  />
                  <label
                    htmlFor="hs-tac-input-email"
                    className="absolute top-0 start-0 p-3 sm:p-4 h-full text-neutral-400 text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent peer-disabled:opacity-50 peer-disabled:pointer-events-none
                peer-focus:text-xs
                peer-focus:-translate-y-1.5
                peer-focus:text-neutral-400
                peer-not-placeholder-shown:text-xs
                peer-not-placeholder-shown:-translate-y-1.5
                peer-not-placeholder-shown:text-neutral-400"
                  >
                    Email
                  </label>
                </div>

                <div className="relative">
                  <input
                    type="text"
                    id="hs-tac-input-company"
                    name="company"
                    required
                    className="peer p-3 sm:p-4 block w-full bg-neutral-800 border-transparent rounded-lg sm:text-sm text-white placeholder:text-transparent focus:outline-hidden focus:ring-0 focus:border-transparent disabled:opacity-50 disabled:pointer-events-none
              focus:pt-6
              focus:pb-2
              not-placeholder-shown:pt-6
              not-placeholder-shown:pb-2
              autofill:pt-6
              autofill:pb-2"
                    placeholder="Company"
                  />
                  <label
                    htmlFor="hs-tac-input-company"
                    className="absolute top-0 start-0 p-3 sm:p-4 h-full text-neutral-400 text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent peer-disabled:opacity-50 peer-disabled:pointer-events-none
                peer-focus:text-xs
                peer-focus:-translate-y-1.5
                peer-focus:text-neutral-400
                peer-not-placeholder-shown:text-xs
                peer-not-placeholder-shown:-translate-y-1.5
                peer-not-placeholder-shown:text-neutral-400"
                  >
                    Company
                  </label>
                </div>

                <div className="relative">
                  <input
                    type="text"
                    id="hs-tac-input-phone"
                    name="phone"
                    required
                    className="peer p-3 sm:p-4 block w-full bg-neutral-800 border-transparent rounded-lg sm:text-sm text-white placeholder:text-transparent focus:outline-hidden focus:ring-0 focus:border-transparent disabled:opacity-50 disabled:pointer-events-none
              focus:pt-6
              focus:pb-2
              not-placeholder-shown:pt-6
              not-placeholder-shown:pb-2
              autofill:pt-6
              autofill:pb-2"
                    placeholder="Phone"
                  />
                  <label
                    htmlFor="hs-tac-input-phone"
                    className="absolute top-0 start-0 p-3 sm:p-4 h-full text-neutral-400 text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent peer-disabled:opacity-50 peer-disabled:pointer-events-none
                peer-focus:text-xs
                peer-focus:-translate-y-1.5
                peer-focus:text-neutral-400
                peer-not-placeholder-shown:text-xs
                peer-not-placeholder-shown:-translate-y-1.5
                peer-not-placeholder-shown:text-neutral-400"
                  >
                    Phone
                  </label>
                </div>

                <div className="relative">
                  <textarea
                    id="hs-tac-message"
                    name="message"
                    required
                    className="peer p-3 sm:p-4 block w-full bg-neutral-800 border-transparent rounded-lg sm:text-sm text-white placeholder:text-transparent focus:outline-hidden focus:ring-0 focus:border-transparent disabled:opacity-50 disabled:pointer-events-none
              focus:pt-6
              focus:pb-2
              not-placeholder-shown:pt-6
              not-placeholder-shown:pb-2
              autofill:pt-6
              autofill:pb-2"
                    placeholder="This is a textarea placeholder"
                    data-hs-textarea-auto-height
                  ></textarea>
                  <label
                    htmlFor="hs-tac-message"
                    className="absolute top-0 start-0 p-3 sm:p-4 h-full text-neutral-400 text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent peer-disabled:opacity-50 peer-disabled:pointer-events-none
                peer-focus:text-xs
                peer-focus:-translate-y-1.5
                peer-focus:text-neutral-400
                peer-not-placeholder-shown:text-xs
                peer-not-placeholder-shown:-translate-y-1.5
                peer-not-placeholder-shown:text-neutral-400"
                  >
                    Tell us about your project
                  </label>
                </div>
              </div>

              <div className="mt-2">
                <p className="text-xs text-neutral-500">
                  All fields are required
                </p>

                <div className="mt-5 flex items-center gap-4">
                  <button
                    type="submit"
                    className="group inline-flex items-center gap-x-2 py-2 px-3 bg-[#ff0] font-medium text-sm text-neutral-800 rounded-full focus:outline-hidden"
                  >
                    Submit
                    <svg
                      className="shrink-0 size-4 transition group-hover:translate-x-0.5 group-focus:translate-x-0.5"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </button>
                  {result && (
                    <span
                      className={`text-sm ${
                        result.includes("Success")
                          ? "text-green-400"
                          : "text-red-400"
                      }`}
                    >
                      {result}
                    </span>
                  )}
                </div>
              </div>
            </form>
          </div>
          {/* End Col */}

          <div className="space-y-14">
            <div className="flex gap-x-5">
              <svg
                className="shrink-0 size-6 text-neutral-500"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <div className="grow">
                <h4 className="text-white font-semibold">Our address:</h4>

                <address className="mt-1 text-neutral-400 text-sm not-italic">
                  300 Bath Street, Tay House
                  <br />
                  Glasgow G2 4JR, United Kingdom
                </address>
              </div>
            </div>

            <div className="flex gap-x-5">
              <svg
                className="shrink-0 size-6 text-neutral-500"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z" />
                <path d="m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10" />
              </svg>
              <div className="grow">
                <h4 className="text-white font-semibold">Email us:</h4>

                <a
                  className="mt-1 text-neutral-400 text-sm hover:text-neutral-200 focus:outline-hidden focus:text-neutral-200"
                  href="#mailto:example@site.co"
                  target="_blank"
                >
                  hello@example.so
                </a>
              </div>
            </div>

            <div className="flex gap-x-5">
              <svg
                className="shrink-0 size-6 text-neutral-500"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m3 11 18-5v12L3 14v-3z" />
                <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" />
              </svg>
              <div className="grow">
                <h4 className="text-white font-semibold">We're hiring</h4>
                <p className="mt-1 text-neutral-400">
                  We're thrilled to announce that we're expanding our team and
                  looking for talented individuals like you to join us.
                </p>
                <p className="mt-2">
                  <a
                    className="group inline-flex items-center gap-x-2 font-medium text-sm text-[#ff0] decoration-2 hover:underline focus:outline-hidden focus:underline"
                    href="#"
                  >
                    Job openings
                    <svg
                      className="shrink-0 size-4 transition group-hover:translate-x-0.5 group-focus:translate-x-0.5"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* End Grid */}
      </div>
    </div>
    // {/* End Contact */}
  );
};

export default Contacts;
