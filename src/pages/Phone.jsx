import React, { useEffect, useState } from 'react'
import { useLoaderData, useParams } from 'react-router-dom'
import PhoneCard from '../component/Phones/PhoneCard'

const Phone = () => {
    const[phone,setPhone]=useState([])

    // const params=useParams()
    const {id}=useParams()
    const phones=useLoaderData()
  

    useEffect(()=>{
         const findPhones=phones.find(phone=>phone.id==id)
        setPhone(findPhones)
    },[id,phones])
    
  return (
    <div>
    <PhoneCard phone={phone}></PhoneCard>
    </div>
  )
}

export default Phone
