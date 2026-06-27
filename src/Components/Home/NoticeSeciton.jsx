import React from 'react'
import { FaCalendarAlt } from 'react-icons/fa';
import { FaArrowRightLong } from 'react-icons/fa6';
import { IoDocumentTextOutline } from 'react-icons/io5';
import { MdArrowForwardIos } from 'react-icons/md';

const NoticeSeciton = () => {
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
  // {
  //   id: 4,
  //   title: "Recruitment Notice for Various Posts",
  //   date: "17 May 2025",
  // },
  // {
  //   id: 5,
  //   title: "National Holiday List 2025",
  //   date: "15 May 2025",
  // },
];
  return (
    <>
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-3 sm:p-6">
  <div className=" flex items-center gap-3 mb-6">
    <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
      <IoDocumentTextOutline  className='text-2xl text-green-600'/>
    </div>
    <h2 className="sm:text-2xl font-bold">
      Notice Board
    </h2>
  </div>

  <div className="space-y-4">
    {notices.map((notice) => (
      <div
        key={notice.id}
        className="group p-4 rounded-xl border border-gray-200 hover:border-green-500 hover:bg-green-50 transition-all"
      >
        <div className=" flex justify-between items-center">
          <div>
            <h3 className="font-medium group-hover:text-green-600 sm:text-[16px] text-[14px]">
              {notice.title}
            </h3>

            <div className=" flex items-center gap-3 mt-2">
              <span className="sm:text-sm text-[10px] text-gray-500 flex  gap-1">
                <FaCalendarAlt className='mt-0.25'/> {notice.date}
              </span>

              <span className="px-3 py-1 text-xs rounded-full bg-red-500 text-white">
                New
              </span>

              <span className="px-3 py-1 text-xs rounded-full bg-amber-100 text-amber-700">
                General
              </span>
            </div>
          </div>

          <span className=" text-sm sm:text-xl group-hover:translate-x-1 transition">
          <MdArrowForwardIos className=' text-gray-700' />
          </span>
        </div>
      </div>
    ))}
  </div>

    <div className=" flex justify-center my-6">
      <button className=' border flex items-center gap-2 sm:px-5 px-2 py-1 sm:py-2 bg-green-700 font-bold sm:text-lg rounded-[10px] cursor-pointer hover:bg-green-600 text-white'>View all notices <FaArrowRightLong /></button>
    </div>

    <div className="  md:flex  items-center justify-between border sm:px-8 px-4 py-4  sm:py-8 rounded-2xl bg-red-50 border-red-100">
     <div className="  sm:flex my-2 sm:my-0 gap-2 items-start">
       <h3 className=' text-red-500 font-bold'>News</h3>
      <p className=' max-w-160'>All depot activities will be closed on July 1, 2026, for the purpose of annual stock verification of the depot.</p>
     </div>
      <button className=' border px-5 py-1 bg-green-700 rounded-[5px] cursor-pointer font-bold text-white'>All</button>
    </div>

</div>
    </>
  )
}

export default NoticeSeciton
