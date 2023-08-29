import React, { useEffect, useState } from "react";
import "./css/style.css"
import "./css/responsive.css"
import "./css/bootstrap.min.css"
import "./css/jquery.mCustomScrollbar.min.css"
import usericon from "./images/user-icon.png"
import logo from "./images/navlogo.jpg"
import toggle_icon from "./images/toggle-icon.png"
import bag_icon from "./images/bag-icon.png"
import search_icon from "./images/search-icon.png"
import bannerimg from "./images/banner-img.png"
import about from "./images/about-img.png"
import clientimg from "./images/client-img.png"
import footer_logo from "./images/footer-logo.png"
import mail_icon from "./images/mail-icon.png"
import map_icon from "./images/map-icon.png"
import axios from "axios";
import EyeShadow from "./Categories/eyw-shadow";
import { useNavigate, Link } from "react-router-dom";

export default function Cosmatics() {
   const [product, setProduct] = useState();
   const [banner, setBenner] = useState();
   const [Brands,setBrands]=useState();
   const [categories, setCategories] = useState();
   const [itemToShow, setitemToShow] = useState(8)
   const [spread, setspread] = useState(false);
   const [singleproduct, setSingleproduct] = useState([])
   const navigate = useNavigate()

   useEffect(() => {
      Promise.all([axios.get("http://localhost:3004/Products"),
      axios.get(" http://localhost:3004/Banners"),
      axios.get(" http://localhost:3004/Categories"),
      axios.get(" http://localhost:3004/Brands")
      ]).then((responses) => {
         return Promise.all(responses.map((response) => {
            return response.data;
         }));
      }).then((res) => {
         setProduct(res[0]);
         setBenner(res[1]);
         setCategories(res[2]);
         setBrands(res[3])
      })
   }, [])


   const navigator = (id) => {
      navigate("/eyeshadow/" + id)
   }

   const showmore = () => {
      itemToShow === 8 ? (setitemToShow(product.length), setspread(true)) :
         (setitemToShow(8), setspread(false))
   }

   return (
      <>
         {/* <!-- header section start --> */}
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
         {/* <!-- header section end --> */}

         <div class="banner_section layout_padding ">
            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
               <div class="carousel-inner">
                  {banner?.map((res) => (<div class="carousel-item active">
                     <div class="container">
                        <div class="row">
                           <div class="col-sm-6">
                              <h1 class="banner_taital">{res.bannername}<br />Kit</h1>
                              <p class="banner_text"></p>
                              <div class="read_bt"><a href="#">Buy Now</a></div>
                           </div>
                           <div class="col-sm-6">
                              <div class="banner_img"><img src={bannerimg} /></div>
                           </div>
                        </div>
                     </div>
                  </div>))}
                  {/* <div class="carousel-item">
                     <div class="container">
                        <div class="row">
                           <div class="col-sm-6">
                              <h1 class="banner_taital">Beauty <br />Kit</h1>
                              <p class="banner_text">Ncididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo</p>
                              <div class="read_bt"><a href="#">Buy Now</a></div>
                           </div>
                           <div class="col-sm-6">
                              <div class="banner_img"><img src={banner} /></div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div class="carousel-item">
                     <div class="container">
                        <div class="row">
                           <div class="col-sm-6">
                              <h1 class="banner_taital">Beauty <br />Kit</h1>
                              <p class="banner_text">Ncididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo</p>
                              <div class="read_bt"><a href="#">Buy Now</a></div>
                           </div>
                           <div class="col-sm-6">
                              <div class="banner_img"><img src={banner} /></div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div class="carousel-item">
                     <div class="container">
                        <div class="row">
                           <div class="col-sm-6">
                              <h1 class="banner_taital">Beauty <br />Kit</h1>
                              <p class="banner_text">Ncididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo</p>
                              <div class="read_bt"><a href="#">Buy Now</a></div>
                           </div>
                           <div class="col-sm-6">
                              <div class="banner_img"><img src={banner} /></div>
                           </div>
                        </div>
                     </div>
                  </div> */}
               </div>
            </div>
         </div>
         {/* )) } */}
         <div className="container-fluid categary-section">
            <div class="row ">
               <div class="col-sm-12">
                  <h1 class="product_taital mt-5">Categories</h1>
               </div>
            </div>
            <div className="row">
               {categories?.map((res, index) => (<div className="col-auto col-sm-3 mt-3" onClick={() => navigator(res.id)}  >
                  {/* <Link to={"/eyeshodow/"+res.cname}> */}
                  {/* {categaryvalidation?<EyeShadow data={res.id}/>:null} */}
                  <div className="product_categories box mt-3" >
                     <img src={res.cimg} className="c-image shadow  rounded" />
                     <h3 className="c-lorem_text mt-2">{res.cname}</h3>
                  </div>
                  {/* </Link> */}
               </div>
               ))}
            </div>
         </div>
         {/* <!-- product section start --> */}
         <div class="product_section layout_padding">
            <div class="container">
               <div class="row">
                  <div class="col-sm-12">
                     <h1 class="product_taital">Our Products</h1>
                     <p class="product_text">incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
                  </div>
               </div>
               <div class="product_section_2 layout_padding">
                  <div class="row">
                     {product?.slice(0, itemToShow).map((res) => (<div class="col-lg-3 col-sm-6" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={()=>setSingleproduct(res)}>
                        <div class="product_box">
                           {/* <h4 class="bursh_text">{res.product}</h4> */}
                           {/* <p class="lorem_text">{res.content}</p> */}
                           <img src={res.image} class="image_1" />
                           <div class="btn_main">
                              <div class="buy_bt">
                                 <p>lotus harbal safes sun 3 in matte look daily sun</p>
                                 <h3 class="price_text" >${res.price}</h3>
                                 <ul>
                                    <li class="active"><a href="#"> <i class="fa fa-shopping-cart p-1"></i>Add</a></li>
                                    <li><a href="#">Buy Now</a></li>
                                 </ul>
                              </div>

                           </div>
                        </div>
                     </div>))}
                  </div>
                  <div class="seemore_bt">
                     <button onClick={showmore}>
                        {spread ? "show less" : "show more"}
                     </button>
                  </div>
               </div>
            </div>
         </div>
          {/* <!-- product section end --> */}
         {/* brand section start */}
         <div className="container-fluid categary-section mb-5">
            <div class="row ">
               <div class="col-sm-12">
                  <h1 class="product_taital ">our Brands</h1>
               </div>
            </div>
            <div className="row">
               {Brands?.map((res, index) => (<div className="col-auto col-sm-3 my-3" onClick={() => navigator(res.id)}  >
                  {/* <Link to={"/eyeshodow/"+res.cname}> */}
                  {/* {categaryvalidation?<EyeShadow data={res.id}/>:null} */}
                  <div className="product_brand box " >
                     <img src={res.bimage} className="b-image shadow  rounded" />
                     {/* <h3 className="c-lorem_text mt-2">{res.cname}</h3> */}
                  </div>
                  {/* </Link> */}
               </div>
               ))}
            </div>
         </div>
        {/* brand section end */}
         {/* <!-- about section start --> */}
         <div class="about_section layout_padding">
            <div class="container">
               <div class="about_section_main">
                  <div class="row">
                     <div class="col-md-6">
                        <div class="about_taital_main">
                           <h1 class="about_taital">About Our beauty sotore</h1>
                           <p class="about_text">labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequatlabore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequatlabore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
                           <div class="readmore_bt"><a href="#">Read More</a></div>
                        </div>
                     </div>
                     <div class="col-md-6">
                        <div><img src={about} class="image_3" /></div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         {/* <!-- about section end --> */}
         {/* <!-- customer section start --> */}
         <div class="customer_section layout_padding">
            <div class="container">
               <div class="row">
                  <div class="col-sm-12">
                     <h1 class="customer_taital">What says customers</h1>
                  </div>
               </div>
               <div id="main_slider" class="carousel slide" data-ride="carousel">
                  <div class="carousel-inner">
                     <div class="carousel-item active">
                        <div class="client_section_2">
                           <div class="client_main">
                              <div class="client_left">
                                 <div class="client_img"><img src={clientimg} /></div>
                              </div>
                              <div class="client_right">
                                 <h3 class="name_text">Jonyro</h3>
                                 <p class="dolor_text">consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation  eu </p>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div class="carousel-item">
                        <div class="client_section_2">
                           <div class="client_main">
                              <div class="client_left">
                                 <div class="client_img"><img src={clientimg} /></div>
                              </div>
                              <div class="client_right">
                                 <h3 class="name_text">Jonyro</h3>
                                 <p class="dolor_text">consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation  eu </p>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div class="carousel-item">
                        <div class="client_section_2">
                           <div class="client_main">
                              <div class="client_left">
                                 <div class="client_img"><img src={clientimg} /></div>
                              </div>
                              <div class="client_right">
                                 <h3 class="name_text">Jonyro</h3>
                                 <p class="dolor_text">consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation  eu </p>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <a class="carousel-control-prev" href="#main_slider" role="button" data-slide="prev">
                     <i class="fa fa-angle-left"></i>
                  </a>
                  <a class="carousel-control-next" href="#main_slider" role="button" data-slide="next">
                     <i class="fa fa-angle-right"></i>
                  </a>
               </div>
            </div>
         </div>
         {/* <!-- customer section end --> */}
         {/* <!-- contact section start --> */}
         <div class="contact_section layout_padding">
            <div class="container">
               <div class="row">
                  <div class="col-md-6">
                     <h1 class="contact_taital">Get In Touch</h1>
                     <p class="contact_text">Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation  eu </p>
                  </div>
                  <div class="col-md-6">
                     <div class="contact_main">
                        <div class="contact_bt"><a href="#">Contact Form</a></div>
                        <div class="newletter_bt"><a href="#">Newletter</a></div>
                     </div>
                  </div>
               </div>
            </div>
            <div class="map_main">
               <div class="map-responsive">
                  {/* <iframe src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA0s1a7phLN0iaD6-UE7m4qP-z21pH0eSc&amp;q=Eiffel+Tower+Paris+France" width="600" height="400" frameborder="0" style={{border:0, width: 100%}} allowfullscreen=""></iframe> */}
               </div>
            </div>
         </div>
         {/* <!-- contact section end --> */}
         {/* <!-- footer section start --> */}
         <div class="footer_section layout_padding">
            <div class="container">
               <div class="footer_logo"><a href="index.html"><img src={footer_logo} /></a></div>
               <div class="contact_section_2">
                  <div class="row">
                     <div class="col-sm-4">
                        <h3 class="address_text">Contact Us</h3>
                        <div class="address_bt">
                           <ul>
                              <li>
                                 <a href="#">
                                    <i class="fa fa-map-marker" aria-hidden="true"></i><span class="padding_left10">Address : Loram Ipusm</span>
                                 </a>
                              </li>
                              <li>
                                 <a href="#">
                                    <i class="fa fa-phone" aria-hidden="true"></i><span class="padding_left10">Call : +01 1234567890</span>
                                 </a>
                              </li>
                              <li>
                                 <a href="#">
                                    <i class="fa fa-envelope" aria-hidden="true"></i><span class="padding_left10">Email : demo@gmail.com</span>
                                 </a>
                              </li>
                           </ul>
                        </div>
                     </div>
                     <div class="col-sm-4">
                        <div class="footer_logo_1"><a href="index.html"><img src={footer_logo} /></a></div>
                        <p class="dummy_text">commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non</p>
                     </div>
                     <div class="col-sm-4">
                        <div class="main">
                           <h3 class="address_text">Best Products</h3>
                           <p class="ipsum_text">dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non</p>
                        </div>
                     </div>
                  </div>
               </div>
               <div class="social_icon">
                  <ul>
                     <li>
                        <a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a>
                     </li>
                     <li>
                        <a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a>
                     </li>
                     <li>
                        <a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a>
                     </li>
                     <li>
                        <a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a>
                     </li>
                  </ul>
               </div>
            </div>
         </div>
         {/* <!-- footer section end --> */}

         <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg">
               <div class="modal-content">
                  <div class="modal-header">
                     <h5 class="modal-title" id="exampleModalLabel"></h5>
                     <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                     <div className="main-section p-0">
                        {/* <section class="bg-primary padding-y-sm">
                           <div class="container">

                              <ol class="breadcrumb ondark mb-0">
                                 <li class="breadcrumb-item"><a href="#">Home</a></li>
                                 <li class="breadcrumb-item"><a href="#">Library</a></li>
                                 <li class="breadcrumb-item active" aria-current="page">Data</li>
                              </ol>

                           </div>
                        </section> */}



                        <section class="padding-y">
                           <div class="container">

                              <div class="row">
                                 <aside class="col-lg-6">
                                    <article class="gallery-wrap">
                                       <div class="img-big-wrap img-thumbnail">
                                          <a data-fslightbox="mygalley" data-type="image" href="assets/images/items/10.webp">
                                             <img height="560" src={singleproduct.image} />
                                          </a>
                                       </div>
                                       <div class="thumbs-wrap">
                                          <a data-fslightbox="mygalley" data-type="image" href="assets/images/items/10.webp" class="item-thumb">
                                             <img width="60" height="60" src={singleproduct.image} />
                                          </a>
                                          <a data-fslightbox="mygalley" data-type="image" href="assets/images/items/10.webp" class="item-thumb">
                                             <img width="60" height="60" src={singleproduct.image} />
                                          </a>
                                          <a data-fslightbox="mygalley" data-type="image" href="assets/images/items/10.webp" class="item-thumb">
                                             <img width="60" height="60" src={singleproduct.image} />
                                          </a>
                                          <a data-fslightbox="mygalley" data-type="image" href="assets/images/items/10.webp" class="item-thumb">
                                             <img width="60" height="60" src={singleproduct.image} />
                                          </a>
                                          <a data-fslightbox="mygalley" data-type="image" href="assets/images/items/10.webp" class="item-thumb">
                                             <img width="60" height="60" src={singleproduct.image} />
                                          </a>
                                       </div>
                                    </article>
                                 </aside>
                                 <main class="col-lg-6">
                                    <article class="ps-lg-3">
                                       <h4 class="title text-dark">Quality Men's Hoodie for Winter, Men's Fashion <br /> Casual Hoodie </h4>
                                       <div class="rating-wrap my-3">
                                          <ul class="rating-stars">
                                             <li style={{ width: "80%" }} class="stars-active"> <img src={singleproduct.image} alt="" /> </li>
                                             {/* <li> <img src={bannerimg} alt=""/> </li> */}
                                          </ul>
                                          <b class="label-rating text-warning"> 4.5</b>
                                          <i class="dot"></i>
                                          <span class="label-rating text-muted"> <i class="fa fa-shopping-basket"></i> 154 orders </span>
                                          <i class="dot"></i>
                                          <span class="label-rating text-success">In stock</span>
                                       </div>

                                       <div class="mb-3">
                                          <var class="price h5">${singleproduct.price}</var>
                                          <span class="text-muted">/per box</span>
                                       </div>

                                       <p>Modern look and quality demo item is a streetwear-inspired collection that continues to break away from the conventions of mainstream fashion. Made in Italy, these black and brown clothing low-top shirts for men.</p>

                                       <dl class="row">
                                          <dt class="col-3">Type:</dt>
                                          <dd class="col-9">Regular</dd>

                                          <dt class="col-3">Color</dt>
                                          <dd class="col-9">Brown</dd>

                                          <dt class="col-3">Material</dt>
                                          <dd class="col-9">Cotton, Jeans </dd>

                                          <dt class="col-3">Brand</dt>
                                          <dd class="col-9">Reebook </dd>
                                       </dl>

                                       <hr />

                                       <div class="row mb-4">
                                          <div class="col-md-4 col-6 mb-2">
                                             <label class="form-label">Size</label>
                                             <select class="form-select">
                                                <option>Small</option>
                                                <option>Medium</option>
                                                <option>Large</option>
                                             </select>
                                          </div>
                                          <div class="col-md-4 col-6 mb-3">
                                             <label class="form-label d-block">Quantity</label>
                                             <div class="input-group input-spinner">
                                                <button class="btn btn-icon btn-light" type="button">
                                                   <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="#999" viewBox="0 0 24 24">
                                                      <path d="M19 13H5v-2h14v2z"></path>
                                                   </svg>
                                                </button>
                                                <input class="form-control text-center" placeholder="" value="14" />
                                                <button class="btn btn-icon btn-light" type="button">
                                                   <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="#999" viewBox="0 0 24 24">
                                                      <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path>
                                                   </svg>
                                                </button>
                                             </div>
                                          </div>
                                       </div>

                                       <a href="#" class="btn  btn-warning"> Buy now </a>
                                       <a href="#" class="btn  btn-primary"> <i class="me-1 fa fa-shopping-basket"></i> Add to cart </a>
                                       <a href="#" class="btn  btn-light"> <i class="me-1 fa fa-heart"></i> Save </a>

                                    </article>
                                 </main>
                              </div>

                           </div>
                        </section>

                        <section class="padding-y bg-light border-top">
                           <div class="container">
                              <div class="row">
                                 <div class="col-lg-8">

                                    <div class="card">
                                       <header class="card-header">
                                          <ul class="nav nav-tabs card-header-tabs">
                                             <li class="nav-item">
                                                <a href="#" data-bs-target="#tab_specs" data-bs-toggle="tab" class="nav-link active">Specification</a>
                                             </li>
                                             <li class="nav-item">
                                                <a href="#" data-bs-target="#tab_warranty" data-bs-toggle="tab" class="nav-link">Warranty info</a>
                                             </li>
                                             <li class="nav-item">
                                                <a href="#" data-bs-target="#tab_shipping" data-bs-toggle="tab" class="nav-link">Shipping info</a>
                                             </li>
                                             <li class="nav-item">
                                                <a href="#" data-bs-target="#tab_seller" data-bs-toggle="tab" class="nav-link">Seller profile</a>
                                             </li>
                                          </ul>
                                       </header>
                                       <div class="tab-content">
                                          <article id="tab_specs" class="tab-pane show active card-body">
                                             <p>With supporting text below as a natural lead-in to additional content. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
                                             <ul class="list-check cols-two">
                                                <li>Some great feature name here </li>
                                                <li>Lorem ipsum dolor sit amet, consectetur </li>
                                                <li>Duis aute irure dolor in reprehenderit </li>
                                                <li>Optical heart sensor </li>
                                                <li>Easy fast and ver good </li>
                                                <li>Some great feature name here </li>
                                                <li>Modern style and design</li>
                                             </ul>
                                             <table class="table border table-hover">
                                                <tr>
                                                   <th>  Display: </th> <td> 13.3-inch LED-backlit display with IPS </td>
                                                </tr>
                                                <tr>
                                                   <th>  Processor capacity: </th> <td> 2.3GHz dual-core Intel Core i5 </td>
                                                </tr>
                                                <tr>
                                                   <th>  Camera quality: </th> <td>720p FaceTime HD camera  </td>
                                                </tr>
                                                <tr>
                                                   <th>  Memory </th> <td> 8 GB RAM or 16 GB RAM </td>
                                                </tr>
                                                <tr>
                                                   <th>  Graphics </th> <td> Intel Iris Plus Graphics 640 </td>
                                                </tr>
                                             </table>
                                          </article>
                                          <article id="tab_warranty" class="tab-pane card-body">
                                             Tab content or sample information now <br />
                                             Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                             tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                             quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                             consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                             cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                                             proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                             tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                             quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                          </article>
                                          <article id="tab_shipping" class="tab-pane card-body">
                                             Another tab content  or sample information now <br />
                                             Dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                             tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                             quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                             consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                             cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                                             proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                          </article>
                                          <article id="tab_seller" class="tab-pane card-body">
                                             Some other tab content  or sample information now <br />
                                             Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                             tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                             quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                             consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                             cillum dolore eu fugiat nulla pariatur.  Excepteur sint occaecat cupidatat non
                                             proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                          </article>
                                       </div>
                                    </div>

                                 </div>
                                 <aside class="col-lg-4">

                                    <div class="card">
                                       <div class="card-body">
                                          <h5 class="card-title">Similar items</h5>

                                          <article class="itemside mb-3">
                                             <a href="#" class="aside">
                                                <img src={singleproduct.image} width="96" height="96" class="img-md img-thumbnail" />
                                             </a>
                                             <div class="info">
                                                <a href="#" class="title mb-1"> Rucksack Backpack Large <br /> Line Mounts </a>
                                                <strong class="price"> $38.90</strong>
                                             </div>
                                          </article>

                                          <article class="itemside mb-3">
                                             <a href="#" class="aside">
                                                <img src={singleproduct.image} width="96" height="96" class="img-md img-thumbnail" />
                                             </a>
                                             <div class="info">
                                                <a href="#" class="title mb-1"> Summer New Men's Denim <br /> Jeans Shorts  </a>
                                                <strong class="price"> $29.50</strong>
                                             </div>
                                          </article>

                                          <article class="itemside mb-3">
                                             <a href="#" class="aside">
                                                <img src={singleproduct.image} width="96" height="96" class="img-md img-thumbnail" />
                                             </a>
                                             <div class="info">
                                                <a href="#" class="title mb-1"> T-shirts with multiple colors, for men and lady </a>
                                                <strong class="price"> $120.00</strong>
                                             </div>
                                          </article>

                                          <article class="itemside mb-3">
                                             <a href="#" class="aside">
                                                <img src={singleproduct.image} width="96" height="96" class="img-md img-thumbnail" />
                                             </a>
                                             <div class="info">
                                                <a href="#" class="title mb-1"> Blazer Suit Dress Jacket for Men, Blue color </a>
                                                <strong class="price"> $339.90</strong>
                                             </div>
                                          </article>

                                       </div>
                                    </div>

                                 </aside>
                              </div>

                              <br /><br />

                           </div>
                        </section>


                     </div>
                  </div>
                  <div class="modal-footer">
                     <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                     <button type="button" class="btn btn-primary">Save changes</button>
                  </div>
               </div>
            </div>
         </div>

      </>

   )
}