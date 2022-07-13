import { act } from "react-dom/test-utils";

const INITIAL_STATE ={
    yaziListesi:[],
    yaziListesiHata:" ",
    yaziDetayi:{id :'',title:"" ,created_at : "", yorumlar:[]},
    yaziDetayiHata : "",
    yorumEkleHata:"",
    yaziSilHata:"",
    yaziDuzenleHata:"",
    yaziEkleHata:""
}

export const reducer = (state=INITIAL_STATE, action)=>{
    switch(action.type) {
        case 'YAZI_LISTESI_GETIR' :
            return {...state,yaziListesi:action.payload,yaziListesiHata:""}
        case  'HATA_LISTESI_GETIR':
            return {...state,yaziListesiHata:action.payload}
        case 'YAZI_GETIR':
            return {...state,yaziDetayi:action.payload,yaziDetayiHata:""} 
        case 'YAZI_GETIR_HATA' :
            return {...state,yaziDetayiHata:action.payload}
        case 'YORUM_EKLE':
            return {...state,
                yaziDetayi:{...state.yaziDetayi ,
                yorumlar:[...state.yaziDetayi.yorumlar,action.payload]},
                yorumEkleHata:""}
        case 'YORUM_EKLE_HATA':
            return {...state,yorumEkleHata:action.payload}
        case 'YAZI_SIL':
            return {...state,
                yaziListesi:state.yaziListesi.filter
                ((yazi)=>yazi.id !==action.payload)}
        case "YAZI_SIL_HATA":
            return {...state,
                yaziSilHata:action.payload}
        case 'YAZI_DUZENLE':
            return{...state,yaziDetayi:[...state.yaziDetayi,
            ...action.payload],yaziDuzenleHata:""}
        case 'YAZI_DUZENLE_HATA':
            return{...state,yaziDuzenleHata:action.payload}
        case "YAZI_EKLE":
            return{...state,yaziListesi:[...state.yaziListesi
            ,action.payload],yaziEkleHata:""}
        case "YAZI_EKLE_HATA":
            return {...state,yaziEkleHata:action.payload}
        default:
            return state;
    }
    
}