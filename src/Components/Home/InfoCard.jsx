import React from 'react'

const InfoCard = ({item}) => {
    // console.log(item.name)
    return (
        <>
            <div className="bg-white rounded-2xl overflow-hidden border border-gray-50 shadow-sm hover:shadow-xl transition">

                <div  className="bg-gradient-to-r from-green-600 to-green-800 p-1 2xl:p-2 md:p-4">
                    <h3 className="text-white text-sm 2xl:text-[16px] md:text-lg font-semibold">
                        {item.title}
                    </h3>
                </div>

                <div className="md:p-5 p-2">

                    <div className="relative">
                        <img
                            src={item.img}
                            alt=""
                            className="max-w-full mx-auto xl:h-100 xs:h-30 sm:h-50 md:h-70 lg:h-87 object-cover rounded-xl"
                        />

                       
                    </div>

                    <div className="mt-5 text-center">
                        <h2 className="font-bold text-sm md:text-xl">
                            Mr. Anindya Islam Amit
                        </h2>

                     
                    </div>
                </div>
            </div>
        </>
    )
}

export default InfoCard
