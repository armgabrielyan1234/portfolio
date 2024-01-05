import React, { useState } from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Modal from "../modal";
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
                  <span className="font-bold text-7xl text-blue-950">
                    <span className="font-extrabold">{text}</span>
                  </span>
                  <span className="text-6xl text-red-700">
                    <Cursor />
                  </span>
                </h1>
                <h1 className="font-bold m-5 text-4xl text-blue-950">
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
              <div>
                <img
                  src="/media/photo/photo.jpg"
                  className="w-[333px] bg-center bg-cover object-cover  h-[400px] rounded-2xl"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="mt-[100px]">
            <div
              className="relative bg-fixed bg-cover bg-center w-screen h-[400px]"
              style={{ backgroundImage: "url(/media/photo/team.jpg)" }}
            >
              <div className="justify-center flex items-center h-full flex-col">
                <span className="font-bold text-4xl  leading-5 tracking-wider uppercase text-white  ">
                  Its my team
                </span>
                <span className="font-normal text-2xl leading-5 text-gray-200 mt-5">
                  we are a very good team, we are very friendly and can cope
                  with any task
                </span>
              </div>
            </div>
            <div className="mt-[50px] ml-[50px] flex flex-col space-y-20 pb-[50px]">
              <div id="about" className="flex flex-col space-y-16">
                <div className="text text-yellow-200 text-8xl font-extrabold">
                  about.
                </div>
                <div className="mt-5">
                  <div className="flex h-8 items-center space-x-5">
                    <div className="w-5 h-5 bg-blue-950 rounded-full"></div>
                    <div className="text text-blue-950 text-3xl font-semibold ">
                      2018-2020
                    </div>
                  </div>
                  <span className="text text-blue-950 text-3xl ">
                    I knew about programming but didn't think about starting
                    this profession
                  </span>
                </div>
                <div className="mt-5">
                  <div className="flex h-8 items-center space-x-5">
                    <div className="w-5 h-5 bg-blue-950 rounded-full"></div>
                    <div className="text text-blue-950 text-3xl font-semibold ">
                      2020-2022
                    </div>
                  </div>
                  <span className="text text-blue-950 text-3xl ">
                    I became interested in programming and started learning how
                    to make games and started watching YouTube and learning
                    about programming.
                  </span>
                </div>
                <div className="mt-5">
                  <div className="flex h-8 items-center space-x-5">
                    <div className="w-5 h-5 bg-blue-950 rounded-full"></div>
                    <div className="text text-blue-950 text-3xl font-semibold ">
                      2022-2024
                    </div>
                  </div>
                  <span className="text text-blue-950 text-3xl ">
                    Then I took a course in front-end programming at the company
                    ararat it school, where I learned front-end very well and
                    began to write projects
                  </span>
                </div>
              </div>
              <div className="flex flex-col space-y-16 ">
                <div className="text text-yellow-200 text-8xl font-extrabold">
                  work.
                </div>
                <div className="mt-5">
                  <div className="flex  flex-col space-y-20">
                    <div>
                      <div className="flex h-8 items-center space-x-5">
                        <div className="w-5 h-5 bg-blue-950 rounded-full"></div>
                        <div className="text text-blue-950 text-3xl font-semibold ">
                          Html Css
                        </div>
                      </div>
                      <span className="text text-blue-950 text-3xl ">
                        I made 2 projects using html and css, the first is
                        Mcdonalds , the second is nike
                      </span>
                    </div>
                    <div>
                      <div className="flex h-8 items-center space-x-5">
                        <div className="w-5 h-5 bg-blue-950 rounded-full"></div>
                        <div className="text text-blue-950 text-3xl font-semibold ">
                          Java Script
                        </div>
                      </div>
                      <span className="text text-blue-950 text-3xl ">
                        I made a lot of projects using a Java script, for
                        example, use random pictures, made site KinoMall and
                        even made a game with the team
                      </span>
                    </div>
                    <div>
                      <div className="flex h-8 items-center space-x-5">
                        <div className="w-5 h-5 bg-blue-950 rounded-full"></div>
                        <div className="text text-blue-950 text-3xl font-semibold ">
                          React Js
                        </div>
                      </div>
                      <span className="text text-blue-950 text-3xl ">
                        I made a lot of things on React, for example, a
                        calculator, a lot of projects and sites, I made a
                        Password project, I made a movieX site, and because of
                        all the work they did, they gave me a certificate Ararat
                        it center
                      </span>
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
