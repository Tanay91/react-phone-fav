import React, { useEffect, useState } from 'react'
import PhoneCard from '../../Phones/PhoneCard'

const Favorite = () => {
    const [favorites,setFavorites]=useState([])
    const [noFound,setNoFound]=useState("")
    const [isShow, setIsShow]=useState(false)
    const [totalPrice, setTotalPrice]=useState(0)
    useEffect(()=>{
        const favoriteItems=JSON.parse(localStorage.getItem('favorite'))
        if(favoriteItems){
            setFavorites(favoriteItems)
           const total=favoriteItems.reduce((preValue,currentItems)=>preValue+currentItems.price,0)
            setTotalPrice(total)
        }else{
             setNoFound('No data found')
        }
       
    },[])


const handleRemove=()=>{
    localStorage.clear()
    setFavorites([])
    setNoFound('All Cleared')
}
  return (
    <div>
      {
        noFound? <p className='h-[80vh] flex justify-center items-center'>{noFound}</p> : 
        <div>
            <p>Total Cost:{totalPrice}</p>
            {favorites.length>0 && <button onClick={handleRemove} className='px-5 bg-blue-500 block mx-auto'>Delete All Favorite</button>}
            <div className='grid grid-cols-2 gap-6'>
                {
                    isShow?favorites.map(phone=> <PhoneCard key={phone.key} phone={phone}></PhoneCard>) :
                    favorites.slice(0,3).map(phone=> <PhoneCard key={phone.key} phone={phone}></PhoneCard>)
                }
            </div>
            {
                favorites.length>2 && <button onClick={()=>setIsShow(!isShow)} className='px-5 bg-blue-500 block mx-auto'>See More </button>
            }
        </div>
      }
      
    </div>
  )
}

export default Favorite
