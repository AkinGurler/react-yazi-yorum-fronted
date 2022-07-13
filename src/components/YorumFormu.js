import React, { useState } from 'react'

const YORUM_BASLANGIC = {
  display_name: "",
  body: ""
}

const YorumFormu=(props)=> {
  const [comment, setComment] = useState(YORUM_BASLANGIC)

  const handleOnChange = (event) => {
    setComment({ ...comment, [event.target.name]: event.target.value });
  };
   
    const handleCommentSubmit=props.handleCommentSubmit
    
  return (
    <div>
         <h3>Yorum Yaz</h3>
        <form className="ui form"
        onSubmit={(event) => {
          handleCommentSubmit(event, comment);
          setComment(YORUM_BASLANGIC);
        }}
        >
        <div className="ui mini icon input">
             <input 
             name="display_name"
             type="text" placeholder="Adınız" 
             onChange={e=>handleOnChange(e)} 
             value={comment.display_name} />
        </div>
        <textarea 
        name="body"
        placeholder="Yorumunuz" rows="3"
         onChange={e=>handleOnChange(e)}
         value={comment.body} >
           
        </textarea>
        <button className="ui blue button"
        type="submit">
            Yorum Gönder</button>

        </form> 
    </div>
  )
}

export default YorumFormu