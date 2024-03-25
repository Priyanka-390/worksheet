import React, { useState } from "react";
import img1 from "../assets/images/img1.png";
import img2 from "../assets/images/img2.png";
import img3 from "../assets/images/img3.png";
import img4 from "../assets/images/img4.png";
import img5 from "../assets/images/img5.png";
import img6 from "../assets/images/img6.png";
import img7 from "../assets/images/img7.png";
import img8 from "../assets/images/img8.png";
import img9 from "../assets/images/img-9.png";
import img10 from "../assets/images/img10.png";
import img11 from "../assets/images/img11.png";
import img12 from "../assets/images/img12.png";
import img13 from "../assets/images/img13.png";
import img14 from "../assets/images/img14.png"


const Work = () => {
    const [tab, settab] = useState("tab1");
  function handletab(tabs) {
    settab(tabs);
  }

  return (
    <div className="min-h-screen bg-black flex justify-center items-center">
      <div className="container max-w-[1320px]  mx-auto px-3">
        <div className="flex-col flex justify-center items-center">
          <h1 className="font-Poppins text-5xl mb-4 text-center border-b-2 border-white font-bold text-white">
            WORKSHEET-2024
          </h1>
          <div className="flex w-full justify-between">
            <p className="rounded-full px-8 text-2xl font-Poppins text-white py-2 border-solid border-white border-[3px]">
              Months
            </p>
            <p className="rounded-full  px-8 text-2xl font-Poppins text-white py-2 border-solid border-white border-[3px]">
              Priyanka-390
            </p>
          </div>
        </div>
        <div className="flex flex-row justify-between pt-4 flex-wrap -mx-3">
          <div className="w-1/5 px-3 p-4  max-h-[550px] overflow-y-scroll border-white border-[2px] rounded-3xl">
            <button onClick={() => handletab("tab1")} className="rounded-full mb-2 w-full font-Poppins px-8 text-2xl text-center text-white py-2 border-solid border-white border-[3px]">
        January
                      </button>
                       <button onClick={() => handletab("tab2")} className="rounded-full mb-2 w-full font-Poppins px-8 text-2xl text-center text-white py-2 border-solid border-white border-[3px]">
       February
                      </button>
                       <button onClick={() => handletab("tab3")} className="rounded-full mb-2 w-full font-Poppins px-8 text-2xl text-center text-white py-2 border-solid border-white border-[3px]">
        March
                      </button>
                       <button onClick={() => handletab("tab4")} className="rounded-full mb-2 w-full font-Poppins px-8 text-2xl text-center text-white py-2 border-solid border-white border-[3px]">
       April
      </button>
          </div>
          <div className="w-4/5 px-3">
                      { tab === "tab1" && <div className="p-4 border-white max-h-[550px] overflow-y-scroll  border-[2px] rounded-3xl">
                          <p className="text-white text-2xl font-poppins pb-3 ">
                              January-Index
                          </p>
                          <div className="flex flex-wrap items-center flex-row -mx-3">
                              <div className="w-2/5 px-3">
                                  <div className="flex">
                                      <p className="text-white pr-1 text-2xl font-poppins pb-3">
                                          1.
                                      </p>
                                      <img
                                          src={img1}
                                          alt="1"
                                          className="w-full max-h-[200px] h-full max-w-[350px]"
                                      />
                                  </div>
                              </div>
                              <div className="w-3/5 px-3">
                                  <div className="flex pb-3 items-center">
                                      <p className="text-white pr-2 font-semibold text-3xl font-poppins ">
                                          DOMPKONG
                                      </p>
                                      <p className="text-white  text-xl font-poppins ">
                                          (Date of submission : 10-1-2024)
                                      </p>
                                  </div>
                                  <div>
                                      <p className="text-white text-xl font-poppins ">
                                          Github-Link :{" "}
                                          <span className="ms-3 border-b-2 border-white hover:text-blue-700">
                                              <a
                                                  href="https://github.com/Priyanka-390/dompkong"
                                                  target="blank"
                                              >
                                                  https://github.com/Priyanka-390/dompkong
                                              </a>
                                          </span>
                                      </p>
                                      <p className="text-white text-xl font-poppins ">
                                          Live-Link :{" "}
                                          <span className="ms-3 border-b-2 border-white hover:text-blue-700">
                                              <a
                                                  href="https://dompkong-ashen.vercel.app/"
                                                  target="blank"
                                              >
                                                  https://github.com/Priyanka-390/dompkong
                                              </a>
                                          </span>
                                      </p>
                                  </div>
                              </div>
                          </div>

                          <div className="flex pt-6 flex-wrap items-center flex-row -mx-3">
                              <div className="w-2/5 px-3">
                                  <div className="flex">
                                      <p className="text-white pr-1 text-2xl font-poppins pb-3">
                                          2.
                                      </p>
                                      <img
                                          src={img2}
                                          alt="2"
                                          className="w-full h-full max-h-[200px] max-w-[350px]"
                                      />
                                  </div>
                              </div>
                              <div className="w-3/5 px-3">
                                  <div className="flex pb-3 items-center">
                                      <p className="text-white pr-2 font-semibold text-3xl font-poppins ">
                                          WUAOCOIN
                                      </p>
                                      <p className="text-white  text-xl font-poppins ">
                                          (Date of submission : 18-1-2024)
                                      </p>
                                  </div>
                                  <div>
                                      <p className="text-white text-xl font-poppins ">
                                          Github-Link :{" "}
                                          <span className="ms-3 border-b-2 border-white hover:text-blue-700">
                                              <a
                                                  href="https://github.com/Priyanka-390/wuaocoin"
                                                  target="blank"
                                              >
                                                  https://github.com/Priyanka-390/wuaocoin
                                              </a>
                                          </span>
                                      </p>
                                      <p className="text-white text-xl font-poppins ">
                                          Live-Link :{" "}
                                          <span className="ms-3 border-b-2 border-white hover:text-blue-700">
                                              <a
                                                  href="https://wuaocoin-ten.vercel.app/"
                                                  target="blank"
                                              >
                                                  https://wuaocoin-ten.vercel.app/
                                              </a>
                                          </span>
                                      </p>
                                  </div>
                              </div>
                          </div>

                          <div className="flex pt-6 flex-wrap items-center flex-row -mx-3">
                              <div className="w-2/5 px-3">
                                  <div className="flex">
                                      <p className="text-white pr-1 text-2xl font-poppins pb-3">
                                          3.
                                      </p>
                                      <img
                                          src={img3}
                                          alt="3"
                                          className="w-full h-full max-h-[200px] max-w-[350px]"
                                      />
                                  </div>
                              </div>
                              <div className="w-3/5 px-3">
                                  <div className="flex pb-3 items-center">
                                      <p className="text-white pr-2 font-semibold text-3xl font-poppins ">
                                          FURNITURE
                                      </p>
                                      <p className="text-white  text-xl font-poppins ">
                                          (Date of submission : 16-1-2024)
                                      </p>
                                  </div>
                                  <div>
                                      <p className="text-white text-xl font-poppins ">
                                          Github-Link :{" "}
                                          <span className="ms-3 border-b-2 border-white hover:text-blue-700">
                                              <a
                                                  href="https://github.com/Priyanka-390/furniture

"
                                                  target="blank"
                                              >
                                                  https://github.com/Priyanka-390/furniture
                                              </a>
                                          </span>
                                      </p>
                                      <p className="text-white text-xl font-poppins ">
                                          Live-Link :{" "}
                                          <span className="ms-3 border-b-2 border-white hover:text-blue-700">
                                              <a
                                                  href="https://furniture-orpin-eight.vercel.app/"
                                                  target="blank"
                                              >
                                                  https://furniture-orpin-eight.vercel.app/
                                              </a>
                                          </span>
                                      </p>
                                  </div>
                              </div>
                          </div>
                          
                          <div className="flex pt-6 flex-wrap items-center flex-row -mx-3">
                              <div className="w-2/5 px-3">
                                  <div className="flex">
                                      <p className="text-white pr-1 text-2xl font-poppins pb-3">
                                          4.
                                      </p>
                                      <img
                                          src={img4}
                                          alt="3"
                                          className="w-full h-full max-h-[200px] max-w-[350px]"
                                      />
                                  </div>
                              </div>
                              <div className="w-3/5 px-3">
                                  <div className="flex pb-3 items-center">
                                      <p className="text-white pr-2 font-semibold text-3xl font-poppins ">
                                          LEMON_WARES
                                      </p>
                                      <p className="text-white  text-xl font-poppins ">
                                          (Date of submission : 25-1-2024)
                                      </p>
                                  </div>
                                  <div>
                                      <p className="text-white text-xl font-poppins ">
                                          Github-Link :{" "}
                                          <span className="ms-3 border-b-2 border-white hover:text-blue-700">
                                              <a
                                                  href="https://github.com/Priyanka-390/landing-page

"
                                                  target="blank"
                                              >
                                                  https://github.com/Priyanka-390/landing-page
                                              </a>
                                          </span>
                                      </p>
                                      <p className="text-white text-xl font-poppins ">
                                          Live-Link :{" "}
                                          <span className="ms-3 border-b-2 border-white hover:text-blue-700">
                                              <a
                                                  href="https://lemonwares-kappa.vercel.app/"
                                                  target="blank"
                                              >
                                                  https://lemonwares-kappa.vercel.app/
                                              </a>
                                          </span>
                                      </p>
                                  </div>
                              </div>
                          </div>
                      </div>}
                      
                      {tab === "tab2" && <div className="p-4 border-white max-h-[550px] overflow-y-scroll  border-[2px] rounded-3xl">
              <p className="text-white text-2xl font-poppins pb-3 ">
                February-Index
              </p>
              <div className="flex flex-wrap items-center flex-row -mx-3">
                <div className="w-2/5 px-3">
                  <div className="flex">
                    <p className="text-white pr-1 text-2xl font-poppins pb-3">
                      1.
                    </p>
                    <img
                      src={img5}
                      alt="1"
                      className="w-full max-h-[200px] h-full max-w-[350px]"
                    />
                  </div>
                </div>
                <div className="w-3/5 px-3">
                  <div className="flex pb-3 items-center">
                    <p className="text-white pr-2 font-semibold text-3xl font-poppins ">
                      EXCLUSIVE-GAMES
                    </p>
                    <p className="text-white  text-xl font-poppins ">
                      (Date of submission : 05-02-2024)
                    </p>
                  </div>
                  <div>
                    <p className="text-white text-xl font-poppins ">
                      Github-Link :{" "}
                      <span className="ms-3 border-b-2 border-white hover:text-blue-700">
                        <a
                          href="https://github.com/Priyanka-390/exclusive"
                          target="blank"
                        >
                          https://github.com/Priyanka-390/exclusive
                        </a>
                      </span>
                    </p>
                    <p className="text-white text-xl font-poppins ">
                      Live-Link :{" "}
                      <span className="ms-3 border-b-2 border-white hover:text-blue-700">
                        <a
                          href="https://exclusive-eight.vercel.app/"
                          target="blank"
                        >
                          https://exclusive-eight.vercel.app/
                        </a>
                      </span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex pt-6 flex-wrap items-center flex-row -mx-3">
                <div className="w-2/5 px-3">
                  <div className="flex">
                    <p className="text-white pr-1 text-2xl font-poppins pb-3">
                      2.
                    </p>
                    <img
                      src={img6}
                      alt="2"
                      className="w-full h-full max-h-[200px] max-w-[350px]"
                    />
                  </div>
                </div>
                <div className="w-3/5 px-3">
                  <div className="flex pb-3 items-center">
                    <p className="text-white pr-2 font-semibold text-3xl font-poppins ">
                      DINO-LFG
                    </p>
                    <p className="text-white  text-xl font-poppins ">
                      (Date of submission : 10-02-2024)
                    </p>
                  </div>
                  <div>
                    <p className="text-white text-xl font-poppins ">
                      Github-Link :{" "}
                      <span className="ms-3 border-b-2 border-white hover:text-blue-700">
                        <a
                          href="https://github.com/Priyanka-390/dino-lfg"
                          target="blank"
                        >
                          https://github.com/Priyanka-390/dino-lfg
                        </a>
                      </span>
                    </p>
                    <p className="text-white text-xl font-poppins ">
                      Live-Link :{" "}
                      <span className="ms-3 border-b-2 border-white hover:text-blue-700">
                        <a
                          href="https://dino-lfg-six.vercel.app/"
                          target="blank"
                        >
                          https://dino-lfg-six.vercel.app/
                        </a>
                      </span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex pt-6 flex-wrap items-center flex-row -mx-3">
                <div className="w-2/5 px-3">
                  <div className="flex">
                    <p className="text-white pr-1 text-2xl font-poppins pb-3">
                      3.
                    </p>
                    <img
                      src={img7}
                      alt="3"
                      className="w-full h-full max-h-[200px] max-w-[350px]"
                    />
                  </div>
                </div>
                <div className="w-3/5 px-3">
                  <div className="flex pb-3 items-center">
                    <p className="text-white pr-2 font-semibold text-3xl font-poppins ">
                      NEX-AI
                    </p>
                    <p className="text-white  text-xl font-poppins ">
                      (Date of submission : 17-02-2024)
                    </p>
                  </div>
                  <div>
                    <p className="text-white text-xl font-poppins ">
                      Github-Link :{" "}
                      <span className="ms-3 border-b-2 border-white hover:text-blue-700">
                        <a
                          href="https://github.com/Priyanka-390/nexa-ai

"
                          target="blank"
                        >
                          https://github.com/Priyanka-390/nexa-ai
                        </a>
                      </span>
                    </p>
                    <p className="text-white text-xl font-poppins ">
                      Live-Link :{" "}
                      <span className="ms-3 border-b-2 border-white hover:text-blue-700">
                        <a
                          href="https://nexa-ai.vercel.app/"
                          target="blank"
                        >
                          https://nexa-ai.vercel.app/
                        </a>
                      </span>
                    </p>
                  </div>
                </div>
                          </div>
                          
            <div className="flex pt-6 flex-wrap items-center flex-row -mx-3">
                <div className="w-2/5 px-3">
                  <div className="flex">
                    <p className="text-white pr-1 text-2xl font-poppins pb-3">
                      4.
                    </p>
                    <img
                      src={img8}
                      alt="3"
                      className="w-full h-full max-h-[200px] max-w-[350px]"
                    />
                  </div>
                </div>
                <div className="w-3/5 px-3">
                  <div className="flex pb-3 items-center">
                    <p className="text-white pr-2 font-semibold text-3xl font-poppins ">
                     CALCULATOR
                    </p>
                    <p className="text-white  text-xl font-poppins ">
                      (Date of submission : 20-02-2024)
                    </p>
                  </div>
                  <div>
                    <p className="text-white text-xl font-poppins ">
                      Github-Link :{" "}
                      <span className="ms-3 border-b-2 border-white hover:text-blue-700">
                        <a
                          href="https://github.com/Priyanka-390/calculator

"
                          target="blank"
                        >
                         https://github.com/Priyanka-390/calculator
                        </a>
                      </span>
                    </p>
                    <p className="text-white text-xl font-poppins ">
                      Live-Link :{" "}
                      <span className="ms-3 border-b-2 border-white hover:text-blue-700">
                        <a
                          href="https://calculator-psi-orcin.vercel.app/"
                          target="blank"
                        >
                          https://calculator-psi-orcin.vercel.app/
                        </a>
                      </span>
                    </p>
                  </div>
                </div>
                          </div>
                          
                          <div className="flex pt-6 flex-wrap items-center flex-row -mx-3">
                <div className="w-2/5 px-3">
                  <div className="flex">
                    <p className="text-white pr-1 text-2xl font-poppins pb-3">
                      5.
                    </p>
                    <img
                      src={img7}
                      alt="3"
                      className="w-full h-full max-h-[200px] max-w-[350px]"
                    />
                  </div>
                </div>
                <div className="w-3/5 px-3">
                  <div className="flex pb-3 items-center">
                    <p className="text-white pr-2 font-semibold text-2xl font-poppins ">
                     BOOTSTRAP_NEX-AI
                    </p>
                    <p className="text-white  text-xl font-poppins ">
                      (Date of submission : 01-03-2024)
                    </p>
                  </div>
                  <div>
                    <p className="text-white text-xl font-poppins ">
                      Github-Link :{" "}
                      <span className="ms-3 border-b-2 border-white hover:text-blue-700">
                        <a
                          href="https://github.com/Priyanka-390/bootstrap-nexai

"
                          target="blank"
                        >
                         https://github.com/Priyanka-390/bootstrap-nexai
                        </a>
                      </span>
                    </p>
                    <p className="text-white text-xl font-poppins ">
                      Live-Link :{" "}
                      <span className="ms-3 border-b-2 border-white hover:text-blue-700">
                        <a
                          href="https://bootstrap-nexai-five.vercel.app/"
                          target="blank"
                        >
                          https://bootstrap-nexai-five.vercel.app/
                        </a>
                      </span>
                    </p>
                  </div>
                </div>
              </div>
                      </div>}
                      
                            {tab === "tab3" && <div className="p-4 border-white max-h-[550px] overflow-y-scroll  border-[2px] rounded-3xl">
              <p className="text-white text-2xl font-poppins pb-3 ">
                March-Index
              </p>
              <div className="flex flex-wrap items-center flex-row -mx-3">
                <div className="w-2/5 px-3">
                  <div className="flex">
                    <p className="text-white pr-1 text-2xl font-poppins pb-3">
                      1.
                    </p>
                    <img
                      src={img9}
                      alt="1"
                      className="w-full max-h-[200px] h-full max-w-[350px]"
                    />
                  </div>
                </div>
                <div className="w-3/5 px-3">
                  <div className="flex pb-3 items-center">
                    <p className="text-white pr-2 font-semibold text-3xl font-poppins ">
                     CLOOP
                    </p>
                    <p className="text-white  text-xl font-poppins ">
                      (Date of submission : 04-03-2024)
                    </p>
                  </div>
                  <div>
                    <p className="text-white text-xl font-poppins ">
                      Github-Link :{" "}
                      <span className="ms-3 border-b-2 border-white hover:text-blue-700">
                        <a
                          href="https://github.com/Priyanka-390/my-project"
                          target="blank"
                        >
                          https://github.com/Priyanka-390/my-project
                        </a>
                      </span>
                    </p>
                    <p className="text-white text-xl font-poppins ">
                      Live-Link :{" "}
                      <span className="ms-3 border-b-2 border-white hover:text-blue-700">
                        <a
                          href="https://relaxed-seahorse-af90d1.netlify.app/"
                          target="blank"
                        >
                          https://relaxed-seahorse-af90d1.netlify.app/
                        </a>
                      </span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex pt-6 flex-wrap items-center flex-row -mx-3">
                <div className="w-2/5 px-3">
                  <div className="flex">
                    <p className="text-white pr-1 text-2xl font-poppins pb-3">
                      2.
                    </p>
                    <img
                      src={img10}
                      alt="2"
                      className="w-full h-full max-h-[200px] max-w-[350px]"
                    />
                  </div>
                </div>
                <div className="w-3/5 px-3">
                  <div className="flex pb-3 items-center">
                    <p className="text-white pr-2 font-semibold text-3xl font-poppins ">
                     LABS_248
                    </p>
                    <p className="text-white  text-xl font-poppins ">
                      (Date of submission : 19-03-2024)
                    </p>
                  </div>
                  <div>
                    <p className="text-white text-xl font-poppins ">
                      Github-Link :{" "}
                      <span className="ms-3 border-b-2 border-white hover:text-blue-700">
                        <a
                          href="https://github.com/Priyanka-390/labs"
                          target="blank"
                        >
                          https://github.com/Priyanka-390/labs
                        </a>
                      </span>
                    </p>
                    <p className="text-white text-xl font-poppins ">
                      Live-Link :{" "}
                      <span className="ms-3 border-b-2 border-white hover:text-blue-700">
                        <a
                          href="https://labs-tan.vercel.app/"
                          target="blank"
                        >https://labs-tan.vercel.app/
                        </a>
                      </span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex pt-6 flex-wrap items-center flex-row -mx-3">
                <div className="w-2/5 px-3">
                  <div className="flex">
                    <p className="text-white pr-1 text-2xl font-poppins pb-3">
                      3.
                    </p>
                    <img
                      src={img11}
                      alt="3"
                      className="w-full h-full max-h-[200px] max-w-[350px]"
                    />
                  </div>
                </div>
                <div className="w-3/5 px-3">
                  <div className="flex pb-3 items-center">
                    <p className="text-white pr-2 font-semibold text-3xl font-poppins ">
                      PRACTICE_nextjs
                    </p>
                    <p className="text-white  text-xl font-poppins ">
                      (Date of submission : 21-03-2024)
                    </p>
                  </div>
                  <div>
                    <p className="text-white text-xl font-poppins ">
                      Github-Link :{" "}
                      <span className="ms-3 border-b-2 border-white hover:text-blue-700">
                        <a
                          href="https://github.com/Priyanka-390/practice
"
                          target="blank"
                        >
                          https://github.com/Priyanka-390/practice
                        </a>
                      </span>
                    </p>
                    <p className="text-white text-xl font-poppins ">
                      Live-Link :{" "}
                      <span className="ms-3 border-b-2 border-white hover:text-blue-700">
                        <a
                          href="https://practice-two-murex.vercel.app/"
                          target="blank"
                        >
                          https://practice-two-murex.vercel.app/

                        </a>
                      </span>
                    </p>
                  </div>
                </div>
                          </div>
                          
            <div className="flex pt-6 flex-wrap items-center flex-row -mx-3">
                <div className="w-2/5 px-3">
                  <div className="flex">
                    <p className="text-white pr-1 text-2xl font-poppins pb-3">
                      4.
                    </p>
                    <img
                      src={img12}
                      alt="3"
                      className="w-full h-full max-h-[200px] max-w-[350px]"
                    />
                  </div>
                </div>
                <div className="w-3/5 px-3">
                  <div className="flex pb-3 items-center">
                    <p className="text-white pr-2 font-semibold text-3xl font-poppins ">
                     SWIPER_SLIDER
                    </p>
                    <p className="text-white  text-xl font-poppins ">
                      (Date of submission : 20-03-2024)
                    </p>
                  </div>
                  <div>
                    <p className="text-white text-xl font-poppins ">
                      Github-Link :{" "}
                      <span className="ms-3 border-b-2 border-white hover:text-blue-700">
                        <a
                          href="https://github.com/Priyanka-390/swiper

"
                          target="blank"
                        >
                         https://github.com/Priyanka-390/swiper
                        </a>
                      </span>
                    </p>
                    <p className="text-white text-xl font-poppins ">
                      Live-Link :{" "}
                      <span className="ms-3 border-b-2 border-white hover:text-blue-700">
                        <a
                          href="https://swiper-pink.vercel.app/"
                          target="blank"
                        >
                          https://swiper-pink.vercel.app/
                        </a>
                      </span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex pt-6 flex-wrap items-center flex-row -mx-3">
                <div className="w-2/5 px-3">
                  <div className="flex">
                    <p className="text-white pr-1 text-2xl font-poppins pb-3">
                      5.
                    </p>
                    <img
                      src={img13}
                      alt="13"
                      className="w-full h-full max-h-[200px] max-w-[350px]"
                    />
                  </div>
                </div>
                <div className="w-3/5 px-3">
                  <div className="flex flex-wrap pb-3 items-center">
                    <p className="text-white pr-2 font-semibold text-3xl font-poppins ">
                     FORM_VALIDATION_IN_REACT
                    </p>
                    <p className="text-white  text-xl font-poppins ">
                      (Date of submission : 26-03-2024)
                    </p>
                  </div>
                  <div>
                    <p className="text-white text-xl font-poppins ">
                      Github-Link :{" "}
                      <span className="ms-3 border-b-2 border-white hover:text-blue-700">
                        <a
                          href="https://github.com/Priyanka-390/form-validation

"
                          target="blank"
                        >
                         https://github.com/Priyanka-390/form-validation
                        </a>
                      </span>
                    </p>
                    <p className="text-white text-xl font-poppins ">
                      Live-Link :{" "}
                      <span className="ms-3 border-b-2 border-white hover:text-blue-700">
                        <a
                          href="https://form-validation-iota-seven.vercel.app/"
                          target="blank"
                        >
                          https://form-validation-iota-seven.vercel.app/
                        </a>
                      </span>
                    </p>
                  </div>
                </div>
              </div>

               <div className="flex pt-6 flex-wrap items-center flex-row -mx-3">
                <div className="w-2/5 px-3">
                  <div className="flex">
                    <p className="text-white pr-1 text-2xl font-poppins pb-3">
                      6.
                    </p>
                    <img
                      src={img14}
                      alt="13"
                      className="w-full h-full max-h-[200px] max-w-[350px]"
                    />
                  </div>
                </div>
                <div className="w-3/5 px-3">
                  <div className="flex flex-wrap pb-3 items-center">
                    <p className="text-white pr-2 font-semibold text-3xl font-poppins ">
                     WORKSHEET
                    </p>
                    <p className="text-white  text-xl font-poppins ">
                      (Date of submission : 26-03-2024)
                    </p>
                  </div>
                  <div>
                    <p className="text-white text-xl font-poppins ">
                      Github-Link :{" "}
                      <span className="ms-3 border-b-2 border-white hover:text-blue-700">
                        <a
                          href="https://github.com/Priyanka-390/form-validation

"
                          target="blank"
                        >
                         https://github.com/Priyanka-390/form-validation
                        </a>
                      </span>
                    </p>
                    <p className="text-white text-xl font-poppins ">
                      Live-Link :{" "}
                      <span className="ms-3 border-b-2 border-white hover:text-blue-700">
                        <a
                          href="https://form-validation-iota-seven.vercel.app/"
                          target="blank"
                        >
                          https://form-validation-iota-seven.vercel.app/
                        </a>
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
