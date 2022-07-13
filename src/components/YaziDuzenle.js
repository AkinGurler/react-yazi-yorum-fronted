import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { yaziEdit, yazigetir } from '../actions';
import { api } from '../api';
import YaziFormu from "./YaziFormu";


const  YaziDuzenle=(props)=> {
  const {id}=useParams()
  const yazi=useSelector(state=>state.YaziDetayi)

/*   useEffect(()=>{
  yazigetir(id)
},[]) */
 

  return (
    <div>
        <h1>Yazi Düzenleme formu</h1>
        <YaziFormu yazi={yazi} />
    </div>
  )
}

export default YaziDuzenle