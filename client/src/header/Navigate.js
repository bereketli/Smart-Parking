import { Link } from "react-router-dom";

function Navigate(props){

    return(
        <div className="">
         
            <Link className= {`text-white ${props.underline} inline-block uppercase px-2 py-3 hover:text-gray-300 text-sm`} to = {props.link}>
                {props.forward}</Link>

        </div>
    )

}

export default Navigate;