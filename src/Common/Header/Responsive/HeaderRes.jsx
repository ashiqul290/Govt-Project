import { FaPhoneAlt, FaSearch } from "react-icons/fa";
import govtImg from '../../../assets/HeaderIMG/hero.png'
import Container from "../../Container";
import { useState } from "react";
import { IoClose } from "react-icons/io5";

export default function HeaderRes() {
    let [show , setShow] = useState(false)
    let heandleshowSearch = ()=>{
        setShow(!show)
    }

  return (
    <div className="bg-white xl:hidden shadow">
        <Container>
      <div className=" px-1 sm:px-4 relative py-5 flex justify-between items-center">

        <div className="flex items-center gap-3">

          <img
            src={govtImg}
            className="md:w-16 w-7 "
            alt=""
          />

          <div>

            <h1 className="md:text-3xl w-45 2xl:w-65 sm:w-85 md:w-full text-[16px] sm:text-[18px]  font-bold">
              Bangladesh National Organization
            </h1>

            <p className="text-gray-600 w-45 sm:w-65 text-[12px] sm:text-[14px]  ">
              Service for People, Commitment to Excellence
            </p>

          </div>

        </div>

        <div className="flex items-center  gap-3 xl:gap-10">

          <div className="flex items-center sm:gap-3">

            <div className="bg-gray-200  md:p-4 p-2 sm:p-3 rounded-full">
              <FaPhoneAlt className="text-[12px] sm:text-[15px]"/>
            </div>

            <div className="md:w-32">
              <p className="text-gray-500 text-[12px] sm:text-[15px]">Call Us</p>
              <h3 className="font-bold text-[12px] sm:text-[15px]">
                +880 1234-567890
              </h3>
            </div>

          </div>

         <div className=" lg:hidden">
            {
                show ? 
                <button onClick={heandleshowSearch} className=" border px-2 py-2 rounded-full border-gray-100 sm:text-[15px] text-xl bg-gray-200 cursor-pointer sm:px-3"><IoClose /></button>
                : 
                <button onClick={heandleshowSearch} className=" border px-2 py-2 rounded-full sm:px-3 sm:py-3 sm:text-[15px] border-gray-100 bg-gray-200 cursor-pointer"><FaSearch /></button>
            }
               

         </div>
          <div className="lg:flex hidden">

            <input
              type="text"
              placeholder="Search Here..."
              className="border px-4 py-3 w-72 outline-none border-gray-400 focus:border-green-700"
            />

            <button className="bg-green-700 px-5 text-white">
              <FaSearch />
            </button>

          </div>

            {
                show && 
        <div className="flex absolute top-[90%] z-50 left-0 bg-white w-full py-2 border border-gray-200 justify-center">

            <input
              type="text"
              placeholder="Search Here..."
              className="border px-4 py-3 w-72 outline-none border-gray-400 focus:border-green-700"
            />

            <button className="bg-green-700 cursor-pointer px-5 text-white">
              <FaSearch />
            </button>

          </div>
            }
        </div>

      </div>

        </Container>


    </div>
  );
}