import React, { useState, useSyncExternalStore } from "react"
import { useHistory } from "react-router-dom";
import { Button, Modal } from 'semantic-ui-react'
import { yaziSil } from "../actions";
import { useSelector, useDispatch } from "react-redux"
import { api } from "../api";

const SilModal=({yazi}) =>{
    const {push}=useHistory();
    
    const hata=useSelector((state)=>state.yaziSilHata);
    const [open,setOpen]=useState(false);
    
    const show=() => setOpen (true);
    const close=() => setOpen(false);
    const dispatch=useDispatch();


    const handleDelete=(id)=>{
        dispatch(yaziSil(id,close,push))
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