import logo_image from "../images/smart-park-logo.png"

const Logo = () =>{
    return(
        
        <div className="logo ml-6 flex gap-3"> 
            <div><img className="w-32 h-32 object-cover object-center" src = {logo_image} alt = "logo"></img></div>
            <div className = "text-xl text-center  mt-4"><span className="font-bold text-3xl opacity-90 uppercase">beka & girmish </span> 
                <p className="opacity-60">smartparking</p></div>
        </div>

    )
}
export default Logo