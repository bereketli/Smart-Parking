import { useState } from "react"
import { useLocation } from "react-router-dom"
import Navigate from "../../header/Navigate"
import History from "./History"
import Logo from "../../header/Logo"
import axios from "axios"

const Authenticated= (props) =>{
    const location = useLocation()
    const {data} = location.state
    const [parkedCars, setParkedCars] = useState(false)
    
    function handleSlots(cars){
        setParkedCars(cars)
       
    }

    function getCars(event){
        axios.get("http://localhost:5000/list/cars")
        .then(response =>{
            

            handleSlots(response.data)
           
        })
        .catch(error =>{
           
        })

    }

    


        return (
            <div className = "bg-blue-500 h-screen">
                    <div className="navbar bg-blue-500 text-white flex justify-between">
                    <Logo/>
                    <div className="navs flex gap-3">
                        <Navigate forward = {"home"} link = {""} />
                        <Navigate forward = {"about us"} link = {"aboutus"}/>
                        <div className="inline-block uppercase px-2 py-3 hover:text-gray-300 text-sm"><button onClick={getCars}>SLOTS</button></div>
                        <Navigate forward = {data.authData.name} />
                       
                    </div>
                </div>
                <div className="text-white">
                    {parkedCars && <History slots ={parkedCars}></History>}
                </div>

            </div>
            
        )
    
}

export default Authenticated

