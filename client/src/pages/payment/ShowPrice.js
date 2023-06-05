import Headertable from "../sign in/Headertable";
const ShowPrice = (props) => {
   
    const slots = props.slots;
    const date = new Date()
    const currentSecond = Math.floor(date.getTime() / 1000);
  
    
    function formatDate(time){
        const milliseconds = 1000 * time
        const date = new Date(milliseconds)
        const hours = date.getHours()
        const day = date.getDate()
        const month = date.getMonth() + 1
        const year = date.getFullYear()
          

        const formattedHours = hours.toString().padStart(2, "0");
        const formattedDay = day.toString().padStart(2, "0");
        const formattedMonth = month.toString().padStart(2, "0");
        
            // Construct the formatted string
        const formattedDate = `${formattedHours} - ${formattedDay}/${formattedMonth}/${year}`;
          
            return formattedDate;
          }
    
    return (
      <div className="grid grid-cols-5 shadow-gray-700 shadow-lg rounded-lg mx-8 my-4 px-4 py-4 bg-white text-blue-700 font-semibold">
        <Headertable text = {"Car Plate"}/>
        <Headertable text = {"Slot NO"}/>
        {slots[0].isReserved &&  <Headertable text = {"Reserved Date"}/> }
        {slots[0].occupiedDate && <Headertable text = {"Occupied Date"}/> }
        <Headertable text = {"Fee (ETB)"}/>
        <Headertable text = {""}/>

        <div  className = "shadow-gray-500 shadow-sm rounded-sm">
          {slots.map((slot, idx) => (
            <p key={idx} >
              {slot.carPlate}
            </p>
          ))}
        </div>

        <div  className = "shadow-gray-500 shadow-sm rounded-sm">
          {slots.map((slot, idx) => (
            <p key={idx} >
              {slot.slotNumber}
            </p>
          ))}
        </div>
        
        {slots[0].isReserved &&  <div className = "shadow-gray-500 text-sm shadow-sm rounded-sm">
          {slots.map((slot, idx) => (
            <p key={idx}>{ formatDate(slot.reservedDate._seconds)}</p>
          ))}
        </div> }

        {slots[0].isOccupied  &&  <div className = "shadow-gray-500 text-sm shadow-sm rounded-sm">
          {slots.map((slot, idx) => (
            <p key={idx}>{ formatDate( slot.occupiedDate._seconds)}</p>
          ))}
        </div> }
        
        <div  className = "shadow-gray-500 shadow-sm rounded-sm">
          {slots.map((slot, idx) => (
            <p key={idx}>{ Math.floor( (8/3600) * ( currentSecond - slot.occupiedDate._seconds) ) }  birr</p>
          ))}
        </div>
        <div className="h-full w-full flex">
            <button className="mx-auto px-8  bg-blue-600 text-gray-100 hover:bg-blue-500 hover:text-white rounded-md">PAY</button>
        </div>
        
      </div>
    );
  }
  
  export default ShowPrice;
  