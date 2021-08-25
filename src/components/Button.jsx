import React from "react" ;

const Button = (props) =>{
    return(
        <a href={props.url}>{props.name}</a>
    )
}

export default Button;