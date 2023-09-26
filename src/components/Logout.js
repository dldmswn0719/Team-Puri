import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { logOut } from '../store'
import { signOut } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { firebaseAuth } from '../firebase'
import Modal from '../components/Modal'

function Logout() {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [isModal, setIsModal] = useState(true);

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
                <Modal error="로그아웃 되었습니다." onClose={() => {
                    setIsModal(false);
                    navigate('/');
                }} />
            }
        </>
    )
}

export default Logout