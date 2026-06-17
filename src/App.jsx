import React from 'react'
import './App.css'
import va from './assets/ai.png'
import { BsFillMicFill } from "react-icons/bs";
import{datacontext} from './Context/UserContex'
import { useContext } from 'react'
import speakimage from "./assets/speak.gif"
import gif from "./assets/aiVoice.gif"
function App() {
  let {recognition,speking,setSpeaking,prompt,response,setprompt,setResponse}=useContext(datacontext)

 
  return (
    <div className='main'>
      <img src={va} alt="AI Assistant" id='vani'/>
      <span >Hello, I am your AI Voice Assistant. How can I help you today?</span>
{!speking?
<button onClick={() =>{
  setprompt("Listining...")
          setSpeaking(true)
          setResponse(false)
          recognition.start()}}>Click Here <BsFillMicFill /></button>
          :
          <div className='responsediv'>
            {!response? 
            <img src={speakimage} alt="" id="speak" />
             :
            <img src={gif} alt="" id="gif" />}
  
            <p>{prompt}</p>
          </div>
          
          }
        
    </div>

  )
}

export default App