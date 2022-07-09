import React  from "react";

const YorumListesi = props=>{
    return (
    <React.Fragment>
         <h2>Yorumlar</h2>
        {props.yorumlar.map((yorum)=>{
            return(
                
                <div key={yorum.id} className="ui relaxed list">
                <div className="item">
                  <img className="ui avatar image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-HM2SXYoFDGDMERjCJ3iRwYKfYGJdlMrVog8Zpufs-Am_9GY6Tm8bXFUkbEwS7xzWEhU&usqp=CAU"/>
                  <div className="content">
                    <span className="header">{yorum.display_name} </span>
                    <div className="description">{yorum.body} </div>
                  </div>
                </div>
                
              </div> 
            )
        })}
    </React.Fragment>)
}

export default YorumListesi