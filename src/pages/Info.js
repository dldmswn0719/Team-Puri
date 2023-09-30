import React from "react";
import Nav from '../components/Nav'
import ScrollUpDown from "../components/Info/ScrollUpDown";
import AnimalList from "../components/Info/AnimalList";



function Info() {
  return (
    <>
    <Nav />
    <AnimalList/>
    <ScrollUpDown/>
    </>
  );
}

export default Info;
