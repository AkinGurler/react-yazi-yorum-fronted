import { api } from "../api"
import axios from "axios"

export const yaziListesiGetir = () => dispatch => {
    api().get("/posts")
        .then(response => {
            dispatch({ type: 'YAZI_LISTESI_GETIR', payload: response.data })
        })
        .catch(() => {
            dispatch({ type: 'HATA_LISTESI_GETIR', payload: "Yazılar listelenirken hata oluştu" })
        })


}

export const yazigetir = (id) => dispatch => {
    axios.all([
        api().get(`/posts/${id}`),
        api().get(`/posts/${id}/comments`)
    ]).then((responses) => {
        const payload = {
            ...responses[0].data,
            yorumlar: responses[1].data
        }
        dispatch({ type: 'YAZI_GETIR', payload })

    }).catch(error => {
        dispatch({
            type: 'YAZI_GETIR_HATA',
            payload: "Yazı Yüklenirken Hata Oluştu."
        })
    })
}

export const yorumEkle = (id, comment) => dispatch => {
    console.log("id", id)
    console.log("comment", comment)
    api().post(`/posts/${id}/comments`, comment)
        .then((response) => {
            dispatch({ type: 'YORUM_EKLE', payload: response.data })
            console.log("apiye ulastı")

        })
        .catch((error) => {
            dispatch({
                type: 'YORUM_EKLE_HATA',
                payload: "Yorum Eklerken Hata Oluştu"
            })
        })

}


export const yaziSil = (id, close, push) => dispatch => {

    api()
        .delete(`/posts/${id}`)
        .then(() => {
            dispatch({ type: 'YAZI_SIL', payload: id })
            close();
            push('/')

        })
        .catch(() => {
            dispatch({
                type: "YAZI_SIL_HATA",
                paylod: "Yazi Silinirken hata oluştu"
            })
        })

}

export const yaziEdit = (id, yazi, push) => dispatch => {

    api().put(`/posts/${id}`, yazi)
        .then((response) => {
            dispatch({
                type: 'YAZI_DUZENLE',
                payload: response.data
            });
            push("/")
            /* push(`/posts/${id}`); */ // işlemden sonra gidilecek yer
        })
        .catch(error => {
            dispatch({
                type: 'YAZI_DUZENLE_HATA',
                payload: ("Baslik ve Yazi içeriği Zorunludur")
            })
        })
}


export const yaziEkle = (yazi, push) => dispatch => {

    api().post("/posts", yazi)
        .then(response => {
            dispatch({
                type: "YAZI_EKLE",
                payload: response.data
            })
            push("/")
        })
        .catch(error => {
            dispatch({
                type: "YAZI_EKLE_HATA",
                payload: "Baslik ve Yazi içeriği Zorunludur"
            }
            )
        })

}