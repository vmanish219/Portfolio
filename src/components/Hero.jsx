import React from "react";
import Typewrite from "./Typewrite";


const Hero= ()=>{
    return(
        <div className="hero-section">
        <div className="hero-text">
        <h1>Hi, Iam Manish</h1>
        <Typewrite  string1="Full Stack Developer" string2="MERN Stack" />
        </div>
        </div>
    )
}

export default Hero;