import React ,  { useEffect, useState } from "react";
import img from "../assets/img/loginImg.png";
import { Link, useAsyncError, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer,toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Modal } from "bootstrap";

export default function Login() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [showModal,setShowModal]=useState(false)
  useEffect(() => {
    loadUsers();
  }, []);


  const loadUsers = async () => {
        axios.get(`http://localhost:3004/user`).then((res)=>{
        const response=res.data
        // console.log(response,"msd")
        setUsers(response)
       })
       
       
  };

  // const onSubmit = async (e) => {
  //   // debugger
  //   e.preventDefault();
    
  //   const isAuthenticated = users.map( (user) =>
  //   user.email === email && user.password === password);
  //  console.log(isAuthenticated,"kjkjkjk")
  //  isAuthenticated.map((item)=>{
  //   if(item == true){
  //     if(showModal===true){
  //       navigate("/Deshboard")
        
  //     }else{
  //       navigate("/createstore")
  //       localStorage.setItem("hasLoggedIn",true)
  //     }
      

  //   }
  //   else{
  //     toast.error("email is not valid ", {
  //       position: "top-right",
  //       autoClose: 4000,
  //       hideProgressBar: true,
  //       closeOnClick: true,
  //       pauseOnHover: true,
  //       draggable: true,
  //       progress: undefined,
  //       theme: "colored",
        
  //       });
  //   }
  
  //  })
  
    
  // };

const onSubmit= async (e)=>{
  let isAuthenticated = users.find( (user) =>
   user?.email === email && user?.password === password);
   if(isAuthenticated?.email && isAuthenticated?.password){
    if(isAuthenticated?.Islogged==true){
      navigate("/Deshboard")
      
    }else {
      navigate("/createstore")
    
      // axios.put(`http://localhost:3004/user/${isAuthenticated.id}` ,
      // {...isAuthenticated,"Islogged":true}
      // )
    }
   }else{
    alert("no record found");
   }
}



  return (
    <>
    <div  className="main">
    <div className="container h-100" >
    
      <div className="loginContainer">
        <div className="d-flex justify-content-center h-100 mt-5">
          <div className="user_card">
            <div className="d-flex justify-content-center">
              <div className="brand_logo_container mt-4">
                <img src={img} className="brand_logo" alt="Logo" />
              </div>
            </div>
            <div className="d-flex justify-content-center form_container">
              <form onSubmit={(e) => onSubmit(e)}>
                <div className="input-group mb-3">
                  <div className="input-group-append">
                    <span className="input-group-text">
                      <i className="fas fa-user" />
                    </span>
                  </div>
                  <input
                    type="text"
                    name=""
                onChange={(e) => setEmail(e.target.value)}
                value={email}

                    className="form-control input_user"
                    defaultValue=""
                    placeholder="email"
                  />
                </div>
                <div className="input-group mb-2">
                  <div className="input-group-append">
                    <span className="input-group-text">
                      <i className="fas fa-key" />
                    </span>
                  </div>
                  <input
                    type="password"
                    name=""
                    className="form-control input_pass"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                    defaultValue=""
                    placeholder="password"
                  />
                </div>
                <div className="form-group">
                  <div className="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="customControlInline"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="customControlInline"
                    >
                      Remember me
                    </label>
                  </div>
                </div>
                <div className="d-flex justify-content-center mt-3 login_container">
                  <button type="submit" name="button" className="btn login_btn">
                     Login
                  </button>
                </div>
              </form>
            </div>
            <div className="mt-4">
              <div className="d-flex justify-content-center links">
                Don't have an account?{" "}
                <a href="/Signup" className="ml-2">
                  Sign Up
                </a>
              </div>
              <div className="d-flex justify-content-center links">
                <a href="#">Forgot your password?</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      <ToastContainer/>
    </div>



    </>
  );
}













// import React, { useEffect } from "react";
// import img from "../assets/img/loginImg.png"
// import axios from "axios";
// import { useState } from "react";

// export default function Login() {

//   const [data,setData]=useState("")
//   const [formData, setFormData] = useState({
//     email: '',
//     password: '',
//     // confirm: '',
//   });

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };
  
//   useEffect(()=>{
//       axios.get("http://localhost:3004/user").then((res)=>{
//       setData(res.data);
      
//       }).catch((err)=>{
//         console.log(err);
//       })
//   // },[])




//   const handleSubmit = () => {
//     const passwordRegex=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/
//     const emailRegex = /\S+@\S+\.\S+/;
//     if (emailRegex.test(formData.email) &&  formData!="") {
//       // alert('Your email looks good!');
//       if(passwordRegex.test(formData.password)){
//         alert('Your password looks good!');

//       }else{
//         alert('Please enter a valid password!');

//       }
      
//     } else {
      
//       alert('Please enter a valid email!');
//     }
    
   
//  };



  
//   return (
//     <div className="container h-100">
//         <div className="loginContainer">
//     <div className="d-flex justify-content-center h-100 mt-5">
//       <div className="user_card">
//         <div className="d-flex justify-content-center">
//           <div className="brand_logo_container mt-4">
//             <img
//               src={img}
//               className="brand_logo"
//               alt="Logo"
//             />
//           </div>
//         </div>
//         <div className="d-flex justify-content-center form_container">
//           <form onSubmit={handleSubmit}>
//             <div className="input-group mb-3">
//               <div className="input-group-append">
//                 <span className="input-group-text">
//                   <i className="fas fa-user" />
//                 </span>
//               </div>
//               <input
//                 type="text"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 className="form-control input_user"
              
//                 placeholder="email"
//               />
//             </div>
//             <div className="input-group mb-2">
//               <div className="input-group-append">
//                 <span className="input-group-text">
//                   <i className="fas fa-key" />
//                 </span>
//               </div>
//               <input
//                 type="password"
//                 name="password"
//                 value={formData.password}
//                 onChange={handleChange}
//                 className="form-control input_pass"
                
//                 placeholder="password"
//               />
//             </div>
//             {/* <div className="form-group">
//               <div className="custom-control custom-checkbox">
//                 <input
//                   type="checkbox"
//                   className="custom-control-input"
//                   id="customControlInline"
//                 />
//                 <label
//                   className="custom-control-label"
//                   htmlFor="customControlInline"
//                 >
//                   Remember me
//                 </label>
//               </div>
//             </div> */}
//             <div className="d-flex justify-content-center mt-3 login_container">
//               <button  type="submit" onClick={handleSubmit} className="btn login_btn">
//                 Login 
//               </button>
//             </div>
//           </form>
//         </div>
//         <div className="mt-4">
//           <div className="d-flex justify-content-center links">
//             Don't have an account?{" "}
//             <a href="/signup" className="ml-2">
//               Sign Up
//             </a>
//           </div>
//           <div className="d-flex justify-content-center links">
//             <a href="#">Forgot your password?</a>
//           </div>
//         </div>
//       </div>
//     </div>
//     </div>
//   </div>
  
  
//   );
// }
