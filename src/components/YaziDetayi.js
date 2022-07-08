import React, { useEffect, useState } from 'react'
import axios from "axios"

const YaziDetayi=(props)=> {
    const [yaziDetayi,setYaziDetayi] =useState({})
   
    const {id}=props.match.params
    useEffect (()=>{
        axios.get(`https://react-yazi-yorum.herokuapp.com/posts/${id}`)
        .then(response=>{
            setYaziDetayi(response.data)
        })
        .catch(error=>{
            console.log(error)
        })
    })
    

  return (
    <React.Fragment>
        <h2 className="ui header">{yaziDetayi.title}</h2>
        <p>{yaziDetayi.created_at}</p>
        <p>{yaziDetayi.content}</p>
    </React.Fragment>
  )
}

export default YaziDetayi