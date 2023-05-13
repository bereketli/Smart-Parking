import Logo  from "./Logo";
import Navigate from "../navs/Navigate";
import Address from "./Address";
const Header = (props) =>{
    return(
        <div className=' text-white bg-blue-500 h-screen'> 
            <div className="navbar mt-6 mr-6 flex justify-between">
            <Logo/>
            <div className="navs flex gap-3">
                <Navigate forward = {"home"} />
                <Navigate forward = {"help"} />
                <Navigate forward = {"sign in"}/>
                <Navigate forward = {"sign up "}/>
            </div>
            </div>
            <div className = "text-center"><span className="text-4xl font-semibold">PARKING JUST GOT A LOT SIMPLER</span> 
                <div className = "mt-2 text-xl text-center"> Book the Best Spaces & Save Up to 50% </div>  </div>
                <div className = "justify-center font-semibold flex">
                    <Navigate forward = {"Monthly"} underline={"underline"}/>
                    <Navigate forward = {"Yearly"} underline={"underline"}/> 
                </div>
            <div className="w-1/2 ">
                <Address/>
            </div>
          

            

            
            

        </div>

    )
}
export default Header