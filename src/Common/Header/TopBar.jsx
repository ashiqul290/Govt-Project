import { FaClock, FaEnvelope } from "react-icons/fa";
import Container from "../Container";

export default function TopBar() {
  return (
    <div className="bg-green-700 text-white">
        <Container>
      <div className=" py-2 flex justify-between items-center text-sm">

        <div className="flex gap-6">

          <div className="flex items-center gap-2">
            <FaClock />
            Tuesday, 20 May 2025
          </div>

          <div className="flex items-center gap-2">
            <FaClock />
            Office Time: 10:00 AM - 5:00 PM
          </div>

        </div>

        <div className="flex items-center gap-6">

          <div className="flex items-center gap-2">
            <FaEnvelope />
            info@organization.gov.bd
          </div>

          <select className="bg-transparent outline-none">
            <option className="text-black">English</option>
            <option className="text-black">বাংলা</option>
          </select>

        </div>

      </div>

        </Container>
    </div>
  );
}