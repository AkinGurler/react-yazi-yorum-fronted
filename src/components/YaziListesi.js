
import React,{useEffect, useState} from 'react'
import { api } from '../api'
import {Link} from "react-router-dom"

const  YaziListesi=(props)=> {

    const [yaziListesi,setYaziListesi]=useState([])

    useEffect(() => {
        api().get("/posts")
        .then(response =>
          {
           setYaziListesi(response.data)
          })
      }, [])
    

  return (
    <React.Fragment>
    <div className="ui relaxed divided list">
    {yaziListesi.map(yazi=>{
    return(

          <div  key={yazi.id} className="item">
    <i className="large github middle aligned icon"></i>
    <div className="content">
      <Link to= {`/posts/${yazi.id}`} className="header">{yazi.title}</Link>
      <div className="description">{yazi.created_at}</div>
    </div>
    </div>
        )
        })}
       
       </div>
       <Link className="ui blue button"
       to={`/yaziekle`} > Yazi Ekle
       </Link>
       </React.Fragment>
  )
}

export default YaziListesi