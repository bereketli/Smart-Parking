const Input = (props) =>{
    return(
        
        <div className = "relative mt-8">
            <input type={props.type} id = {props.id} value = {props.value} onChange={props.onChange} name = {props.name} placeholder={props.placeholder}
            className = "input peer" autocomplete="NA" />
            
            <label className = "input-label transition-all" >{props.label}</label>

    </div>
    )
}

export default Input