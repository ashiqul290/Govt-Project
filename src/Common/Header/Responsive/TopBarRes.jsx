import { FaClock, FaEnvelope } from "react-icons/fa";
import Container from "../../Container";


export default function TopBarRes() {
  return (
    <div className="bg-green-700 md:hidden  text-white">
        <Container>
      <div className=" py-2 flex justify-between items-center text-sm">

        <div className="flex gap-6">

          <div className="flex items-start sm:items-center text-[10px] 2xl:text-[12px] sm:text-[14px] gap-1 sm:gap-2">
            <FaClock />
            Tuesday, 20 May 2025
          </div>

          <div className="flex sm:items-center text-[10px] 2xl:text-[12px] sm:text-[14px] gap-1 sm:gap-2">
            <FaClock />
            Office Time: 10:00 AM - 5:00 PM
          </div>

        </div>

        <div className="flex items-center gap-6">

          <div className="flex items-center 2xl:text-[12px] sm:text-[14px] text-[10px] gap-2">
            <FaEnvelope />
            info@organization.gov.bd
          </div>

          <select className="bg-transparent text-[10px] outline-none">
            <option className="text-black text-[10px]">English</option>
            <option className="text-black text-[10px]">বাংলা</option>
          </select>

        </div>

      </div>

        </Container>
    </div>
  );
}