import React from "react";
import { useState } from "react";
import { Modal,Button } from "react-bootstrap";
import png from "../../assets/img/cashback.png"
export default function StepTwo(props){
    const [Show,setShow]=useState(true)
    const [isCheckBoxSelected,setIsCheckBoxSelected]=useState(false)
    const [Checked,setChecked]=useState(false)
    const [mm,setmm]=useState(false)

    const handleChange=(e)=>{
        setIsCheckBoxSelected(true)
        

      // setChecked(true);
    }

    const handleonClick=(e)=>{
      if(!Checked ){
        setIsCheckBoxSelected(true)
        props.next();
      }else{
        alert("pleas select any option")
        
      }
    }
    return(

<>
<div style={{ }} >
<div class="modal-show " tabindex="-1" >
  <div class="modal-dialog-fullscreen" style={{display:"block",position: 'initial'  }} >
    <div class="modal-content">
      <div class="modal-header">
        <h2 class="modal-title">Shopque</h2>
        {/* <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button> */}
      </div>
      <div class="modal-body" style={{backgroundColor:"#c9bc9c6b"}}>
      <div class="progress">
            <div class="progress-bar bg-dark" role="progressbar" aria-valuenow="0" style={{ width: "50%" }} aria-valuemin="0" aria-valuemax="100"></div>
          </div>
        {/* <div class="modal-body"> */}
      <div class="text-center mt-3">
        <i class="far fa-file-alt fa-4x mb-3 text-primary"></i>
        <p>
          <strong>Your opinion matters</strong>
        </p>
        </div>
        <div class="text-start">
        <h5 className="steps-h5 fw-bolder mt-2">
          Where would you like to sell
        </h5>
        <p>pick as many as you like you can always change these later We`ll make sure you are set up to sell in these places</p>
      </div>
      <form class="px-3 " action="">
        {/* <p class="text-center"><strong>Your rating:</strong></p> */}
        {/* <div className="row justify-content-between">
        <div class="shadow p-3  bg-body rounded col ">
                  <div class="form-check ">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                    <label class="form-check-label col-auto" for="flexRadioDefault1">
                     <strong>an online store</strong>
                     <p>create a fully costomizable website</p>
                    </label>
                    <img src={png} class="img-thumbnail col-auto" style={{height:"50px",width:"50px"}} alt="..."></img>
                  </div>
                </div>


                <div class="shadow p-3 mb-5 mt-5 bg-body rounded col mx-4">
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                    <label class="form-check-label" for="flexRadioDefault1">
                     For myself ,my business or a friend
                    </label>
                  </div>
                </div>
                </div> */}
                <div className="row gx-5 justify-content-between">
        <div class="shadow ms-4 p-3 ms-4 mt-3 bg-body rounded col">
                  <div class="form-check my-4">
                    <input class="form-check-input "  onChange={handleChange} type="radio" name="flexRadioDefault1" id="flexRadioDefault1" />
                    <label class="form-check-label " for="flexRadioDefault1">
                      <strong>an online store</strong>
                      <br></br>
                     For myself ,my business or a friend
                    </label>
                    <img src={png} class="img-thumbnail float-end steps-img" ></img></div>
                </div>


                <div class="shadow me-5 p-3 mx-3 mt-3 bg-body rounded col mx-4">
                  <div class="form-check">
                    <input class="form-check-input" type="radio"  onChange={handleChange} name="flexRadioDefault2" id="flexRadioDefault1" />
                    <label class="form-check-label" for="flexRadioDefault1">
                    <strong> in person</strong>
                     For myself ,my business or a friend
                    </label>
                    <img src={png} class="img-thumbnail float-end steps-img"  alt="..."></img>
                  </div>
                </div>
                </div>  
                
                <div className="row justify-content-between">
        <div class="shadow ms-4 p-3 mt-3 bg-body rounded col">
                  <div class="form-check">
                    <input class="form-check-input" type="radio" onChange={handleChange} name="flexRadioDefault3" id="flexRadioDefault1" />
                    <strong>an exiting website or blog</strong>
                    <label class="form-check-label" for="flexRadioDefault1">
                     For myself ,my business or a friend
                    </label>
                    <img src={png} class="img-thumbnail float-end steps-img"  alt="..."></img>
                  </div>
                </div>


                <div class="shadow ms-4 p-3 mt-3 bg-body rounded col mx-4">
                  <div class="form-check">
                    <input class="form-check-input" type="radio" onChange={handleChange} name="flexRadioDefault4" id="flexRadioDefault1" />
                    <strong>social media</strong>
                    <label class="form-check-label" for="flexRadioDefault1">
                     For myself ,my business or a friend
                    </label>
                    <img src={png} class="img-thumbnail float-end steps-img"  alt="..."></img>
                  </div>
                </div>
                </div>     
                <div className="row justify-content-between">
        <div class="shadow ms-4 p-3 mt-3 bg-body rounded col">
                  <div class="form-check">
                    <input class="form-check-input" type="radio" onChange={handleChange} name="flexRadioDefault5" id="flexRadioDefault1" />
                    <strong>online marketplace</strong>
                    <label class="form-check-label" for="flexRadioDefault1">
                     For myself ,my business or a friend
                    </label>
                    <img src={png} class="img-thumbnail float-end steps-img"  alt="..."></img>
                  </div>
                </div>


                <div class="shadow ms-4 p-3 mt-3 bg-body rounded col mx-4">
                  <div class="form-check">
                    <input class="form-check-input" type="radio" onChange={handleChange} name="flexRadioDefault6" id="flexRadioDefault1" />
                    <label class="form-check-label" for="flexRadioDefault1">
                     For myself ,my business or a friend
                    </label>
                    <img src={png} class="img-thumbnail float-end steps-img"  alt="..."></img>
                  </div>
                </div>
                </div>     
                <div className="row justify-content-between">
        <div class="shadow ms-4 p-3 mt-3 bg-body rounded col">
                  <div class="form-check ">
                    <input class="form-check-input" type="radio" onChange={handleChange} name="flexRadioDefault7" id="flexRadioDefault1" />
                    <label class="form-check-label" for="flexRadioDefault1">
                     For myself ,my business or a friend
                    </label>
                    <img src={png} class="img-thumbnail float-end steps-img"  alt="..."></img>
                  </div>
                </div>


                <div class="shadow ms-4 p-3 mt-3 bg-body rounded col mx-4">
                  <div class="form-check">
                    <input class="form-check-input" type="radio" onChange={handleChange} name="flexRadioDefault8" id="flexRadioDefault1" />
                    <label class="form-check-label" for="flexRadioDefault1">
                     For myself ,my business or a friend
                    </label>
                    <img src={png} class="img-thumbnail float-end steps-img"  alt="..."></img>
                  </div>
                </div>
                </div>     
                <div className="row justify-content-between">
        <div class="shadow ms-4 p-3 mt-3 bg-body rounded col">
                  <div class="form-check">
                    <input class="form-check-input" type="radio" onChange={handleChange} name="flexRadioDefault9" id="flexRadioDefault1" />
                    <label class="form-check-label" for="flexRadioDefault1">
                     For myself ,my business or a friend
                    </label>
                    </div>
                    <img src={png} class="img-thumbnail float-end steps-img"  alt="..."></img>
                </div>


                <div class="shadow ms-4 p-3 mt-3 bg-body rounded col mx-4">
                  <div class="form-check">
                    <input class="form-check-input" type="radio" onChange={handleChange} name="flexRadioDefault10" id="flexRadioDefault1" />
                    <label class="form-check-label" for="flexRadioDefault1">
                     i am not sure
                    </label>
                    {/* <img src={png} class="img-thumbnail float-end steps-img"  alt="..."></img> */}
                  </div>
                </div>
                </div>      


        <p class="text-center"><strong>What could we improve?</strong></p>

      </form>
    {/* </div>  */}
     </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" onClick={props.pre}>pre</button>
        <button type="button" class="btn btn-secondary" onClick={props.next}>skip</button>
        <button type="button" class="btn btn-secondary" onClick={()=>handleonClick()}>Next</button>
       
      </div>
    </div>
  </div>
</div>
</div>

</>
)
}


{/* <div
      className="modal show"
      style={{ display: 'block', position: 'fixed' }}
    >
      <Modal.Dialog  fullscreen={true}>
        <Modal.Header className="bg-primary" >
          <Modal.Title ><h1>Shopque</h1></Modal.Title>
        </Modal.Header>

        <Modal.Body>
        <div class="progress">
            <div class="progress-bar bg-dark" role="progressbar" aria-valuenow="0" style={{ width: "50%" }} aria-valuemin="0" aria-valuemax="100"></div>
          </div>
        <div class="modal-body">
      <div class="text-center">
        <i class="far fa-file-alt fa-4x mb-3 text-primary"></i>
        <p>
          <strong>Your opinion matters</strong>
        </p>
        </div>
        <div class="text-start">
        <h5 className="steps-h5 fw-bolder mt-2">
          Where would you like to sell
        </h5>
        <p>pick as many as you like you can always change these later</p>
      </div>

      <hr />

      <form class="px-4" action="">
        <p class="text-center"><strong>Your rating:</strong></p>
        <div className="row justify-content-between">
        <div class="shadow p-3 mb-5 mt-5 bg-body rounded col p-0">
                  <div class="form-check ">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                    <label class="form-check-label col-auto" for="flexRadioDefault1">
                     <strong>an online store</strong>
                     <p>create a fully costomizable website</p>
                    </label>
                    <img src={png} class="img-thumbnail col-auto" style={{height:"50px",width:"50px"}} alt="..."></img>
                  </div>
                </div>


                <div class="shadow p-3 mb-5 mt-5 bg-body rounded col mx-4">
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                    <label class="form-check-label" for="flexRadioDefault1">
                     For myself ,my business or a friend
                    </label>
                  </div>
                </div>
                </div>
                <div className="row justify-content-between">
        <div class="shadow p-3 mb-5 mt-5 bg-body rounded col">
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                    <label class="form-check-label" for="flexRadioDefault1">
                     For myself ,my business or a friend
                    </label>
                  </div>
                </div>


                <div class="shadow p-3 mb-5 mt-5 bg-body rounded col mx-4">
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                    <label class="form-check-label" for="flexRadioDefault1">
                     For myself ,my business or a friend
                    </label>
                  </div>
                </div>
                </div>      

        <div class="form-check mb-2">
          <input class="form-check-input" type="radio" name="exampleForm" id="radio3Example1" />
          <label class="form-check-label" for="radio3Example1">
            Very good
          </label>
        </div>
        <div class="form-check mb-2">
          <input class="form-check-input" type="radio" name="exampleForm" id="radio3Example2" />
          <label class="form-check-label" for="radio3Example2">
            Good
          </label>
        </div>
        <div class="form-check mb-2">
          <input class="form-check-input" type="radio" name="exampleForm" id="radio3Example3" />
          <label class="form-check-label" for="radio3Example3">
            Medicore
          </label>
        </div>
        <div class="form-check mb-2">
          <input class="form-check-input" type="radio" name="exampleForm" id="radio3Example4" />
          <label class="form-check-label" for="radio3Example4">
            Bad
          </label>
        </div>
        <div class="form-check mb-2">
          <input class="form-check-input" type="radio" name="exampleForm" id="radio3Example5" />
          <label class="form-check-label" for="radio3Example5">
            Very bad
          </label>
        </div>

        <p class="text-center"><strong>What could we improve?</strong></p>

      </form>
    </div>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={props.next}>skip</Button>
          <Button variant="primary" onClick={props.next}>Next</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div> */}
    