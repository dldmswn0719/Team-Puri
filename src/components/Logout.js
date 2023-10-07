import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logOut } from '../store'
import { signOut } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { firebaseAuth } from '../firebase'
import Modal from '../components/Modal'
import enMessages from './../locales/en.json';
import krMessages from './../locales/kr.json';

function Logout() {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [isModal, setIsModal] = useState(true);
    const language = useSelector(state => state.language);
    const messages = language === 'en' ? enMessages : krMessages;

    signOut(firebaseAuth)
    .then(() => {
        dispatch(logOut());
        sessionStorage.removeItem("users");
    })
    .catch((error) => {
        console.log(error);
    });

    return (
        <>
            {
            isModal &&
                <Modal error={messages.logout1} onClose={() => {setIsModal(false); navigate('/'); }} />
            }
        </>
    )
}

export default Logout