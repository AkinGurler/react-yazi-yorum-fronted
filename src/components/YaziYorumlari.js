import React  from "react";
import YorumListesi from "./YorumListesi";

const YaziYorumlari =(props)=>{
    return <YorumListesi yorumlar={props.yorumlar} />
}

export default YaziYorumlari;