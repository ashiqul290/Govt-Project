import { FaPhoneAlt, FaSearch } from "react-icons/fa";
import Container from "../Container";
import govtImg from '../../assets/HeaderIMG/hero.png'

export default function Header() {
  return (
    <div className="bg-white shadow">
        <Container>
      <div className=" px-4 py-5 flex justify-between items-center">

        <div className="flex items-center gap-4">

          <img
            src={govtImg}
            className="w-16"
            alt=""
          />

          <div>

            <h1 className="text-3xl font-bold">
              Bangladesh National Organization
            </h1>

            <p className="text-gray-600">
              Service for People, Commitment to Excellence
            </p>

          </div>

        </div>

        <div className="flex items-center gap-10">

          <div className="flex items-center gap-3">

            <div className="bg-gray-200 p-4 rounded-full">
              <FaPhoneAlt />
            </div>

            <div>
              <p className="text-gray-500">Call Us</p>
              <h3 className="font-bold">
                +880 1234-567890
              </h3>
            </div>

          </div>

          <div className="flex">

            <input
              type="text"
              placeholder="Search Here..."
              className="border px-4 py-3 w-72 outline-none border-gray-400 focus:border-green-700"
            />

            <button className="bg-green-700 px-5 text-white">
              <FaSearch />
            </button>

          </div>

        </div>

      </div>

        </Container>


    </div>
  );
}