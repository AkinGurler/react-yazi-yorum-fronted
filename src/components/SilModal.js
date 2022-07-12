import React, { useState } from "react"
import { Button, Modal } from 'semantic-ui-react'
import { api } from "../api";

const SilModal=({yazi,push}) =>{
    const [open,setOpen]=useState(false);
    const [hata,setHata]=useState("")
    const show=() => setOpen (true);
    const close=() => setOpen(false);

    const handleDelete=(id)=>{
        api()
        .delete(`/posts/${id}`)
        .then(()=>{
            setHata("")
            close()//modal close
            //push to homepage
            push("/")

        })
        .catch(()=>{
            setHata("Yazi Silinirken hata oluştu")
        })
    }

    return (
    <React.Fragment>
        <Button color="red" onClick={show} > SİL </Button>
        <Modal size="mini" onClose={close} open={open}  >
            <Modal.Header> Yaziyi Sil</Modal.Header>
            <Modal.Content> 
                <p> <b>{yazi.title} </b>
                Baslikli Yaziyi Silmek İstediğinize Emin misiniz ?</p>
                {hata && <p> {hata} </p>}
            </Modal.Content>
            <Modal.Actions>
                <Button negative onClick={close}>İptal Et </Button>
                <Button
                positive
                icon="delete"
                labelPosition="right"
                content="Evet , Sil"
                 onClick={()=>handleDelete(yazi.id)} 
                />
            </Modal.Actions>
        </Modal>

    </React.Fragment>)
}

export default SilModal