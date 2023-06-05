import Logo from "./Logo";
import Navigate from "./Navigate";

const Navbar = (props) =>{
    return (
        <div className="navbar bg-blue-500 text-white flex justify-between">
            <Logo/>
            <div className="navs px-8 mt-6 text-white flex gap-3">
                <Navigate forward = {"home"} link = {"/"} />
                <Navigate forward = {"about us"} link = {"/"}/>
                <Navigate forward = {"sign in"} link = {"/login"}/>
                <Navigate forward = {"sign up "} link = {"/signup"}/>
                <Navigate className = "font-semibold px-8 bg-blue-600 rounded-lg" forward = {"PAY"} link = {"/payment"}/>
            </div>
        </div>
    )
};

export default Navbar;