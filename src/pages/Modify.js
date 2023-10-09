import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Modal from '../components/Modal';
import enMessages from "./../locales/en.json";
import krMessages from "./../locales/kr.json";

function Modify() {
    const userState = useSelector(state => state.user.loggedIn);
    const navigate = useNavigate();
    const language = useSelector((state) => state.language);
    const messages = language === "en" ? enMessages : krMessages;

      return (
        <>
          {
            !userState ? <Modal error={messages.modal2} onClose={()=> {navigate('/login')}} /> : ""
          }
        </>
      )
  }

export default Modify