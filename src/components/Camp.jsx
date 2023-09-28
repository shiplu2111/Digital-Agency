import React from "react";

export const Camp = ({ title }) => {
  return (
    <>
      <section className="-mt-24 pt-40 pb-12 bg-green-50">
        <div className="container mx-auto">
          <h1 className="text-2xl lg:text-5xl font-bold mb-5 wow animate__animated animate__fadeIn animated">
            {title}
          </h1>
          <ul className="flex text-gray-500 text-sm lg:text-sm pb-12 wow animate__animated animate__fadeIn animated">
            <li className="inline-flex items-center">
              <a href="#" className="hover:text-blue-500 text-gray-800">
                Home
              </a>
              <svg
                fill="currentColor"
                viewBox="0 0 20 20"
                className="h-5 w-auto text-gray-300"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </li>
            <li className="inline-flex items-center">
              <a href="#" className="hover:text-blue-500 text-gray-800">
                {title}
              </a>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};
