import { FaBell } from "react-icons/fa";
import { Link } from "react-router";
import Container from "../../Common/Container";

const notices = [
  {
    id: 1,
    title: "Office will remain closed on Eid-ul-Adha",
    date: "20 May 2025",
  },
  {
    id: 2,
    title: "Invitation for Tender Notice-05/2025",
    date: "19 May 2025",
  },
  {
    id: 3,
    title: "Annual Performance Agreement (APA)",
    date: "18 May 2025",
  },
  {
    id: 4,
    title: "Recruitment Notice for Various Posts",
    date: "17 May 2025",
  },
  {
    id: 5,
    title: "National Holiday List 2025",
    date: "15 May 2025",
  },
];

export default function NoticeTicker() {
  return (
    <Container>

    <div className="bg-white rounded-lg mt-4 overflow-hidden">
      <div className="flex items-center">
        {/* Left Label */}
        <div className="bg-red-600 text-white px-2 py-2 sm:px-5 sm:py-3 flex items-center gap-2 font-semibold shrink-0">
          <FaBell className="animate-pulse" />
          <span>Latest News</span>
        </div>

        {/* Right Sliding Notices */}
        <div className="relative flex-1 overflow-hidden">
          <div className="ticker-track">
            {[...notices, ...notices].map((notice, index) => (
              <Link
                href={`/notice/${notice.id}`}
                key={index}
                className="inline-flex items-center gap-2 sm:mx-8 mx-3 text-gray-700 hover:text-red-600 transition"
              >
                <span>📢</span>
                <span className="text-[14px] sm:text-[16px]">{notice.title}</span>
                <span className="text-red-500 text-[10px] sm:text-sm">
                  ({notice.date})
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
    </Container>
  );
}