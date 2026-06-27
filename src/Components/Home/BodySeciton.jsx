import React, { useState } from 'react'
import NoticeBoard from './NoticeSeciton'
import Container from '../../Common/Container'
import img1 from '../../assets/Podobi img/StateMinistar.jpeg'
import SrvImg1 from '../../assets/service img/ba9f693305ec4389b07a1828e7af5b45.png'
import SrvImg2 from "../../assets/service img/88b1619b35fc4f1f852a2e4d299e0651.png"
import SrvImg3 from "../../assets/service img/laws.png"
import SrvImg4 from "../../assets/service img/b95181c016f44a689ce1c0be26b983ae.jpg"
import SrvImg5 from "../../assets/service img/5b5cd4c125cb46afa0ba3051d485a1d1.png"
import SrvImg6 from "../../assets/service img/8cca3bd90e044ac69c1b1bff144fbb96.png"
import bodyImgInFooter from '../../assets/BodyIMGIn Footer/footer_top_bg.png'
import InfoCard from './InfoCard'
import BoxCard from './BoxCard'
import { IoIosArrowDown, IoIosArrowUp, IoIosCheckmarkCircle } from 'react-icons/io'
import { FaArrowRightLong } from 'react-icons/fa6'
const BodySeciton = () => {
  const [showAll, setShowAll] = useState(false);


  let ServiceInfo = [
    {

      img: SrvImg1,
      title: "About Us",
      service: [
        "History",
        "Functions",
        "Officials",
        "Companies Under Organization",
      ]
    },
    {

      img: SrvImg2,
      title: "Publications and reports",
      service: [
        "History",
        "Functions",
        "Officials",
        "Companies Under Organization",
      ]
    },
    {

      img: SrvImg3,
      title: "Laws/Policies/Notices",
      service: [
        "History",
        "Functions",
        "Officials",
        "Companies Under Organization",
      ]
    },
    {

      img: SrvImg4,
      title: "Service Commitment (Citizens Charter)",
      service: [
        "History",
        "Functions",
        "Officials",
        "Companies Under Organization",
      ]
    },
    {

      img: SrvImg5,
      title: "GPMS",
      service: [
        "History",
        "Functions",
        "Officials",
        "Companies Under Organization",
      ]
    },
    {

      img: SrvImg6,
      title: "Grievance Redressal Management",
      service: [
        "History",
        "Functions",
        "Officials",
        "Companies Under Organization",
      ]
    },
    {

      img: SrvImg1,
      title: "About Us",
      service: [
        "History",
        "Functions",
        "Officials",
        "Companies Under Organization",
      ]
    },
    {

      img: SrvImg2,
      title: "Publications and reports",
      service: [
        "History",
        "Functions",
        "Officials",
        "Companies Under Organization",
      ]
    },
    {

      img: SrvImg3,
      title: "Laws/Policies/Notices/Office Orders",
      service: [
        "History",
        "Functions",
        "Officials",
        "Companies Under Organization",
      ]
    },
    {

      img: SrvImg4,
      title: "Service Commitment (Citizens Charter)",
      service: [
        "History",
        "Functions",
        "Officials",
        "Companies Under Organization",
      ]
    },
    {

      img: SrvImg5,
      title: "GPMS",
      service: [
        "History",
        "Functions",
        "Officials",
        "Companies Under Organization",
      ]
    },
    {

      img: SrvImg6,
      title: "Grievance Redressal Management",
      service: [
        "History",
        "Functions",
        "Officials",
        "Companies Under Organization",
      ]
    },

  ]


  const visibleServices = showAll
    ? ServiceInfo
    : ServiceInfo.slice(0, 6);



  let info = [
    {
      name: "Mr. Iqbal Hassan Mahmud",
      img: img1,
      title: "Honorable Minister"
    },
    {
      name: "Mr. Iqbal Hassan Mahmud",
      img: img1,
      title: "Honorable Minister"
    },
    {
      name: "Mr. Iqbal Hassan Mahmud",
      img: img1,
      title: "Honorable Minister"
    },
    {
      name: "Mr. Iqbal Hassan Mahmud",
      img: img1,
      title: "Honorable Minister"
    },
    {
      name: "Mr. Iqbal Hassan Mahmud",
      img: img1,
      title: "Honorable Minister"
    },
  ]


  const links = [
    "Cabinet Division",
    "Ministry of Public Administration",
    "Department of Energy and Mineral Resources",
    "Prime Minister's Office",
    "Bangladesh National Portal",
  ];
  return (
    <>

      <Container>

        <div className=" flex justify-between my-5 md:my-15">
          <div className="sm:max-w-[70%] max-w-[65%] ">
            <NoticeBoard />
            <div className=" mt-8">
              <div className=" grid sm:grid-cols-2 gap-6">
                {visibleServices.map((item, index) => (
                  <BoxCard key={index} item={item} />
                ))}
              </div>

              <div className=" flex justify-center mt-10">
                {!showAll && (
                  <button
                    onClick={() => setShowAll(true)}
                    className="  border flex items-center gap-2 sm:px-5 px-2 py-1 sm:py-2 bg-green-700 font-bold sm:text-lg rounded-[10px] cursor-pointer hover:bg-green-600 text-white"
                  >
                    View all services
                    <IoIosArrowDown />
                  </button>
                )}

                {showAll && (
                  <button
                    onClick={() => setShowAll(false)}
                    className=" border flex items-center gap-2 sm:px-5 px-2 py-1 sm:py-2 bg-green-700 font-bold sm:text-lg rounded-[10px] cursor-pointer hover:bg-green-600 text-white"
                  >
                    Show Less
                    <IoIosArrowUp />
                  </button>
                )}

              </div>
            </div>

            {/* Google Map */}

            <div className=' mt-10 border p-9 rounded-xl border-gray-200'>

              <h3 className="text-xl bg-green-700 py-3 pl-2 text-white rounded-[5px] font-bold mb-5">
                Office Location
              </h3>

              <iframe
                title="map"
                className="rounded-lg w-full h-80"
                src="https://www.google.com/maps?q=Dhaka&output=embed"
              ></iframe>

            </div>



          </div>
          <div className=" sm:max-w-[28%] max-w-[33%]">

            <div className=" grid gap-6">

              {
                info.map((item, index) => (
                  <InfoCard key={index} item={item} />
                ))
              }
            </div>

            {/* next */}

            <div className="mt-5">
              <div className="bg-white border border-gray-200 rounded-lg p-4">

                {/* Header */}
                <div className="bg-green-700  rounded  text-white font-semibold sm:text-xl text-[12px] sm:px-4 px-2 py-3">
                  Internal e-services
                </div>

                {/* Links */}
                <div className="mt-4 space-y-3">

                  <a className="flex justify-between items-center border border-gray-300 rounded sm:text-xl text-sm sm:px-4 px-2 py-3 hover:bg-gray-50">
                    <span className='text-[10px] sm:text-xl'>D document</span>
                    <span><FaArrowRightLong className='text-gray-500 sm:text-[16px] '/></span>
                  </a>

                  <a className="flex justify-between items-center border border-gray-300 rounded sm:text-xl text-sm sm:px-4 px-2 py-3 hover:bg-gray-50">
                    <span className='text-[10px] sm:text-xl'>Case Management and Monitoring System</span>
                    <span><FaArrowRightLong className='text-gray-500 text-[10px] sm:text-[16px]'/></span>
                  </a>

                  <a className="flex justify-between items-center border border-gray-300 rounded sm:text-xl text-sm sm:px-4 px-2 py-3 hover:bg-gray-50">
                    <span className='text-[10px] sm:text-xl'>E-GP</span>
                    <span><FaArrowRightLong className='text-gray-500 text-[10px] sm:text-[16px]'/></span>
                  </a>

                </div>

                {/* Button */}
                <button className="w-full mt-4 border border-green-600 rounded sm:text-xl text-sm sm:px-4 px-2 py-3 flex items-center justify-center gap-2 hover:bg-green-50">
                  All
                  <span>›</span>
                </button>

              </div>

              <div className="bg-white border border-gray-200 mt-5 rounded-lg p-4">

                <div className="bg-green-700 text-white font-semibold  rounded sm:text-xl text-[12px]  sm:px-4 px-2 py-3">
                  Important links
                </div>

                <div className="mt-4">

                  {links.map((item, index) => (
                    <div
                      key={index}
                      className="flex gap-2 items-center border-gray-300  sm:px-4 px-2 py-3 border-b last:border-b-0"
                    >
                      <span className="text-green-600 text-xl"><IoIosCheckmarkCircle /></span>
                      <span className='text-[10px] sm:text-xl'>{item}</span>
                    </div>
                  ))}

                </div>

                <button className="w-full mt-4 border border-green-600 rounded py-3">
                  All
                </button>

              </div>
              <div className="bg-white border border-gray-200 rounded-lg sm:text-xl text-sm sm:px-4 px-2 py-3">

                <div className="bg-green-700 text-white font-semibold  rounded sm:text-xl text-sm sm:px-4 px-2 py-3">
                  Emergency contact
                </div>

                <div className="space-y-4 mt-4">

                  <div className="bg-gray-50 sm:text-xl text-sm sm:px-4 px-2 py-3 rounded flex justify-between">
                    <p>Government information and services</p>
                    <span className="text-red-600 md:text-4xl text-xl font-bold">
                      333
                    </span>
                  </div>

                  <div className="bg-gray-50 sm:text-xl text-sm sm:px-4 px-2 py-3 rounded flex justify-between">
                    <p>Emergency services</p>
                    <span className="text-red-600 md:text-4xl text-xl font-bold">
                      999
                    </span>
                  </div>

                  <div className="bg-gray-50 sm:text-xl text-sm sm:px-4 px-2 py-3 rounded flex justify-between">
                    <p>Fire Service Hotline</p>
                    <span className="text-red-600 md:text-4xl text-xl  font-bold">
                      102
                    </span>
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

        <div className=" w-full">
          <img src={bodyImgInFooter} className='w-full' alt="" />
        </div>
      </Container>
    </>
  )
}

export default BodySeciton
