import { useState, Link} from "react"
import axios from "axios"
import Input from "../Input"
import Navbar from "../../header/Navbar"
import { useNavigate } from "react-router-dom";



const Signin = (props) =>{

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [authorized, setAuthorized] = useState(false)
    const [authData, setAuthData] = useState({})
    
    const navigate = useNavigate();

    function handleEmail(event){
        setEmail(event.target.value)

    }
    function handlePassword(event){
        setPassword(event.target.value)
    }

    function authenticateEmployee(event){
        event.preventDefault()
        const authData = {email, password}

        axios.post("http://localhost:5000/login", authData)
        .then(response =>{
            console.log("success")
            console.log(response)
            setAuthorized(true)
            setAuthData(response.data)
        })
        .catch(error =>{
            console.log("error")
            console.log(error)
        })

    }

    if (authorized ){
        navigate("/authenticated", { state: { data: {authData}} });
 
    }

    
    return (
        <div className="bg-blue-500">
            <Navbar/>
            <div >

                <div className = "main-container py-8 container relative flex justify-center min-h-screen max-w-7xl ">
                    <div className="relative mx-auto ring-1 ring-gray-900/5 px-10 py-8 rounded-xl shadow-xl h-full w-full  bg-white max-w-md">

                        <div className="text-center mt-4">
                            <h1 className="text-4xl font-bold">Sign in</h1>
                            <p className="opacity-50 mt-4 text-lg">Sign in below to access your account</p>
                        </div>

                <div className = "mt-6" >
                    <form action="">
                        <Input type = {"text"} id = {"email"} value = {email} onChange = {handleEmail} name = "email" placeholder = {"Email Address"} label = {"Email Address"}></Input>
                        <Input type = {"password"} id = {"password"} value = {password} onChange = {handlePassword} onname = {"password"} placeholder = {"Password"} label = {"Email Address"}></Input>
                        

                    <div className="mt-10">
                            <button onClick={authenticateEmployee} type = "submit" className="w-full px-4 py-4 text-lg font-semibold text-white rounded-lg text-center bg-black 
                            focus:bg-gray-700">Sign in</button>

                        </div>
                        <p className = "pt-6 text-sm text-center text-gray-600">Don't have an account yet?
                            <div className="font-semibold hover:underline hover:text-700 focus:text-800 
                            " to= "signup">sign in.</div></p>

                    </form>
                        </div>
                    </div>
                </div>
            </div>
      

        </div>
        
    )
}

export default Signin

