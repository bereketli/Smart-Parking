import Logo from "./Logo";
import Header from "./Header";
import Navigate from "./Navigate";

const Navbar = (props) =>{
    return (
        <div className="navbar bg-blue-500 text-white flex justify-between">
            <Logo/>
            <div className="navs flex gap-3">
                <Navigate forward = {"home"} link = {""} />
                <Navigate forward = {"about us"} link = {"aboutus"}/>
                <Navigate forward = {"sign in"} link = {"login"}/>
                <Navigate forward = {"sign up "} link = {"signup"}/>
            </div>
        </div>
    )
};

export default Navbar;