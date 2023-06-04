const Mobile = (props) =>{
    return (
        <div className="w-44 h-16 px-4 py-4 flex justify-center bg-blue-400 hover:bg-blue-600 items-center shadow-lg rounded-md">
            <a href="google.com"> <img className = "w-32 h-8 " src = {props.image} alt = {props.alt}></img>
            </a>

        </div>
    )
}
export default Mobile
