import React, { useEffect, useState } from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Modal from "../modal";
import Team from "./team";
import About from "./info/about";
import AboutWork from "./info/about-work";
import LatestWork from "./info/latest-work";

export default function Main() {
  const [text] = useTypewriter({
    words: ["I'm a Front-end Developer", "I use React JS"],
    loop: {},
    typeSpeed: 120,
    delaySpeed: 20,
  });

  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY || document.documentElement.scrollTop);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [openModal, setOpenModal] = useState(false);

  return (
    <div>
      {openModal === true ? (
        <div className="absolute">
          <Modal setOpenModal={setOpenModal} />
        </div>
      ) : (
        <div className="mt-[50px]">
          <div className="">
            {scrollPosition > 400 ? (
              <div
                className="contact w-[70px] h-[70px] transition-all rounded-full fixed z-10 sm:top-[503px] sm:left-[1250px] top-[900px] left-[350px] md:top-[800px] md:left-[700px] lg:top-[500px] lg:left-[1200px] animate-contact hover:cursor-pointer animation-delay-1s"
                onClick={(event) => {
                  event.preventDefault();
                  window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                  });
                }}
              >
                <img src="/media/photo/up_icon.png" alt="" />
              </div>
            ) : null}
          </div>
          <div className="flex h-[500px] items-center">
            <div className="flex justify-around items-center w-screen">
              <div className="w-[600px]">
                <h1 className="text m-5">
                  <span className="font-bold text-3xl sm:text-7xl text-blue-950">
                    <span className="font-extrabold">{text}</span>
                  </span>
                  <span className="text-6xl text-red-700">
                    <Cursor />
                  </span>
                </h1>
                <h1 className="font-bold m-5 text-2xl sm:text-4xl text-blue-950">
                  based a Armenia
                </h1>
                <div className="m-5 mt-10">
                  <a
                    href="#_"
                    className="relative px-6 py-3 font-bold text-black group"
                    onClick={() => {
                      setOpenModal(true);
                    }}
                  >
                    <span class="absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-2 -translate-y-2 bg-yellow-200 group-hover:translate-x-0 group-hover:translate-y-0"></span>
                    <span class="absolute inset-0 w-full h-full border-4 border-black"></span>
                    <span class="relative">Contact</span>
                  </a>
                </div>
              </div>
              <div className="mr-5">
                <img
                  src="/media/photo/photo.jpg"
                  className="sm:w-[333px]  bg-center bg-cover object-cover  h-[400px] rounded-2xl"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="mt-[100px]">
            <Team />
            <div className="mt-[50px] ml-[50px] flex flex-col space-y-20 pb-[50px]">
              <About />
              <AboutWork />
              <LatestWork />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
