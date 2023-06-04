import map_smartpark from "../images/map-smartpark.png"
import reserve_prepay from "../images/reserve-prepay.png"
import drive_park from "../images/drive-arrive-park.png"

const Body = () => {
    return (
        <div className = "row-span-3 grid grid-cols-2 bg-gray-100 gap-4 px-4 py-4">
            <div className="px-4 py-4 flex items-center justify-center ">
                <img className = "bg-opacity-50 shadow-xl h-64 w-72 shadow-gray-100" src = {map_smartpark} alt = "illustratio smart-parking-system" ></img>
            </div>
            <div className="px-4 py-4 flex items-center justify-center">
                <p>DISCOVER
                AMAZING
                SPACES
                Find parking anywhere, for now or for later

                Compare prices & pick the place that’s best for you</p>
            </div>
            <div className="px-4 py-4 flex items-center justify-center">
                <p>DISCOVER
                AMAZING
                SPACES
                Find parking anywhere, for now or for later

                Compare prices & pick the place that’s best for you</p>
            </div>
            <div className="px-4 py-4">
                <img src = {reserve_prepay} alt = "shows reserve-prepay"></img>
            </div>
            <div className="px-4 py-4">
                <img src = {drive_park} alt = "drive-to-park"></img>
            </div>
            <div className="px-4 py-4 text-center">
                <p>DISCOVER
                AMAZING
                SPACES
                Find parking anywhere, for now or for later

                Compare prices & pick the place that’s best for you</p>
            </div>

        </div>

    )
}
export default Body