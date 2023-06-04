import Headertable from "./Headertable";
const History = (props) => {
    const slots = props.slots;
    const date = new Date()
    const currentSecond = Math.floor(date.getTime() / 1000);
    console.log(slots);
    
    function formatDate(time){
        const milliseconds = 1000 * time
        const date = new Date(milliseconds)
        const seconds = date.getSeconds()
        const minutes = date.getMinutes()
        const hours = date.getHours()
        const day = date.getDate()
        const month = date.getMonth() + 1
        const year = date.getFullYear()
          
            // Pad single digits with leading zeros
        const formattedSeconds = seconds.toString().padStart(2, "0");
        const formattedMinutes = minutes.toString().padStart(2, "0");
        const formattedHours = hours.toString().padStart(2, "0");
        const formattedDay = day.toString().padStart(2, "0");
        const formattedMonth = month.toString().padStart(2, "0");
        
            // Construct the formatted string
        const formattedDate = `${formattedHours} - ${formattedDay}/${formattedMonth}/${year}`;
          
            return formattedDate;
          }
    
    return (
      <div className="grid grid-cols-7 shadow-gray-700 shadow-lg rounded-lg mx-8 my-4 px-4 py-4 bg-white text-blue-700 font-semibold">
        <Headertable text = {"Slot NO"}/>
        <Headertable text = {"Car Plate"}/>
        <Headertable text = {"Reserved"}/>
        <Headertable text = {"Occupied"}/>
        <Headertable text = {"Reserved Date"}/>
        <Headertable text = {"Occupied Date"}/>
        <Headertable text = {"Fee (ETB)"}/>

        <div  className = "shadow-gray-500 shadow-sm rounded-sm">
          {slots.map((slot, idx) => (
            <p key={idx} >
              {slot.slotNumber}
            </p>
          ))}
        </div>
        <div  className = "shadow-gray-500 shadow-sm rounded-sm">
          {slots.map((slot, idx) => (
            <p key={idx} >
              {slot.carPlate}
            </p>
          ))}
        </div>
        <div  className = "shadow-gray-500 shadow-sm rounded-sm">
          {slots.map((slot, idx) => (
            <p key={idx}>{slot.isReserved.toString()}</p>
          ))}
        </div>
        <div  className = "shadow-gray-500 shadow-sm rounded-sm">
          {slots.map((slot, idx) => (
            <p key={idx}>{slot.isOccupied.toString()}</p>
          ))}
        </div>
        <div  className = "shadow-gray-500 text-sm shadow-sm rounded-sm">
          {slots.map((slot, idx) => (
            <p key={idx}>{ formatDate(slot.reservedDate._seconds)}</p>
          ))}
        </div>
        <div  className = "shadow-gray-500 text-sm shadow-sm rounded-sm">
          {slots.map((slot, idx) => (
            <p key={idx}>{ formatDate( slot.occupiedDate._seconds)}</p>
          ))}
        </div>
        <div  className = "shadow-gray-500 shadow-sm rounded-sm">
          {slots.map((slot, idx) => (
            <p key={idx}>{ Math.floor( (5/3600) * ( currentSecond - slot.occupiedDate._seconds) ) }  birr</p>
          ))}
        </div>
        
      </div>
    );
  }
  
  export default History;
  