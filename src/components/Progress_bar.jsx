const Progress_bar=(props)=>{
    return(
        <div>
            {/* <label for={props.label}>{props.label}</label> */}
            <p>{props.label} {props.value}%</p>
            <progress className="progress" id={props.label} max="100" value={props.value}> {props.value} </progress>
        </div>
    )
}
  
export default Progress_bar;