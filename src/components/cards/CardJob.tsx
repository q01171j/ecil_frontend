import React from 'react'

function CardJob() {

    const img = "https://images.unsplash.com/photo-1633409361618-c73427e4e206?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

  return (
    <button className="flex border p-4 rounded-md gap-5">
        <img src={img} alt="" className="w-28 rounded-lg" />
        <div className='w-full flex flex-col justify-between h-full'>
            <h4 className="text-lg font-medium flex">Se necesitan Mozo</h4>
            <ul className="flex gap-2 text-sm text-gray-800">
                <li>El Mezon</li>
                <li className="text-gray-500">/</li>
                <li>El Tambo</li>
            </ul>
            <div className="w-full flex justify-between items-center text-sm">
                <span>hace 2 dias</span>
                <span className='text-base'>S/. 800</span>
            </div>
        </div>
    </button>
  )
}

export default CardJob