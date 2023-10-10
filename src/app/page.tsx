"use client";
import React, { useState } from "react";
// import Modal from 'react-modal';
import {
  Bars3Icon,
  BoltIcon,
  ExclamationTriangleIcon,
  SunIcon,
} from "@heroicons/react/24/outline";
import { ArrowLongLeftIcon, XMarkIcon } from "@heroicons/react/24/solid";
import SideBar from "./components/SideBar";
const HomePage = () => {

  const [onMobile , setOnMobile] = useState(false)

  const handleClick = () =>{
     setOnMobile(!onMobile)
  }
  // const [modalIsOpen, setModalIsOpen] = useState(false);

  // const openModal = () => {
  //   setModalIsOpen(true);
  // };

  // const closeModal = () => {
  //   setModalIsOpen(false);
  // };

  return (
    <>
      <div className={`bg-[#202123] max-w-xs ${onMobile || "hidden"} absolute h-screen overflow-y-auto md:min-w-[20rem] z-50 ${onMobile && "block"}`}>
        <SideBar />
      </div>

      <XMarkIcon onClick={handleClick} className={`h-8 w-8 ${onMobile || "hidden"} absolute top-5 left-72 text-white menu ${onMobile && "block"}`}/>

      <div className="text-white flex flex-col md:items-center md:justify-center h-screen overflow-y-scroll overflow-x-hidden">
        <div>
          <Bars3Icon onClick={handleClick} className="h-10 w-10 inline md:hidden relative top-8 left-8 menu" />
          <div className="flex items-center space-x-3 md:hidden relative left-24">
            <ArrowLongLeftIcon className="h-6 w-6" />
            <p>Open ChatBox</p>
          </div>
          <h1 className="text-5xl text-bold my-20  text-center">ChatGpt</h1>
        </div>

        {/* <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
      >
        <SideBar closeModal={closeModal} />
      </Modal> */}

        <div className="flex space-x-2 text-center flex-col md:flex-row">
          <div className="flex flex-col items-center mb-10">
            <div className="flex flex-col items-center justify-center mb-5">
              {/*Sun Icon*/}
              <SunIcon className="h-8 w-8" />
              <h2>Example</h2>
            </div>
            <div className="space-y-2">
              <p className="infoText">&quot;Explain Something to me&quot;</p>
              <p className="infoText">
                &quot;What is the difference between dog and cat?&quot;
              </p>
              <p className="infoText">
                &quot;What is the color of the sun?&quot;
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center mb-10">
            <div className="flex flex-col items-center justify-center mb-5">
              {/*Sun Icon*/}
              <BoltIcon className="h-8 w-8" />
              <h2>Capabilities</h2>
            </div>
            <div className="space-y-2">
              <p className="infoText">Change the Gpt Model to use</p>
              <p className="infoText">
                Message are store in Firebase&apos;s Firestore
              </p>
              <p className="infoText">
                Hot Toast notification when ChatGpt is thinking!
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center mb-10">
            <div className="flex flex-col items-center justify-center mb-5">
              {/*Sun Icon*/}
              <ExclamationTriangleIcon className="h-8 w-8" />
              <h2>Limitaion</h2>
            </div>
            <div className="space-y-2">
              <p className="infoText">
                May occasionally generate the incorect information
              </p>
              <p className="infoText">
                May occasionally generate Harmful Instrunction or biased content
              </p>
              <p className="infoText">
                Limited Knowledge of world and event after 2021
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
