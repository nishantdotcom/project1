import React  , {useState} from 'react'
import { SiLeetcode } from "react-icons/si";
import { ImGoogle3 } from "react-icons/im";
import { AiFillFacebook } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";

function Main() { 
    
        const [userId, setUserId] = useState("");
        const [Passward, setPassward] = useState("");
        
    
        const handleSubmit = (event) => {
            event.preventDefault(); // Prevents page reload
          
          };
    
  return (
   <div className='min-h-screen flex items-center justify-center bg-gray-100'>
    <div className='w-full max-w-sm bg-gray-100 p-6 rounded-lg shadow-md'>
    <div className="flex justify-between items-center px-4 py-2 bg-gray-100"><SiLeetcode  size={50}/>
        <h2  className='  w-40 m-4 mr-40 text-2xl mb-2 fond-bold text-center justify-center bg-gray-100  rounded-lg'>
            Leetcode
     </h2></div>
     <form onSubmit={handleSubmit} className="space-y-4">
     <div>
         
        <div> 
        <input 
        type ="text"
        id="userId"
        className="w-full p-2 border rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
        placeholder='Enter your user id'
        value ={userId}
        onChange={(e) => setUserId(e.target.value)}
        required/></div>
     </div>
    <div>
        
        <input 
        type ="Passward"
        id="Passward"
        className="w-full p-2 border rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
        placeholder='Enter your Passward'
        value ={Passward}
        onChange={(e) => setPassward(e.target.value)}
        required/>
    </div> 
    
    <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 rounded-lg"
          >
            Login
          </button> 
          <div className="flex justify-between items-center px-4 py-2 bg-gray-100">
          <button className="px-4 py-2 text-gray-500 rounded-lg"> forget Password?</button>

          <button  className="px-4 py-2 text-gray-500 rounded-lg" >sign up</button>
        </div>
        </form>
        <div className=" ml-4 flex justify-between items-center p-10 bg-gray-100" >
     <button><ImGoogle3  className=  " text-gray-500 rounded- w-10 hover: hover:text-red-500  " size={30} /> </button>
    <AiFillFacebook  className="text-gray-500 w-10 hover: hover:text-blue-500  " size={30} />
    <FaGithub className="text-gray-500 w-10 hover: hover:text-black " size={30} />
    <CiLinkedin  className= " mr-10  text-gray-500 w-10 hover: hover:text-blue-500  " size={30}/>
    </div>
    </div> 
    
   </div>
  )
}

export default Main