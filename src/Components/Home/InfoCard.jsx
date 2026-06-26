import React from 'react'

const InfoCard = ({item}) => {
    // console.log(item.name)
    return (
        <>
            <div className="bg-white rounded-2xl overflow-hidden border border-gray-50 shadow-sm hover:shadow-xl transition">

                <div  className="bg-gradient-to-r from-green-600 to-green-800 p-4">
                    <h3 className="text-white text-lg font-semibold">
                        {item.title}
                    </h3>
                </div>

                <div className="p-5">

                    <div className="relative">
                        <img
                            src={item.img}
                            alt=""
                            className="w-100 h-100 object-cover rounded-xl"
                        />

                       
                    </div>

                    <div className="mt-5 text-center">
                        <h2 className="font-bold text-xl">
                            Mr. Anindya Islam Amit
                        </h2>

                     
                    </div>
                </div>
            </div>
        </>
    )
}

export default InfoCard
