import React, { useState } from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Modal from "../modal";
import Team from "./team";
import About from "./info/about";
import AboutWork from "./info/about-work";
export default function Main() {
  const [text] = useTypewriter({
    words: ["I'm a Front-end Developer", "I use React JS"],
    loop: {},
    typeSpeed: 120,
    delaySpeed: 20,
  });

  const [openModal, setOpenModal] = useState(false);

  return (
    <div>
      {openModal === true ? (
        <div className="absolute">
          <Modal setOpenModal={setOpenModal} />
        </div>
      ) : (
        <div className="mt-[50px]">
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
                    class="relative px-6 py-3 font-bold text-black group"
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
              <div>
                <div className="text text-yellow-200 text-6xl sm:text-8xl font-extrabold">
                  Latest Work
                </div>
                <div className="mt-10">
                  <div className="w-screen flex flex-wrap gap-5">
                    <div className="w-[300px] h-[300px] border-2 border-black rounded-2xl">
                      <img
                        className="w-full h-full object-cover p-2 rounded-2xl"
                        src="https://img.freepik.com/premium-photo/beautiful-coffee_39901-32.jpg"
                        alt=""
                      />
                    </div>
                    <div className="w-[300px] h-[300px] border-2 border-black rounded-2xl">
                      <img
                        className="w-full h-full object-cover p-2 rounded-2xl"
                        src="https://img.freepik.com/premium-photo/beautiful-coffee_39901-32.jpg"
                        alt=""
                      />
                    </div>
                    <div className="w-[300px] h-[300px] border-2 border-black rounded-2xl">
                      <img
                        className="w-full h-full object-cover p-2 rounded-2xl"
                        src="https://img.freepik.com/premium-photo/beautiful-coffee_39901-32.jpg"
                        alt=""
                      />
                    </div>
                    <div className="w-[300px] h-[300px] border-2 border-black rounded-2xl">
                      <img
                        className="w-full h-full object-cover p-2 rounded-2xl"
                        src="https://img.freepik.com/premium-photo/beautiful-coffee_39901-32.jpg"
                        alt=""
                      />
                    </div>
                    <div className="w-[300px] h-[300px] border-2 border-black rounded-2xl">
                      <img
                        className="w-full h-full object-cover p-2 rounded-2xl"
                        src="https://img.freepik.com/premium-photo/beautiful-coffee_39901-32.jpg"
                        alt=""
                      />
                    </div>
                    <div className="w-[300px] h-[300px] border-2 border-black rounded-2xl">
                      <img
                        className="w-full h-full object-cover p-2 rounded-2xl"
                        src="https://img.freepik.com/premium-photo/beautiful-coffee_39901-32.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
