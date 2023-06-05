import map_smartpark from "../images/map-smartpark.png"
import reserve_prepay from "../images/reserve-prepay.png"
import drive_park from "../images/drive-arrive-park.png"

const Body = () => {
    return (
        <div className = "row-span-3 grid grid-cols-2 bg-gray-100 gap-4 px-4 py-4">
            <div className="px-4 py-4 flex items-center justify-center ">
                <img className = "bg-opacity-50 shadow-xl h-64 w-72 shadow-gray-100" src = {map_smartpark} alt = "illustratio smart-parking-system" ></img>
            </div>
            <div className = "px-8 py-4 items-center">
                <div className = "font-bold text-5xl text-gray-700">
                    <div className="text-blue-500">DISCOVER</div>
                    <div className="ml-6">AMAZING</div>
                    <div>SPACES</div>

                </div>
                <div className = "text-center opacity-50">
                    <p>Find parking anywhere, for now or for later Compare prices & pick the 
                        place that’s best for you</p>

                </div>
              
          
            </div>

            



            <div className = "px-8 py-4 items-center">
                <div className = "font-bold text-5xl text-gray-700">
                    <div className="">RESERVE</div>
                    <div className="ml-6 text-blue-500">PREPAY</div>
                    <div>& SAVE</div>

                </div>
                <div className = "text-center opacity-50">
                    <p>Book a space in just a few easy clicks Save up to 50% off standard 
                        rates</p>

                </div>
              
          
            </div>
            <div className="px-4 py-4">
                <img src = {reserve_prepay} alt = "shows reserve-prepay"></img>
            </div>
            <div className="px-4 py-4">
                <img src = {drive_park} alt = "drive-to-park"></img>
            </div>

            
            <div className = "px-8 py-4 items-center">
                <div className = "font-bold text-5xl text-gray-700">
                    <div className="text-blue-500">DRIVE</div>
                    <div className="ml-6">ARRIVE</div>
                    <div className="text-blue-500">& PARK</div>

                </div>
                <div className = "text-center opacity-50">
                    <p>Enter easily with your mobile parking pass Your space is waiting – pull in and go do your thing</p>

                </div>
              
          
            </div>

        </div>

    )
}
export default Body