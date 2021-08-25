import React from "react";
import Typewriter from "typewriter-effect";

const Hero= ()=>{
    return(
        <div className="hero-section">
        <Typewriter
            onInit={(typewriter)=>{
                typewriter
                .typeString("Hi, Iam Manish \n Full Stack Developer" )
                .pauseFor(1000)
                .start();
            }}
         />
        </div>
    )
}

export default Hero;