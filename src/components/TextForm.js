import React, {useState} from 'react'

export default function TextForm(props) {
  const  [text, setText] =useState('');
  const handleUpClick = () =>{

    // console.log("uppercase button clicked" +text)
    let newText= text.toUpperCase();
    setText(newText);
    props.showlert=("Converted to Uppercasse", "success");
  } 
  const handleLoClick = () =>{

    // console.log("uppercase button clicked" +text)
    let newText= text.toLowerCase();
    setText(newText)
    props.showlert=("Converted to lowercase", "success");
  } 
// this function is used for speaking 
  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
  }

  const handleClearClick = () =>{

    // console.log("uppercase button clicked" +text)
    let newText= "";
    setText(newText);
    props.showAlert=("text cleared", "success")
  
  } 

  const handleOnChange = (event) =>{
    // console.log("onchange") 
    setText(event.target.value)
  }

  // setText=("text");
  return (
    <>
    <div className="container" style={{color:props.mode==='dark'?'white':'rgb(24 19 69'}}>
                <h1 className="mb-4">{props.heading} </h1>
            <div className="mb-3">
            
            <textarea className="form-control"  value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?     '#3f359a':'white',color:props.mode==='dark'?'white':'rgb(24 19 69'}} id="myBox" rows="8"></textarea>
            </div>
            <button disabled={text.length===0} className="btn btn-success mx-1 my-1 " onClick={handleUpClick}>Convert to upper case</button>
            <button disabled={text.length===0} className="btn btn-success mx-1 my-1" onClick={handleLoClick}>Convert to lower case</button>
            <button disabled={text.length===0} className="btn btn-success mx-1 my-1" onClick={handleClearClick}>Clear text</button>
            <button disabled={text.length===0} type="submit" onClick={speak} className="btn btn-success mx-2 my-2">Speak</button>
    </div>
      <div className="container my-4" style={{color:props.mode==='dark'?'white':'rgb(24 19 69'}}>
        <h2>
            Your summary is here:-
            </h2>
        
        <p text="bold">
           Words:{text.split(" ").filter((element)=>{return element.length!==0}).length} 
          | Characters: {text.length} 
            
        </p>
        <p>Time Taken: {0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length }min</p>
        <h2>Preview:</h2>
        <p>{text.length>0?text:"Nothing to preview"}</p>

      </div>
    </>
  )
};
