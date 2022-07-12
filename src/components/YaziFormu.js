import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Link } from "react-router-dom"
import { withRouter } from "react-router-dom"
import { api } from '../api'

const YaziFormu = (props) => {
    const [yazi, setYazi] = useState(
        { title: "", content: "" })
    const [hata, setHata] = useState("")

    const onInputChange = (event) => setYazi({
        ...yazi, [event.target.name]: event.target.value
    })

    console.log("Yazi Formu yazi",yazi)
    const onFormSubmit = (event) => {
        event.preventDefault()
        setHata("")

        if(props.yazi?.title){
            api().put(`/posts/${props.match.params.id}`,yazi)
            .then((response=>{
                console.log(response)
                props.history.push(`/posts/${props.match.params.id}`) // işlemden sonra gidilecek yer
            }))
            .catch(error => {
                setHata("Baslik ve Yazi içeriği Zorunludur")
            })
        }else{
            api().post("/posts", yazi)
            .then(response => {
                props.history.push("/")
            })
            .catch(error => {
                setHata("Baslik ve Yazi içeriği Zorunludur")
            })

        }


       
    }

    useEffect(()=>{
        if(props.yazi?.title && props.yazi?.content ) 
            setYazi(props.yazi)

    },[props.yazi])

    return (
        <React.Fragment>
            {hata && (
                <div class="ui error message">
                    <div class="header">Hata</div>
                    <p>{hata} </p>
                </div>

            )}


            <div className="ui form">
                <div className="field">
                    <label>Yazı Basligi</label>
                    <input
                        value={yazi.title}
                        type="text"
                        name="title"
                        onChange={onInputChange} />
                </div>
                <div className="field">
                    <label>Yazi İçeriği</label>
                    <textarea
                        name="content" value={yazi.content}
                        placeholder="Yazı Yazmaya başla"
                        rows="3"
                        onChange={onInputChange}>
                    </textarea>
                </div>
                <button className="ui primary button" onClick={onFormSubmit}>
                    Gönder
                </button>
                <button className="ui button">
                    İptal Et
                </button>
                {/* <Link to="/">Anasayfaya Dön</Link> */}
            </div>
        </React.Fragment>
    )
}

export default withRouter(YaziFormu)