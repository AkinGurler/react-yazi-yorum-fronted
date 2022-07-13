import React, { useEffect } from 'react'
import YaziYorumlari from './YaziYorumlari'
import YorumFormu from './YorumFormu'
import { Link, useHistory, useParams } from "react-router-dom"
import SilModal from './SilModal'
import { yazigetir, yorumEkle } from '../actions'
import { useSelector, useDispatch } from "react-redux"



const YaziDetayi = () => {
    const yaziDetayi = useSelector(state => state.yaziDetayi)
    const { id } = useParams();
    const dispatch = useDispatch()

    
    const history = useHistory;


    const handleCommentSubmit = (event,comment) => {
        event.preventDefault()
        dispatch(yorumEkle(id, comment))
    }

   

    
    useEffect(() => {
        dispatch(yazigetir(id))
    }, [])


    return (
        <React.Fragment>
            <h2 className="ui header">{yaziDetayi.title}</h2>
            <p>{yaziDetayi.created_at}</p>
            <div className="ui buttons">
                <Link className="ui blue button"
                    to={`/posts/${yaziDetayi.id}/edit`} > Düzenle
                </Link>
                <SilModal yazi={yaziDetayi}  />
            </div>
            <p>{yaziDetayi.content}</p>

            <YaziYorumlari yorumlar={yaziDetayi.yorumlar} />

            <YorumFormu 
                handleCommentSubmit={handleCommentSubmit}
                />


        </React.Fragment>
    )
}

export default YaziDetayi