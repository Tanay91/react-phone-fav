import React from 'react'
import PhonesCard from './PhonesCard'

const Phones = ({phones}) => {
   
    
  return (
    <div>
      <h2 className='text-4xl font-bold text-center mt-10'>All Category Phones</h2>
      <div className='grid grid-cols-3 gap-6 mt-10'>
      {
        phones?.map(phone=> <PhonesCard key={phone.id} phone={phone}></PhonesCard>)
      }
      </div>
    </div>
  )
}

export default Phones
