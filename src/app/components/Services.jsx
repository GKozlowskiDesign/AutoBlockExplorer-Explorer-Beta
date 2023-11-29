import Image from "next/image";
import React from "react";
const Services = () => {
  return (
    <section className="bg-gray-900 pt-0 md:pt-20 pb-20 p-10">
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Logo Section */}
        <div className="cols-span-1 mx-auto">
          <Image
            src="/assets/AutoBlockLogo.png"
            width={240}
            height={240}
            alt="Logo"
            className="pt-20"
          />
        </div>

        {/* Services Section */}
        <div className="cols-span-1 grid grid-cols-1 md:grid-cols-2 border-2 border-gray-500 rounded-3xl p-5 pr-6 mt-10 md:mt-0">
          {/* Left Column */}
          <div className="cols-span-1 pt-4">
            <ul className="space-y-4 text-left text-gray-500 dark:text-gray-400 text-xs">
              {/* List items for the left column */}
              <li className="flex items-center space-x-3 rtl:space-x-reverse">
                <svg
                  className="flex-shrink-0 w-3.5 h-3.5 text-gray-600 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 16 12"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5.917 5.724 10.5 15 1.5"
                  />
                </svg>
                <span>NFT Vehicle Records</span>
              </li>
              {/* Add other list items similarly */}
            </ul>
          </div>

          {/* Right Column */}
          <div className="cols-span-1 pt-4">
            <ul className="space-y-4 text-left text-gray-500 dark:text-gray-400 text-xs">
              {/* List items for the right column */}
              <li className="flex items-center space-x-3 rtl:space-x-reverse">
                <svg
                  className="flex-shrink-0 w-3.5 h-3.5 text-gray-600 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 16 12"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5.917 5.724 10.5 15 1.5"
                  />
                </svg>
                <span>DIY Guidance Docs</span>
              </li>
              {/* Add other list items similarly */}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Services;
