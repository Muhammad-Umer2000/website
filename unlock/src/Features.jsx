import React from 'react'
import "./index.css";
import {NavLink} from "react-router-dom";
import web from "../src/images/Capture3.PNG";
import '@fortawesome/fontawesome-free/css/all.min.css';
import Common from "./Common";

const Features = () => {
  return (
    <>
     <Common name ="Welcome to Features page"
     imgsrc = {web}
     visit="./contact"
     btname="GET START NOW "/>
    </>
  )
}

export default Features
