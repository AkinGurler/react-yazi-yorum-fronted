import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Link, useHistory, useParams } from "react-router-dom"
import { withRouter } from "react-router-dom"
import { api } from '../api'
import { useSelector, useDispatch } from "react-redux"
import { yaziEdit, yaziEkle } from '../actions'


const YaziFormu = (props) => {
    const {id}=useParams();
    const {push}=useHistory();
    const [yazi, setYazi] = useState(
        { title: "", content: "" })
    const [hata, setHata] = useState("")
    const dispatch=useDispatch()

    const onInputChange = (event) => setYazi({
        ...yazi, [event.target.name]: event.target.value
    })

    
    const onFormSubmit = (event) => {
        event.preventDefault()
        setHata("")

        if(props.yazi?.title){
            dispatch(yaziEdit(id,yazi,push))
        }else{
            dispatch(yaziEkle(yazi,push))
            /* api().post("/posts", yazi)
            .then(response => {
               push("/")
            })
            .catch(error => {
                setHata("Baslik ve Yazi içeriği Zorunludur")
            }) */

        }


       
    }

    useEffect(()=>{
        if(props.yazi?.title && props.yazi?.content ) 
            setYazi({title:props.yazi.title,
                content:props.yazi.content})

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