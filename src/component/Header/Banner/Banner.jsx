import React from 'react'

const Banner = () => {
  return (
    <div className='h-[70vh] bg-green-500 flex justify-center items-center mt-10'>
      <div className=''>
        <input className='m-auto w-96 py-3' type="text"/>
       
      </div>
      <div ><button className='py-3 px-6 bg-blue-400 text-white'>Search</button>
      </div>
    </div>
  )
}

export default Banner
