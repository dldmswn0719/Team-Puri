import React from "react";
import Nav from '../components/Nav'
import AnimalList from "../components/Info/AnimalList";
import QuickMenu from "../components/Info/QuickMenu";


function Info() {
  return (
    <>
      <Nav />
      <AnimalList/>
      <QuickMenu/>
    </>
  );
}

export default Info;
