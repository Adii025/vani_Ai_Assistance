import React from 'react'
import { createContext } from 'react'
import { useState } from 'react'
export const datacontext=createContext()
import runPrompt from '../gemini.js'
function UserContext({children}) {

let[speking,setSpeaking]=useState(false)
let[prompt,setprompt]=useState("Listining...")
let[response,setResponse]=useState("false")


  function speak(text){
    let text_speak=new SpeechSynthesisUtterance(text)
    text_speak.volume=1;
    text_speak.rate=1;
    text_speak.pitch=1;
    text_speak.lang='hi_IN';
    window.speechSynthesis.speak(text_speak)

  }
 async function Airesponse(prompt){
   let text= await runPrompt(prompt)
   let newText=text.split("**")&&text.split("**")&& text.replace("Google","Aditya Shinde")&& text.replace("Gemini","Aditya Shinde")&& text.replace("GoogleS","Aditya Shinde")
   setprompt(newText)
    speak(newText)
    setResponse(true)
    setTimeout(() => {
    setSpeaking(false)
    }, 4000);
   
  }

  const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
  recognition.onresult=(e)=>{
let currentIndex=e.resultIndex
let transcript=e.results[currentIndex][0].transcript
setprompt(transcript)
takecomand(transcript.toLowerCase())
  }

  function takecomand(commnad){
  if(commnad.includes("open youtube")){
    window.open("https://www.youtube.com/","_blank")
    speak("Opening Youtube")
    setResponse(true)
    setprompt("Opening Youtube..")

    setTimeout(() => {
      setSpeaking(false)
    }, 4000)
  }
  else{
    Airesponse(commnad)
  }
}

let value = {
  recognition,
  speking,
  setSpeaking,
  prompt,
  setprompt,
  response,
  setResponse
}

return (
  <div>
    <datacontext.Provider value={value}>
      {children}
    </datacontext.Provider>
  </div>
)
}

export default UserContext;