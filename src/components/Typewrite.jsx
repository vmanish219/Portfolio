import Typewriter from "typewriter-effect";

const Typewrite=(props)=>{
    return(<Typewriter
            onInit={(typewriter)=>{
                typewriter
                .typeString(props.string1 )
                .pauseFor(1000)
                .start()
                .deleteAll()
                .typeString(props.string2)
            }}
         />)
}

export default Typewrite;