import Navbar from "./Navbar";
import Navigate from "./Navigate";
import Address from "./Address";
import Mobile from "./Mobile";
import android_app from "../images/app-android.png"
import apple_app from "../images/app-apple.png"

const Header = (props) =>{
    return(
        <div className=' text-white bg-blue-500 row-span-2'> 
            <Navbar/>
            
            <div className = "text-center"><span className="text-4xl font-semibold">PARKING JUST GOT A LOT SIMPLER</span> 
                <div className = "mt-2 text-xl text-center"> Book the Best Spaces & Save Up to 50% </div>  </div>
                <div className = "justify-center font-semibold flex">
                    <Navigate forward = {"Monthly"} underline={"underline"}/>
                    <Navigate forward = {"Yearly"} underline={"underline"}/> 
                </div>
            <div className="flex justify-center w-full">
                <Address/>
            </div>

            <div className = "flex justify-center mt-6 gap-6"> 
                <Mobile image = {apple_app} alt = "apple icon"></Mobile>
                <Mobile image = {android_app} alt = "android icon"> </Mobile>

            </div>
          

            

            
            

        </div>

    )
}
export default Header