import twitter_icon from "../images/twitter-icon.png"
import facebook_icon from "../images/facebook-icon.png"
import linkedin_icon from "../images/linkedin-icon.png"

const Footer = () =>{
    return (
        <div className = "grid grid-rows-4 text-white bg-blue-500 py-6 px-6">
            <div className = "grid grid-cols-5 row-span-3">
                <div className = "logo-summary col-span-2">

                </div>
                <div className = "know">
                    <ul className = "list-none">
                        <li><a href = "www.google.com">About Us</a></li>
                        <li><a href = "www.google.com">How It Works</a></li>
                        <li><a href = "www.google.com">Press</a></li>
                        <li><a href = "www.google.com">Career</a></li>
                    </ul>

                </div>
                <div className = "address">
                    <ul className = "list-none leading-7">
                        <li className = "font-bold text-2xl ">Find Us Here</li>
                        <li><a href = "www.google.com">Megenanga parking</a></li>
                        <li><a href = "www.google.com">Mexiko parking</a></li>
                        <li><a href = "www.google.com">Arada parking</a></li>
                        <li><a href = "www.google.com">Bole parking</a></li>
                        <li><a href = "www.google.com">Betemengist Parking</a></li>
                        <li><a href = "www.google.com">Akaki parking</a></li>
                        <li><a href = "www.google.com">Yeka parking </a></li>
                    </ul>

                </div>
                
                

            </div>
            <div className = "social-media row-span-1 text-center justify-center">
                <h2 className="font-semibold mb-4">We're Social</h2>
                <div className="flex gap-8 justify-center">
                    <a href = "google.com" className="twitter "> <img className=" hover:h-8 hover:w-8" src = {twitter_icon} alt = "twitter"></img></a>
                    <a href = "google.com" className="facebook"> <img className=" hover:h-8 hover:w-8" src = {facebook_icon} alt = "facebook"></img></a>
                    <a href = "google.com" className="linkedin"> <img className=" hover:h-8 hover:w-8" src = {linkedin_icon} alt = "linkedin"></img></a>
                </div>
            </div>

        </div>

       

    )
}
export default Footer