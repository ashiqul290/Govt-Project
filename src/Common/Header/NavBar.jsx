import {
  FaHome,
  FaChevronDown
} from "react-icons/fa";
import Container from "../Container";

const menus = [
  "About Us",
  "Branches",
  "Notice",
  "Services",
  "Members",
  "Gallery",
  "Tenders",
  "Contact"
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

          {menus.map((item) => (
            <li
              key={item}
              className="px-6 py-4 hover:bg-green-700 duration-300 cursor-pointer flex items-center gap-2"
            >
              {item}

              {(item === "About Us" || item === "Gallery") && (
                <FaChevronDown size={12} />
              )}

            </li>
          ))}

        </ul>

      </div>
        </Container>

    </nav>
  );
}