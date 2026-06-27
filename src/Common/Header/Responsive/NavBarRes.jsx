import {
  FaHome,
  FaChevronDown
} from "react-icons/fa";
import Container from "../../Container";
import { FaBarsStaggered } from "react-icons/fa6";
import { useState } from "react";
import { IoClose } from "react-icons/io5";

const menus = [
  {
    id: 1,
    title: "  About us ",
    menu: [
      "Introduction",
      "Vision and ambition",
      "Activities",
      "Organizational structure",
      "Citizen Charter",
      "Subsidiary companies",
      "Contact address"]
  },
  {
    id: 2,
    title: "Official directory ",
    menu: [
      "Board of Directors",
      "Focal Point Officer",
      "List of officials"
    ]
  },
  {
    id: 3,
    title: "BPC's activities ",
    menu: [
      {
        title: "Commerce and Management",
        submenu: ["Introduction and activities",
          "Imported refined petroleum products",
          "Imported crude petroleum products",
          "Exported petroleum products",
          "ERL production information",
          "List of suppliers"]
      },
      {
        title: "Distribution and marketing",
        submenu: ["Petroleum product sales volume",
          "Location of the oil depot",
          "Names of districts under the jurisdiction of the oil depot"]
      },
      {
        title: "Finance and Accounting",
        submenu: ["Volume of petroleum product imports",
          "Import and export related information",
          "BPC budget",
          "Audit report"]
      },
      {
        title: "Planning and development",
        submenu: ["Implemented projects",
          "Ongoing and upcoming projects",
          "Audit",
          "Audit activities"]
      }
    ]
  }
];



export default function NavbarRes() {
    let [show , setShow] = useState(false)

    let handleshowModel = ()=>{
    setShow(!show)
}

  return (
    <nav className="bg-[#052c5b] text-white lg:hidden">
      <Container>

        <div className=" flex justify-between md:justify-start relative items-center">

          <div className="bg-green-700 px-6 py-4">
            <FaHome className=" md:text-2xl sm:text-xl " />
          </div>

          <ul className="md:flex  hidden">

           {menus.map((menuItem) => (
  <li
    key={menuItem.id}
    className="px-6 py-4 group relative hover:bg-green-700 duration-300 cursor-pointer flex items-center gap-2"
  >
    <span className="">{menuItem.title}</span>
    <FaChevronDown size={12} />

    {menuItem.menu && (
      <div className="absolute hidden group-hover:block top-full left-0 min-w-70 bg-white text-gray-700 shadow-lg z-50">
        <ul>
          {menuItem.menu.map((subItem, index) => (
            <li key={index} className="relative group/sub">
              
              {/* String Menu */}
              {typeof subItem === "string" ? (
                <div className="px-4 py-3 hover:bg-green-100 border-b border-gray-200">
                  {subItem}
                </div>
              ) : (
                <>
                  {/* Object Menu */}
                  <div className="px-4 py-3 hover:bg-green-100 border-b border-gray-200 flex justify-between items-center">
                    {subItem.title}
                    <FaChevronDown size={12} />
                  </div>

                  {/* Submenu */}
                  <div className="absolute right-full top-0 hidden group-hover/sub:block min-w-62.5 bg-white shadow-lg ">
                    {subItem.submenu?.map((child, childIndex) => (
                      <div
                        key={childIndex}
                        className="px-4 py-3 hover:bg-green-100 border-b border-gray-200"
                      >
                        {child}
                      </div>
                    ))}
                  </div>
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
    )}
  </li>
))}

          </ul>

          
          <div className=" md:hidden pr-5">
        {
            show ?  <button onClick={handleshowModel} className=" text-2xl sm:text-3xl cursor-pointer">  <IoClose /></button> :  <button onClick={handleshowModel} className=" text-2xl sm:text-3xl cursor-pointer">  <FaBarsStaggered /></button>
        }
        {
            show && 
         <ul className=" absolute z-22 right-0 flex bg-white text-black top-full ">

           {menus.map((menuItem) => (
  <li
    key={menuItem.id}
    className="md:px-6 md:py-4 py-2 px-3 group relative hover:bg-green-700 hover:text-white duration-300 cursor-pointer flex items-center gap-0.5 sm:gap-2"
  >
    <span className=" text-[9px] xs:text-[12px] 2xl:text-[16px] sm:text-[17px]">{menuItem.title}</span>
    <FaChevronDown className="text-[8px] md:text-[12px] sm:text-[15px]" />

    {menuItem.menu && (
      <div className="absolute hidden group-hover:block top-full right-0 md:min-w-60 w-30 xs:w-40 sm:w-60 2xl:w-50 bg-white text-gray-700 shadow-lg z-50">
        <ul>
          {menuItem.menu.map((subItem, index) => (
            <li key={index} className="relative group/sub">
              
              {/* String Menu */}
              {typeof subItem === "string" ? (
                <div className="md:px-4 md:text-[16px] text-[10px] xs:text-[12px] 2xl:text-[14px] sm:text-[16px] px-2 py-1 md:py-3 hover:bg-green-100 border-b border-gray-200">
                  {subItem}
                </div>
              ) : (
                <>
                  {/* Object Menu */}
                  <div className="md:px-4  text-[10px] xs:text-[12px] 2xl:text-[14px] sm:text-[16px] md:text-[16px] px-2 py-1 md:py-3 hover:bg-green-100 border-b border-gray-200 flex gap-2 justify-between items-center">
                    <FaChevronDown size={12} />
                    {subItem.title}
                  </div>

                  {/* Submenu */}
                  <div className="absolute right-full top-0 hidden group-hover/sub:block md:min-w-62.5 w-40 sm:w-60 bg-white shadow-lg ">
                    {subItem.submenu?.map((child, childIndex) => (
                      <div
                        key={childIndex}
                        className="md:px-4 text-[10px] xs:text-[12px] 2xl:text-[14px] sm:text-[16px] px-2 py-2 md:py-3 hover:bg-green-100 border-b border-gray-200"
                      >
                        {child}
                      </div>
                    ))}
                  </div>
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
    )}
  </li>
))}

          </ul>
        }
          </div>

          

        </div>
      </Container>

    </nav>
  );
}