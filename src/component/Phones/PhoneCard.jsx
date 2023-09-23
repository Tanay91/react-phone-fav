import React from 'react'
import { json } from 'react-router-dom'
import swal from 'sweetalert'

const PhoneCard = ({phone}) => {
    const{image,id,price,phone_name,brand_name,rating}=phone

    const handleAddToFavorites=()=>{
        const addedFavoritesArray=[]
     const favoriteItems=JSON.parse(localStorage.getItem('favorite'))
     if(!favoriteItems){
        addedFavoritesArray.push(phone)
        localStorage.setItem('favorite', JSON.stringify(addedFavoritesArray))
        swal("Good job!", "You added product", "success");
     }

     else{
        const isExist=favoriteItems.find(phone=>phone.id==id)
        if(!isExist){
            addedFavoritesArray.push(...favoriteItems,phone)
            localStorage.setItem('favorite', JSON.stringify(addedFavoritesArray))
            swal("Good job!", "You added product!", "success");
        }
        else{
            swal("OPPS!", "You already added this product", "error");
        }


       
     }
    }



  return (
    <div className='flex justify-center items-center'>
      <div class="relative flex w-full max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
  <div class="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
    <img
      src={image}
      alt="image"
      class="h-full w-full object-cover"
    />
  </div>
  <div class="p-6">
    <h6 class="mb-4 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-pink-500 antialiased">
      {brand_name}
    </h6>
    <h4 class="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
      {phone_name}
    </h4>
    <p class="mb-8 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
      Like so many organizations these days, Autodesk is a company in
      transition. It was until recently a traditional boxed software company
      selling licenses. Yet its own business model disruption is only part of
      the story
    </p>
    <a class="inline-block" href="#">
      <button onClick={handleAddToFavorites}
        class="flex select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-pink-500 transition-all hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        type="button"
      >
       Add to favorites
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          aria-hidden="true"
          class="h-4 w-4"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
          ></path>
        </svg>
      </button>
    </a>
  </div>
</div>
    </div>
  )
}

export default PhoneCard
