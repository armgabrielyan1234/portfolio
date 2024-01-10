import React, { useEffect, useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/solid";

const Nav = () => {
  let Links = [
    { name: "HOME", link: "/", top: 0 },
    { name: "ABOUT", link: "/", top: 1150 },
    { name: "WORK", link: "/", top: 1850 },
  ];

  let [open, setOpen] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setOpen(window.innerWidth > 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="shadow-md w-full ">
      <div className="md:flex items-center justify-between py-4 md:px-10 px-7">
        <div
          className="font-bold text-2xl cursor-pointer flex items-center
    text-gray-800"
        >
          <span className="text-3xl text-blue-950 mr-1 pt-2">
            Arman Gabrielyan
          </span>
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden z-50"
        >
          <Bars3Icon className="w-10 h-10" />
        </div>

        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-yellow-200 sm:bg-yellow-100 left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-20 " : "-top-full"
          }`}
        >
          {open && (
            <>
              {Links.map((link) => (
                <li
                  key={link.name}
                  className="md:ml-8 text-2xl font-bold md:my-0 my-7"
                  onClick={(event) => {
                    event.preventDefault();
                    window.scrollTo({
                      top: link.top,
                      behavior: "smooth",
                    });
                  }}
                >
                  <a
                    href={link.link}
                    className="text-blue-950 hover:text-gray-400 duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Nav;
