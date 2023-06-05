import {useState} from "react"
import Input from "../Input"
import Navbar from "../../header/Navbar"
import axios from "axios"

const SignUp = (props) =>{
   const [name, setName] = useState("")
   const [fatherName, setFatherName] = useState("")
   const [address, setAddress] = useState("")
   const [phoneNumber, setPhoneNumber] = useState("")
   const [email, setEmail] = useState("")
   const [password, setPassword] = useState("")
   const [validatePassword, setValidatePassword] = useState("")

   function handleName(event){
    setName(event.target.value)
   }
   function handleFatherName(event){
    setFatherName(event.target.value)
   }
   function handleAddress(event){
    setAddress(event.target.value)
   }
   function handlePhoneNumber(event){
    setPhoneNumber(event.target.value)
   }
   function handleEmail(event){
    setEmail(event.target.value)
   }
   function handlePassword(event){
    setPassword(event.target.value)
   }
   function handleValidatPasswored(event){
    setValidatePassword(event.target.value)

   }

   function formCleaner(){
    setName("")
    setFatherName("")
    setAddress("")
    setPhoneNumber("")
    setEmail("")
    setEmail("")
    setPassword("")
    setValidatePassword("")
   }


   function registerEmployee(event){
    event.preventDefault()
    const employeeData = {
        name, fatherName, address, phoneNumber, email, password, validatePassword   
    }

    axios.post("http://localhost:5000/reg/employee", employeeData)
    .then(response =>{
        formCleaner()
    })
    .catch(error => {
        console.log("error")
        if (error.response){
            console.log(error.response.data)
        }
        
    })


   }




    return (
        <div className="bg-blue-500">
            <Navbar/>
            <div >
                <div className = "main-container py-8 container relative flex justify-center min-h-screen max-w-7xl ">
                    <div className="relative mx-auto ring-1 ring-gray-900/5 px-10 py-8 rounded-xl shadow-xl h-full w-full  bg-white max-w-md">

                        <div className="text-center mt-4">
                            <h1 className="text-4xl font-bold">Sign up</h1>
                            <p className="opacity-50 mt-4 text-lg">Sign un below to create your first account </p>
                        </div>

                <div className = "mt-6" >
                    <form action="">
                        <Input type = {"text"} id = {"name"} value = {name} onChange ={handleName} name = "name" placeholder = {"Name"} ></Input>
                        <Input type = {"text"} id = {"fatherName"} value = {fatherName} onChange ={handleFatherName} name = "fatherName" placeholder = {"Father Name"}></Input>
                        <Input type = {"text"} id = {"phone"} value = {phoneNumber} onChange ={handlePhoneNumber} name = "phone" placeholder = {"Phone Number (+2519...)"} ></Input>
                        <Input type = {"text"} id = {"address"} value = {address} onChange ={handleAddress} name = "address" placeholder = {"Address"} ></Input>
                        <Input type = {"text"} id = {"email"} value = {email} onChange ={handleEmail} name = "email" placeholder = {"Email Address"} ></Input>
                        <Input type = {"password"} value = {password} onChange ={handlePassword} id = {"password"} name = {"password"} placeholder = {"Password"} ></Input>
                        <Input type = {"validatePassword"} id = {"validatePassword"} value = {validatePassword} onChange ={handleValidatPasswored} name = {"password"} placeholder = {"reenter Password"} ></Input>

                    <div className="mt-10">
                            <button onClick={registerEmployee} type = "submit" className="w-full px-4 py-4 text-lg font-semibold text-white rounded-lg text-center bg-black 
                            focus:bg-gray-700">Submit</button>

                        </div>
                        <p className = "pt-6 text-sm text-center text-gray-600">ALREADY PARKING WITH US? SIGN IN!
                            <a className="font-semibold hover:underline hover:text-700 focus:text-800 
                            " href = "google.com">sign in.</a> </p>

                    </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default SignUp

