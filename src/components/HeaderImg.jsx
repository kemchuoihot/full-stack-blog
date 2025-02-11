import React from 'react'

const HeaderImg = () => {
  return (
    <div className='h-60 overflow-hidden w-full hidden md:block'>
        <img className='w-full' src="https://cdnx.jumpseller.com/artigosreligiosos/image/32024845/resize/1300/480?1676580138" alt="PX" />
        <div className="absolute top-10 pl-10">
            <img className='w-10 md:w-1/4 mb-3' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJfpfvwMtpIbQd8mfYcmXdORVsB0ICQOMkAw&s" alt="logo" />
            <h1 className='text-white text-lg font-bold hidden md:block'>“Đối với tôi, sống là Đức Ki-tô”. (Phil 1,21)
            </h1>
        </div>
    </div>
  )
}

export default HeaderImg