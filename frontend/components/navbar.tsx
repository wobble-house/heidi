'use client';

import React from "react"
import { useState, useRef, useEffect} from 'react';
import Link from "next/link";

export default function MyNavbar({inverttext}:{inverttext: boolean}) {
  const ref = useRef(null)
  const [navbar, setNavbar] = useState(false);
  const handleClickOutside = () => {
    setNavbar(false)
    console.log('clicked outside')
  }

  const handleClickInside = () => {
    setNavbar(!navbar)
    console.log('clicked inside')
  }

  useOnClickOutside(ref, handleClickOutside)
  return (
      <nav className={`w-full top-0 z-50 px-4 md:py-10 -mt-10 fixed md:absolute`}>
        <div className="flex flex-col py-5 md:py-0 md:px-4 -mt-10 md:mt-0 ">
            <div className="md:block">
            <Link href={"/"}>
                <h2 className={`invisible md:visible text-3xl ${inverttext === true ? "text-heidibg" : "text-gray-500"} text-center align-middle font-sans uppercase hover:scale-105 hover:animate-pulse md:mt-3`}>Heidi Vasterling-Ford</h2>
              </Link>
              <div className="md:hidden pt-10">
                <button
                  ref={ref}
                  className={`pr-2 mr-2 pl-2 p-2 ${inverttext === true ? "text-heidibg" : "text-gray-500"} bg-heidibg md:bg-transparent rounded-md outline-zinc-500 focus:border-zinc-500 focus:border shadow`}
                  onClick={handleClickInside}
                >
                  {navbar ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={`w-6 h-6 ${inverttext === true ? "text-heidibg" : "text-gray-500"}`}
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={`w-6 h-6 ${inverttext === true ? "text-heidibg" : "text-gray-500"}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          <div className="flex -mt-20 md:-mt-10 mx-auto md:mx-0 max-w-6xl md:max-w-xs lg:max-w-md xl:max-w-6xl">
            <div 
              className={`w-full rounded-sm md:block mt-[100px] md:pt-0 md:mt-0 mb-[700px] md:mb-0 bg-heidibg md:bg-transparent shadow md:shadow-none ${
                navbar ? 'block' : 'hidden'
              }`}
            >
              <ul ref={ref} className="flex-wrap md:justify-left space-x-4 space-y-4 md:flex bg-heidibg md:bg-transparent">
              <Link className="md:hidden" href={"/"}>
                <h2 className={`md:hidden text-2xl ${inverttext === true ? "text-heidibg" : "text-gray-500"} text-center align-middle font-sans uppercase hover:scale-105 hover:animate-pulse`}>Heidi Vasterling-Ford</h2>
              </Link>
                <li 
                  className={`text-center font-serif ${inverttext === true ? "text-heidibg" : "text-gray-500"} whitespace-nowrap hover:scale-105`}>
                  <Link href="/paintings/turmeric" onClick={handleClickOutside} >
                    Turmeric Paintings
                  </Link>
                </li>
                <li
                  className={`text-center font-serif ${inverttext === true ? "text-heidibg" : "text-gray-500"} whitespace-nowrap hover:scale-105`}>
                  <Link href="/paintings/abstract" onClick={handleClickOutside} >
                    Abstract Paintings
                  </Link>
                </li>
                <li
                  className={`text-center font-serif ${inverttext === true ? "text-heidibg" : "text-gray-500"} whitespace-nowrap hover:scale-105`}>
                  <Link href="/about" onClick={handleClickOutside} >
                    About
                  </Link>
                </li>
                <li
                  className={`text-center font-serif ${inverttext === true ? "text-heidibg" : "text-gray-500"} whitespace-nowrap hover:scale-105`}>
                  <Link href="/contact" onClick={handleClickOutside} >
                    Contact
                  </Link>
                </li>
                <li
                  className={`text-center font-serif ${inverttext === true ? "text-heidibg" : "text-gray-500"} whitespace-nowrap hover:scale-105`}>
                  <Link href="/design" onClick={handleClickOutside} >
                    Design Portfolio
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
  );
}

function useOnClickOutside(ref, handler) {
  useEffect(
    () => {
      const listener = (event) => {
        if (!ref.current || ref.current.contains(event.target)) {
          return;
        }
        handler(event);
      };
      document.addEventListener("mousedown", listener);
      document.addEventListener("touchstart", listener);
      return () => {
        document.removeEventListener("mousedown", listener);
        document.removeEventListener("touchstart", listener);
      };
    },
    [ref, handler]
  );
}