import Typewriter from "typewriter-effect";

const Typewrite=(props)=>{
    return(<Typewriter
            onInit={(typewriter)=>{
                typewriter
                .typeString(props.string )
                .pauseFor(1000)
                .start();
            }}
         />)
}

export default Typewrite;