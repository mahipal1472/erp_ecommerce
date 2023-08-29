import React from "react";
import { useState } from "react";
import { Modal, Button } from "react-bootstrap";
export default function StepOne(props) {
 
  const [Show, setShow] = useState(false)
  const [fullscreen, setFullScreen] = useState(true)
  const [isChecked1,setIsChecked1]=useState(false)
  const [isChecked2,setIsChecked2]=useState(false)
  const [check1,setcheck1]=useState(false)
  const [check2,setcheck2]=useState(false)
  
const handleCheck1=(evt,check)=>{
setcheck1(evt.target.checked)
 setIsChecked1(check)
}

const handleCheck2=(evt,check)=>{
setcheck2(evt.target.value)
setIsChecked2(check)
}
  return (
<>
<div style={{display:"block",position: 'fixed',width:"100%"  }} >
<div class="modal-show " tabindex="-1" >
  <div class="modal-dialog modal-lg" style={{display:"block",position: 'initial'  }} >
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title">Shopque</h1>
        {/* <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button> */}
      </div>
      <div class="modal-body" style={{backgroundColor:"#c9bc9c6b"}}>
      <div class="progress">
            <div class="progress-bar bg-dark" role="progressbar" aria-valuenow="0" style={{ width: "25%" }} aria-valuemin="0" aria-valuemax="100"></div>
          </div>
          <div class="modal-body">
            <div class="text-center">
              <i class="far fa-file-alt fa-4x mb-3 text-primary"></i>
              <p>
                <strong>Your opinion matters</strong>
              </p>
              <p>
                <b>Let`s see you to up with the right tools</b>
              </p>
              <span><h6 className="steps-h5">First Who are you creating a website for?</h6></span>
            </div>

            <hr />

            <form class="px-4 d-inline-block " action="">
              <div className="justify-content-center">
                <div class="shadow p-3  mb-5 mt-5 bg-body  rounded">
                  <div class="form-check form-check-inline">
                    <input class="form-check-input " checked={isChecked1} onChange={(evt)=>handleCheck1(evt,true)} type="radio" name="flexRadioDefault1" id="flexRadioDefault1" />
                    <label class="form-check-label" for="flexRadioDefault1">
                     For myself ,my business or a friend
                    </label>
                  </div>
                </div>
                <div class="shadow p-3 mb-5 bg-body rounded">
                  <div class="form-check">
                  <input class="form-check-input"   type="radio" checked={isChecked2} onChange={(evt)=>handleCheck2(evt,true)} name="flexRadioDefault2  " id="flexRadioDefault1" />
                  <label class="form-check-label" for="flexRadioDefault1">
                    For a cleint As a freelancer or agencyz3

                  </label>
                </div>
                </div>

              </div>
              <p class="text-center mb-4"><strong>What could we improve?</strong></p>
            </form>
          </div>      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" onClick={props.pre}>pre</button>
        <button type="button" class="btn btn-secondary" onClick={props.next}>skip</button>
        <button type="button" class="btn btn-secondary" onClick={()=>isChecked1||isChecked2? props.next():""}>Next</button>
       
      </div>
    </div>
  </div>
</div>
</div>

</>


    // <div className="modal-show " style={{display: 'block', position: 'fixed',width:"100%"}}>

    //     <Modal.Dialog fullscreen={true}  >
    //     <Modal.Header className="bg-primary">
    //        <Modal.Title > <h1>Shopque</h1></Modal.Title>
    //      </Modal.Header>

    //      <Modal.Body style={{backgroundColor:"#c9bc9c6b"}}> 
    
    //       <div class="progress">
    //         <div class="progress-bar bg-dark" role="progressbar" aria-valuenow="0" style={{ width: "25%" }} aria-valuemin="0" aria-valuemax="100"></div>
    //       </div>
    //       <div class="modal-body">
    //         <div class="text-center">
    //           <i class="far fa-file-alt fa-4x mb-3 text-primary"></i>
    //           <p>
    //             <strong>Your opinion matters</strong>
    //           </p>
    //           <p>
    //             <b>Let`s see you to up with the right tools</b>
    //           </p>
    //           <span><h6>First Who are you creating a website for?</h6></span>
    //         </div>

    //         <hr />

    //         <form class="px-4" action="">
    //           <div className="justify-content-center">
    //             <div class="shadow p-3 mb-5 mt-5 bg-body rounded">
    //               <div class="form-check">
    //                 <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
    //                 <label class="form-check-label" for="flexRadioDefault1">
    //                  For myself ,my business or a friend
    //                 </label>
    //               </div>
    //             </div>
    //             <div class="shadow p-3 mb-5 bg-body rounded"><div class="form-check">
    //               <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
    //               <label class="form-check-label" for="flexRadioDefault1">
    //                 For a cleint As a freelancer or agency
    //               </label>
    //             </div>
    //             </div>

    //           </div>
    //           <p class="text-center mb-4"><strong>What could we improve?</strong></p>
    //         </form>
    //       </div>
    //      </Modal.Body>

    //     <Modal.Footer>
    //     <Button variant="secondary" className="right-20" onClick={props.next}>pre</Button>
    //       <Button variant="secondary" onClick={props.next}>skip</Button>
    //       <Button variant="primary" onClick={props.next}>Next</Button>
          
    //     </Modal.Footer>
    //   </Modal.Dialog > 
    //   </div>
  )
}






