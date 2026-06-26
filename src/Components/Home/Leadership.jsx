import {
  FaUserTie,
  FaUser
} from "react-icons/fa";

const directors = [
  {
    name: "Director (Admin)",
    person: "Farhana Akter",
  },
  {
    name: "Director (Finance)",
    person: "Mahbubur Rahman",
  },
  {
    name: "Director (Operations)",
    person: "Tareq Hasan",
  },
];
// const notices = [
//   {
//     icon: <FaBell className="text-red-500" />,
//     title: "Office will remain closed on Eid-ul-Adha",
//     date: "20 May 2025",
//   },
//   {
//     icon: <FaFileAlt className="text-pink-500" />,
//     title: "Invitation for Tender Notice-05/2025",
//     date: "19 May 2025",
//   },
//   {
//     icon: <FaClipboard className="text-blue-500" />,
//     title: "Annual Performance Agreement (APA)",
//     date: "18 May 2025",
//   },
//   {
//     icon: <FaUserTie className="text-green-500" />,
//     title: "Recruitment Notice for Various Posts",
//     date: "17 May 2025",
//   },
//   {
//     icon: <FaCalendarAlt className="text-orange-500" />,
//     title: "National Holiday List 2025",
//     date: "15 May 2025",
//   },
// ];
const others = [
  "Additional Director",
  "Joint Director",
  "Deputy Director",
  "More Officials",
];

export default function Leadership() {
  return (
    <div className="bg-white rounded-lg shadow">

      <div className="bg-gray-100 p-4 rounded-t-lg flex justify-between">

        <h2 className="font-bold text-xl text-blue-900">
          OUR LEADERSHIP
        </h2>

        <button className="border px-3 py-1 rounded text-sm">
          View All
        </button>

      </div>

      <div className="p-5">

        {/* Top Leaders */}

        <div className="grid md:grid-cols-2 gap-5">

          <LeaderCard
            title="State Minister"
            name="Mr. Md. Shahidul Islam"
            designation="State Minister"
          />

          <LeaderCard
            title="Executive Director"
            name="Mr. A. B. M. Karim"
            designation="Executive Director"
          />

        </div>

        {/* Directors */}

        <h3 className="font-bold text-green-700 mt-8 mb-4">
          Directors
        </h3>

        <div className="grid md:grid-cols-3 gap-4">

          {directors.map((item) => (
            <div
              key={item.name}
              className="border rounded-lg p-4 hover:shadow-lg duration-300"
            >

              <div className="flex items-center gap-3">

                <div className="w-16 h-16 rounded-full bg-gray-200 flex justify-center items-center">
                  <FaUserTie size={30} />
                </div>

                <div>

                  <h4 className="font-semibold text-green-700">
                    {item.name}
                  </h4>

                  <p>{item.person}</p>

                </div>

              </div>

            </div>
          ))}

        </div>

        {/* Other Officials */}

        <h3 className="font-bold text-green-700 mt-8 mb-4">
          Other Officials
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

          {others.map((item) => (
            <div
              key={item}
              className="border rounded-lg p-5 text-center hover:bg-green-700 hover:text-white duration-300 cursor-pointer"
            >

              <FaUser
                className="mx-auto mb-3"
                size={28}
              />

              <h4 className="font-semibold">
                {item}
              </h4>

              <button className="text-sm mt-2">
                View Profile
              </button>

            </div>
          ))}

        </div>

      </div>

    </div>
  );
}

function LeaderCard({ title, name, designation }) {
  return (
    <div className="border rounded-lg p-5 hover:shadow-lg duration-300">

      <div className="flex gap-4">

        <div className="w-24 h-24 rounded bg-gray-200 flex items-center justify-center">
          <FaUserTie size={45} />
        </div>

        <div>

          <h4 className="text-green-700 font-bold">
            {title}
          </h4>

          <h3 className="font-bold text-lg">
            {name}
          </h3>

          <p className="text-gray-600">
            {designation}
          </p>

          <p className="text-sm text-gray-500">
            Ministry of XYZ
          </p>

        </div>

      </div>

    </div>
  );
}