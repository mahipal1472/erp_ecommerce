import React, { useState }  from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../assets/css/main.css"


export default function SignUp() {

    const navigate = useNavigate();

        const [formData, setFormData] = useState({
          name: '',
          email: '',
          password: '',
          confurm: '',
        });
      
        const handleChange = (event) => {
                  
          const { name, value } = event.target;
          setFormData((prevData) => ({
            ...prevData,
            [name]: value,
          }));
        };
        
        const handleSubmit = async (e) => {
            e.preventDefault();

          debugger

                const emailRegex = /\S+@\S+\.\S+/;
                if (emailRegex.test(formData.email) && formData!="") {

                    await axios.post(`http://localhost:3004/user`,formData)
                      navigate("/Login");                      
                } else {                 
                  alert('Please enter a valid email!');
                }
            
        };
      

  return (
    <div className="wrapper">
      <h2>Registration</h2>
      <form action="#">
        <div className="input-box">
          <input type="text"  name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your name"
          required="" />
        </div>
        <div className="input-box">
          <input type="text" 
          placeholder="Enter your email"
          required=""
          name="email"
          value={formData.email}
          onChange={handleChange}
          />
        </div>
        <div className="input-box">
          <input type="password" 
          placeholder="Create password" 
          required=""
          name="password"
          value={formData.password}
          onChange={handleChange} />
        </div>
        <div className="input-box">
          <input type="password" 
          placeholder="Confirm password" 
          required="" 
          name="confurm"
          value={formData.confurm}
          onChange={handleChange}/>
        </div>
        <div className="policy">
          <input type="checkbox" />
          <h3>I accept all terms &amp; condition</h3>
        </div>
        <div className="input-box button">
          <input type="Submit" onClick={handleSubmit} defaultValue="Register Now" />
        </div>
        <div className="text">
          <h3>
            Already have an account? 
            <a 
            // onClick={handleSubmit}
            href="/Login"
            >Login now</a>
          </h3>
        </div>
      </form>
    </div>
  );
}















// import React, { useState }  from "react";
// import { useNavigate } from "react-router-dom";


// export default function SignUp() {

//     const navigate = useNavigate();

//         const [formData, setFormData] = useState({
//           name: '',
//           email: '',
//           password: '',
//           confurm: '',
//         });
      
//         const handleChange = (event) => {
//           const { name, value } = event.target;
//           setFormData((prevData) => ({
//             ...prevData,
//             [name]: value,
//           }));
//         };
      
//         const handleSubmit = () => {
//            console.log(formData,"formData")
//           // Send the data to the backend server
//           fetch('http://localhost:3004/user', {
//             method: 'POST',
//             headers: {
//               'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(formData),
//           })
//             .then((response) => response.json())
//             .then((data) => {
//               console.log(data);
//               navigate("/Login");
//               // Response from the server (success message)
//             })
//             .catch((error) => {
//               console.error('Error while posting data:', error);
//             });
//         };
      

//   return (
//     <div className="wrapper">
//       <h2>Registration</h2>
//       <form action="#">
//         <div className="input-box">
//           <input type="text"  name="name"
//           value={formData.name}
//           onChange={handleChange}
//           placeholder="Enter your name"
//           required="" />
//         </div>
//         <div className="input-box">
//           <input type="text" 
//           placeholder="Enter your email"
//           required=""
//           name="email"
//           value={formData.email}
//           onChange={handleChange} />
//         </div>
//         <div className="input-box">
//           <input type="password" 
//           placeholder="Create password" 
//           required=""
//           name="password"
//           value={formData.password}
//           onChange={handleChange} />
//         </div>
//         <div className="input-box">
//           <input type="password" 
//           placeholder="Confirm password" 
//           required="" 
//           name="confurm"
//           value={formData.confurm}
//           onChange={handleChange}/>
//         </div>
//         <div className="policy">
//           <input type="checkbox" />
//           <h3>I accept all terms &amp; condition</h3>
//         </div>
//         <div className="input-box button">
//           <input type="Submit" onClick={handleSubmit} defaultValue="Register Now" />
//         </div>
//         <div className="text">
//           <h3>
//             Already have an account? 
//             <a 
//             // onClick={handleSubmit}
//             href="/Login"
//             >Login now</a>
//           </h3>
//         </div>
//       </form>
//     </div>
//   );
// }
