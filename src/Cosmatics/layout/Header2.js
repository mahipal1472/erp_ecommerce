import React from "react";
export default function Header2 (){
    return (
        <div class="header_section">
            <div class="container-fluid">
               <nav class="navbar navbar-light  justify-content-between ">
                  <a class="" href="index.html " style={{ display: "contents" }}><img src={logo} className="rounded-circle " style={{ width: "10%", paddingLeft: "0%" }} /></a>
                  <div id="mySidenav" class="sidenav">
                     <ul className="d-flex p-1">
                        <li onClick={() => navigate("/eyeshodow")}><a >Home</a></li>
                        <li><a href="products.html">Products</a></li>
                        <li> <a href="about.html">About</a></li>
                        <li><a href="client.html">Client</a></li>
                        <li> <a href="contact.html">Contact</a></li>
                     </ul>
                  </div>
                  {/* <span class="toggle_icon" onClick={openNav}><img src={toggle_icon} /></span> */}
                  {/* <a class="logo" href="index.html " style={{ display: "contents" }}><img src={logo} /></a> */}
                  <form class="form-inline ">
                     <div class="login_text" style={{}}>
                        <ul style={{ display: "" }}>
                           <li ><a href="#"><img src={usericon} /></a></li>
                           <li className="mx-0 px-0"><a href="#"><img src={bag_icon} /></a></li>
                           <li className="px-0"><a href="#"><img src={search_icon} /></a></li>
                        </ul>
                     </div>
                  </form>
               </nav>
            </div>
         </div>
    )
}