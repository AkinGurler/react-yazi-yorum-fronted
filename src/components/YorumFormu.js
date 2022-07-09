import React from 'react'

const YorumFormu=(props)=> {

    const comment=props.comment
    const handleCommentSubmit=props.handleCommentSubmit
    const handleOnChange=props.handleOnChange
  return (
    <div>
         <h3>Yorum Yaz</h3>
        <form className="ui form"
        onSubmit={
            handleCommentSubmit
        }
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