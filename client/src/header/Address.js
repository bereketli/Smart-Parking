import {useState} from "react"
import axios from "axios"
import google_map from "../images/google-map.svg"
import Search_icon from "../images/search-icon.png"

const Address = (props) =>{
   
const [occupiedSlot, occupiedSlotHandler] = useState({})

function showSlot(event){
    event.preventDefault()

   axios.get("http://localhost:5000/list/cars")
   .then(response => {
    occupiedSlotHandler(response.data)
   })
   .catch(error => {
    console.log(error)
   })
    

}
    return(
        <div className="mt-12 w-1/2 ">
            
            <form className=" ">   
               
                <div className="relative ">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <img  className="w-5 h-5 text-gray-500 dark:text-gray-400" src = {google_map} alt = "google-map"></img>
                    </div>
                    <div className = "flex">
                        <input type="search" id="default-search" className="w-full p-4 pl-10 text-sm text-gray-900  rounded-md shadow-2xl border-0 bg-gray-5" placeholder="Search Address or Place..." ></input>
                        <button onClick={showSlot} className="text-white w-1/2  h-20 rounded-md shadow-2xl right-2.5 bottom-2.5
                         bg-blue-600 hover:bg-blue-700 flex items-center justify-center gap-2 focus:ring-2  focus:outline-none ">
                            <div >FIND PARKING</div> <div ><img className="w-6 h-6 " src = {Search_icon} alt = "search_icon"/></div>
                        </button>
                    </div>
                    
                </div>
            </form>

           

        </div>

    )
}
export default Address