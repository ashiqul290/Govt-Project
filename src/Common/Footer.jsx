import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import Container from "./Container";

export default function Footer() {
  return (
    <footer className="bg-[#052c5b] px-2 xl:px-0 text-white">

      {/* Top */}
    <Container>
      <div className=" py-16 grid lg:grid-cols-4 md:grid-cols-2 gap-10">

        {/* About */}

        <div>

          <h2 className="text-2xl font-bold mb-5">
            Bangladesh Organization
          </h2>

          <p className="text-gray-300 leading-7">
            Government organization committed to providing
            transparent, efficient and citizen-friendly services.
          </p>

          <div className="flex gap-3 mt-6">

            <a className="w-10 h-10 bg-blue-600 rounded-full flex justify-center items-center hover:bg-blue-700">
              <FaFacebookF />
            </a>

            <a className="w-10 h-10 bg-sky-500 rounded-full flex justify-center items-center hover:bg-sky-600">
              <FaTwitter />
            </a>

            <a className="w-10 h-10 bg-red-600 rounded-full flex justify-center items-center hover:bg-red-700">
              <FaYoutube />
            </a>

            <a className="w-10 h-10 bg-blue-700 rounded-full flex justify-center items-center hover:bg-blue-800">
              <FaLinkedinIn />
            </a>

          </div>

        </div>

        {/* Quick Links */}

        <div>

          <h3 className="text-xl font-bold mb-5">
            Quick Links
          </h3>

          <ul className="space-y-3">

            <li className="hover:text-green-400 cursor-pointer">Home</li>
            <li className="hover:text-green-400 cursor-pointer">About</li>
            <li className="hover:text-green-400 cursor-pointer">Services</li>
            <li className="hover:text-green-400 cursor-pointer">Notice</li>
            <li className="hover:text-green-400 cursor-pointer">Gallery</li>
            <li className="hover:text-green-400 cursor-pointer">Contact</li>

          </ul>

        </div>

        {/* Contact */}

        <div>

          <h3 className="text-xl font-bold mb-5">
            Contact
          </h3>

          <div className="space-y-5">

            <div className="flex gap-3">

              <FaMapMarkerAlt className="mt-1 text-green-400" />

              <p>
                Agargaon, Dhaka-1207,
                Bangladesh
              </p>

            </div>

            <div className="flex gap-3">

              <FaPhoneAlt className="mt-1 text-green-400" />

              <p>+8801712345678</p>

            </div>

            <div className="flex gap-3">

              <FaEnvelope className="mt-1 text-green-400" />

              <p>info@gov.bd</p>

            </div>

          </div>

        </div>

        {/* Google Map */}

        <div>

          <h3 className="text-xl font-bold mb-5">
            Office Location
          </h3>

          <iframe
            title="map"
            className="rounded-lg w-full h-60"
            src="https://www.google.com/maps?q=Dhaka&output=embed"
          ></iframe>

        </div>

      </div>

    </Container>

      {/* Bottom */}

      <div className="border-t border-gray-700">

        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row justify-between items-center">

          <p className="text-gray-300">

            © 2025 Bangladesh Organization.
            All Rights Reserved.

          </p>

          <p className="text-gray-400 mt-3 md:mt-0">

            Developed with ❤️ using React & Tailwind CSS

          </p>

        </div>

      </div>

    </footer>
  );
}