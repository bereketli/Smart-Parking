import google_map from "../images/google-map.svg"
const Address = (props) =>{
    return(
        <div className="mt-12 ">
            
            <form className=" ">   
               
                <div class="relative">
                    <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <img  class="w-5 h-5 text-gray-500 dark:text-gray-400" src = {google_map} alt = "google-map"></img>
                    </div>
                    <div className = "flex">
                        <input type="search" id="default-search" class="w-full p-4 pl-10 text-sm text-gray-900 border-0 bg-gray-5" placeholder="Search Address or Place..." ></input>
                        <button type="submit" class="text-white inline-block w-1/2 h-20 right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-700 focus:ring-4 focus:outline-none ">FIND PARKING</button>
                    </div>
                    
                </div>
            </form>

           

        </div>

    )
}
export default Address