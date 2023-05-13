function Navigate(props){

    return(
        <div className="">
         
            <a className= {`text-white ${props.underline} inline-block uppercase px-2 py-3 hover:text-gray-300 text-sm`} href = "/aait.edu.et">
                {props.forward}</a>

        </div>
    )

}

export default Navigate;