import React, { useEffect, useState } from 'react';
import { api } from '../api';
import YaziFormu from "./YaziFormu";


const  YaziDuzenle=(props)=> {
  const {id}=props.match.params
  const [yazi,setYazi]=useState({})

  useEffect(()=>{
  api().get(`/posts/${id}`)
  .then (response=>{
    setYazi(response.data)
  })
},[])
 

  return (
    <div>
        <h1>Yazi Düzenleme formu</h1>
        <YaziFormu yazi={yazi} />
    </div>
  )
}

export default YaziDuzenle