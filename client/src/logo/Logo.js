import logo_image from "../images/smart-park-logo.png"

const Logo = () =>{
    return(
        
        <div className="logo ml-6 flex gap-3"> 
            <div><img className="shadow-xl w-32 h-32 object-cover object-center" src = {logo_image} alt = "logo"></img></div>
            <div className = "text-xl mt-4"><span className="font-bold text-3xl uppercase">beka $ girmish </span> smartparking</div>
        </div>

    )
}
export default Logo