// import { isLabelWithInternallyDisabledControl } from "@testing-library/user-event/dist/utils"
// import React, {useState} from 'react'



export default function About(props) {


    //  const  [myStyle,setMyStyle]=useState({
    //    color:'black',
    //    backgroundColor:'white'
    // })
   let myStyle={

    color: props.mode==='dark'?'white':'rgb(34 26 99)',
    backgroundColor:  props.mode==='dark'?'rgb(34 26 99)':'white'


   }
   

  return (
   

<>
    
    
<div className="container" style={myStyle}>
      <h1 className='my-3'>About Us</h1>

            <div className="accordion" id="accordionExample">
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                <strong> Analyze your text </strong>
                </button>
                </h2>
                <div id="collapseOne" style={myStyle} className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    <>This is the first item's accordion body.</> It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    <strong> Free to use</strong>
                </button>
                </h2>
                <div id="collapseTwo" style={myStyle} className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    <>This is the second item's accordion body.</> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. 
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                   <strong> Browser compatible</strong>
                </button>
                </h2>
                <div id="collapseThree" style={myStyle} className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    <>This is the third item's accordion body.</> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance.
                </div>
                </div>
            </div>
            </div>
            
</div>
<details>
    <summary>
        who are you?
    </summary>
    <p>i am saad</p>
</details>
</>  
  )
}
