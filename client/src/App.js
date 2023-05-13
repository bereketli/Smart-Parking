import Navigate from "./navs/Navigate";
import Logo from "./logo/Logo"

function App() {
  return (
    <div className="grid grid-rows-3 gap-2">
      <div className='head text-white bg-blue-500'> 
        <div className="navbar mt-6 mr-6 flex justify-between">
          <Logo/>
          <div className="navs flex gap-3">
            <Navigate forward = {"home"} />
            <Navigate forward = {"help"} />
            <Navigate forward = {"sign in"}/>
            <Navigate forward = {"sign up "}/>
            
          </div>
        </div>
        </div>
      <div className="body row-span-2 bg-white">
        
      </div>
      <div className='footer bg-blue-500 '>
       
        </div>
    </div>

  );
}

export default App;
