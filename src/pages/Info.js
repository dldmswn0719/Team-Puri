import React from "react";
import Nav from '../components/Nav'
import AnimalList from "../components/Info/AnimalList";
import StoreAside from "../components/Store/StoreAside";


function Info() {
  return (
    <>
      <Nav />
      <AnimalList/>
      <StoreAside />
    </>
  );
}

export default Info;
