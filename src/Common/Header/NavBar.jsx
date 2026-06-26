import {
  FaHome,
  FaChevronDown
} from "react-icons/fa";
import Container from "../Container";

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

export default function Navbar() {
  return (
    <nav className="bg-[#052c5b] text-white">
      <Container>

        <div className=" flex">

          <div className="bg-green-700 px-6 py-4">
            <FaHome size={22} />
          </div>

          <ul className="flex">

           {menus.map((menuItem) => (
  <li
    key={menuItem.id}
    className="px-6 py-4 group relative hover:bg-green-700 duration-300 cursor-pointer flex items-center gap-2"
  >
    <span>{menuItem.title}</span>
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
                  <div className="absolute left-full top-0 hidden group-hover/sub:block min-w-62.5 bg-white shadow-lg ">
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

        </div>
      </Container>

    </nav>
  );
}