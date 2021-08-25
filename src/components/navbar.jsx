import React from "react" ;
import Button from "./Button";

function Navbar(){
    return(
        <div className="header">
        <navbar className="navbar">
            <h1>Manish Verma</h1>
            <div className="links">
                <Button name="Home" url="#" />
                <Button name="About" url="#" />
                <Button name="Project" url="#" />
                <Button name="Contact" url="#" />
            </div>
        </navbar>
        </div>
    )
}

export default Navbar;

