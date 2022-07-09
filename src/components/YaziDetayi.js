import React, { useEffect, useState } from 'react'
import axios from "axios"
import YaziYorumlari from './YaziYorumlari'
import YorumFormu from './YorumFormu'

const YORUM_BASLANGIC={
    display_name:"",
    body:""
}

const YaziDetayi=(props)=> {
    const {id}=props.match.params
    const [yaziDetayi,setYaziDetayi] =useState({})
    const [yorumlar,setYorumlar]=useState([])
    const [comment,setComment]=useState(YORUM_BASLANGIC)
   
    const handleCommentSubmit=event=>{
        event.preventDefault()
        axios.post(`https://react-yazi-yorum.herokuapp.com/posts/${id}/comments`,
    comment)
    .then((response=>{
        setYorumlar([...yorumlar,response.data])
        setComment(YORUM_BASLANGIC)
    }))
    .catch(error=>{
        console.log(error)
    })
    }
    
    const handleOnChange=event=>{
        setComment({...comment,[event.target.name]:event.target.value})

    }

    useEffect (()=>{
        axios.all([
            axios.get(`https://react-yazi-yorum.herokuapp.com/posts/${id}`),
            axios.get(`https://react-yazi-yorum.herokuapp.com/posts/${id}/comments`)
    ]).then((responses)=>{
        
        setYaziDetayi(responses[0].data)
        setYorumlar(responses[1].data)
    }).catch(error=>{
        console.log(error)
    })
    },[])
    
   
  return (
    <React.Fragment>
        <h2 className="ui header">{yaziDetayi.title}</h2>
        <p>{yaziDetayi.created_at}</p>
        <p>{yaziDetayi.content}</p>
       
       <YaziYorumlari yorumlar={yorumlar} />
       
        <YorumFormu comment={comment} 
        handleCommentSubmit={handleCommentSubmit}
        handleOnChange={handleOnChange} />
        

    </React.Fragment>
  )
}

export default YaziDetayi