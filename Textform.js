import React, {useState} from 'react'

export default function Textform(props) {
 
  const handleUpClick = () => {
    console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText)
  }

  const handleLoClick = () => {
    console.log("lowercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText)
  }

  const handleClearClick = () => {
    
    let newText = '';
    setText(newText)
  }

  const handleTrimClick = () => {
    
    let newText = text.trim();
    setText(newText)
  }

  const handleInverseTextClick = () => {
    
    let newText = "";
    for(let i=text.length; i>=0; i--) {
        newText += text[i];
    }
    setText(newText)
  }

  const handleCopy = ()=>{
    let copytext = document.getElementById("myBox");
    copytext.select();
    navigator.clipboard.writeText(copytext.value);

  }
  const handleOnChange = (event) => {
    console.log("On change");
    setText(event.target.value)
  }


    const [text, setText] = useState('Enter your text here');
  
  
 //setText("newText"); 
  return (
    <> 
    <div className="container" style = {{color: props.mode==='dark'?'white':'rgb(2 33 55)'}}>
        <h1>{props.heading} </h1>
       <div className="mb-3">
        
        <textarea className="form-control" value={text} onChange={handleOnChange} style = {{backgroundColor: props.mode==='dark'?'grey':'white', color:props.mode==='dark'?'white':'rgb(2 33 55)' }} id="myBox" rows="8"></textarea>
        </div> 
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-2 " onClick={handleLoClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-2 " onClick={handleClearClick}>Clear Text</button>
        <button className="btn btn-primary mx-2 " onClick={handleTrimClick}>Remove white spaces</button>
        <button className="btn btn-primary mx-2 " onClick={handleInverseTextClick}>Inverse text</button>
        <button className="btn btn-primary mx-2 " onClick={handleCopy}>Copy text</button>
    </div>
    <div className="container my-3" style = {{color: props.mode==='dark'?'white':'rgb(2 33 55)'}}> 
    <h1> Your text summary</h1>
    <p> {text.split(" ").length} words, {text.length} characters</p>
    <p>{0.008 * text.split(" ").length} minutes read </p>
    <h2>Preview</h2>
    <p>{text.length>0?text:"Enter something in the textbox above to preview your text here"}</p>
    </div>
    </>
  )
}
