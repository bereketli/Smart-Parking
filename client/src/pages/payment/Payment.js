import { useState } from "react"
import axios from "axios"
import Logo from "../../header/Logo"
import Navigate from "../../header/Navigate"
import Input from "../Input"
import ShowPrice from "./ShowPrice"
import Search_icon from "../../images/search-icon.png"

const Payment = (props) =>{
    const [carPlate, setCarplate] = useState("")
    const [carData, setCarData] = useState("")
    const [carFound, setCarFound] = useState(false)

    function handleCarPlate(event){
        setCarplate(event.target.value)
    }

    function showPayment(event){
        event.preventDefault()
     
        axios.post("http://localhost:5000/showpayment",{carPlate})
        .then(response =>{
            setCarData(response.data)
            setCarFound(true)
            console.log(response)
        })
        .catch(erro =>{
            console.log(erro)
        })
    }
    
    return (
        <div className = "bg-blue-500 h-screen">
            <div className="navbar bg-blue-500 text-white flex justify-between">
                <Logo/>
                <div className="navs px-8 mt-6 text-white flex gap-3">
                    <Navigate forward = {"home"} link = {"/"} />
                    <Navigate forward = {"about us"} link = {"/"}/>
                    <Navigate forward = {"sign in"} link = {"/login"}/>
                    <Navigate forward = {"sign up "} link = {"/signup"}/>

                </div>
            </div>
            <div className="flex justify-center w-full">
                <div className="mt-12 w-1/2 ">
                
                <form className=" ">   
                
                    <div className="relative ">
            
                        <div className = "flex">
                            <input type="text" value = {carPlate} onChange = {handleCarPlate} className="w-full p-4 pl-10 text-sm text-gray-900  rounded-md shadow-2xl border-0 bg-gray-5" placeholder="Search Your car, Car Plate" ></input>
                            <button onClick={showPayment} className="text-white w-1/2  h-20 rounded-md shadow-2xl right-2.5 bottom-2.5
                            bg-blue-600 hover:bg-blue-700 flex items-center justify-center gap-2 focus:ring-2  focus:outline-none ">
                                <div >Show Price</div> <div ><img className="w-6 h-6 " src = {Search_icon} alt = "search_icon"/></div>
                            </button>
                        </div>
                        
                    </div>
                </form>

                </div>
                
            </div> 
            {carFound && <ShowPrice slots = {[carData]}/>}

        </div>
       
    )
}
export default Payment