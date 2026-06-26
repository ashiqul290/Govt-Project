import React from 'react'

const BoxCard = ({item}) => {
  return (
    <>
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
  <div className="flex items-center gap-4 mb-6">
    <div className="w-14 h-14 rounded-full border border-gray-200 flex items-center justify-center text-white text-xl">
     <img src={item.img} alt="" />
    </div>

    <h2 className="text-3xl font-bold">
     {item.title}
    </h2>
  </div>

  <ul className="space-y-4">
    {
    item.service.map((item) => (
      <li
        key={item}
        className="flex items-center gap-3 hover:text-green-600 cursor-pointer"
      >
        <span className="w-2 h-2 rounded-full bg-green-600"></span>
        {item}
      </li>
    ))}
  </ul>
</div>
    </>
  )
}

export default BoxCard
