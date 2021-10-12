import React,{useState} from 'react'
import './App.css'
import BannerImage from './BannerImage'
import { SliderData } from './BannerSliderDtat'
import imageone from './pexels-olia-danilevich-5088179.jpg'
import imagetwo from './pexels-julia-m-cameron-4144144.jpg'
import imagethree from './pexels-monstera-6282020.jpg'
import imagefour from './pexels-olia-danilevich-5088180.jpg'
import imageoverlay from './pexels-monstera-9433152.jpg'
import { Link } from 'react-router-dom'
function Homepage() {

 const[count, setcount]=useState(0);
 const[count1, setcount1]=useState(0);
 const[count2, setcount2]=useState(0);
 const[count3, setcount3]=useState(0);
 const[boln, setboln] = useState(false);
 const[price1, setprice1] = useState(0);
 const[price2, setprice2] = useState(0);
 const[price3, setprice3] = useState(0);
 const[price4, setprice4] = useState(0);
 return (
       
      
       <div>
    
     <header> 
      <nav class="header-navigation"> 
      <div class="header-logo"><i class="fas fa-graduation-cap"></i><p className="logo-para">  Ross School </p></div>   
       <div class="header-links"> 
       <ul> 
         <Link to='/admission'> 
       <li class="list-items"> Admissions</li></Link>
       <li class="list-items"> Portal</li>
       <li class="list-items"> Contact</li>
       <li class="list-items"> Give</li> 
       
       <li class="list-items" onClick={()=>{
        setboln(!boln) 
    }}> 
       
       {boln?  <i class="fas fa-times" ></i>:<i class="fas fa-bars" ></i> }</li>
       </ul>
       <div className="sidebar-wrapper">  
       <ul className={boln ? 'sidebar':'sidebar-nav-active'}>
            <li className="sidebar-items"> Home </li>
            <li className="sidebar-items"> Discover </li>
            <li className="sidebar-items"> Learning </li>
            <li className="sidebar-items"> Programs </li>
            <li className="sidebar-items"> Inside </li>
            <li className="sidebar-items"> Admissions </li>
            <li className="sidebar-items"> Community </li></ul> 
            </div>
            
       </div>
        </nav> 
        </header>
   
        <div> 
           <BannerImage slides={SliderData}/>
           <div className="whole-welcome">
           <div className="section-richtext"> 
                 <h1 className="richtext-text"> Welcome to</h1>
                 <h1 className="richtext-two"> <strong > The Bronx Charter School for Children </strong></h1>
                 <p class="dash-line"> </p>
                 <p className="richtext-para">The Mission of The Bronx Charter school for children is to empower our children to achieve their greatest potential both as students and as members of their community</p>
         
           </div>
           <div className="cards-div"> 
              <div className="div-onefourth"> <i class="fas fa-book-open"></i> <h3 className="card-h3">Enroll</h3></div>
              <div className="div-onefourth"><i class="fas fa-chalkboard-teacher"></i> <h3 className="card-h3">Teach</h3></div>           
              <div className="div-onefourth"> <i class="fas fa-handshake"></i><h3 className="card-h3">Support</h3></div>
              <div className="div-onefourth"><i class="fas fa-tree"></i> <h3 className="card-h3">Grow</h3></div>
           </div>
        </div>
         <div className="image-gallery"> 
           <div className="gallery-section1"> 
               
              <h3 className="card-heading">Instruction </h3>
              <p className="card-para1"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged</p>
              
                </div>
                 <div className="gallery-section2">
               <h3 className="card-heading"> Resources</h3>
              <p className="card-para2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged</p>
               </div>
                 <div className="gallery-section3"> 
              <h3 className="card-heading"> Leadership</h3>
              <p className="card-para3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged</p>
              </div>
                 </div>

           <div className="information-card"> 
             
              <h2 className="informationcard-heading"> Upcoming Events</h2>
             <div className="information-inner">  
            <div className="information-inner1">
                  <img src={imageone} class="information-one"/>
                   <div className="card-information"> 
                   <h3> <strong> June Board of Trustees Meeting </strong></h3>
                   <h5 className="information-sub1"> 4:30pm on 6/17</h5>
                   <a className="information-link"> Learn More</a>
                   <h5 className="information-sub2"> Price: 50.00/ Ticket</h5>
                   <h5 className="information-sub3"> Select Quantity :</h5>
                   <i class="fas fa-minus" onClick={()=>{setcount(count-1); setprice1(price1-50) } }></i>
                 
                    {count} 
                    <i class="fas fa-plus" onClick={()=>{setcount(count+1); setprice1(price1+50)}  }></i>
                    
                     <b className="card-price"> {price1}$</b> 
                   {/* {count < 0 ? setcount(0) :{count}} */}
                   
                   </div>
                          <button class="information-btn"> Register</button>
                 </div>
                        <div className="information-inner1"> 
                       <img src={imagetwo}/>
                    <div className="card-information"> 
                     <h3> <strong> June Board of Trustees Meeting </strong></h3>
                      <h5 className="information-sub1"> 4:30pm on 6/17</h5>
                     <a className="information-link"> Learn More</a>
                   <h5 className="information-sub2"> Price: 50.00/ Ticket</h5>
                   <h5 className="information-sub3"> Select Quantity :</h5>
                   <i class="fas fa-minus" onClick={()=>{setcount1(count1-1); setprice2(price2-50)}}></i>
                 
                    {count1}
                   <i class="fas fa-plus" onClick={()=>{setcount1(count1+1); setprice2(price2+50)}}></i>
                   {/* {count < 0 ? setcount(0) :{count}} */}
                   <b className="card-price"> {price2}$</b>
                 </div>
                 <button class="information-btn"> Register</button>
              </div>
              <div className="information-inner1"> 
              <img src={imagethree}/>
              <div className="card-information"> 
                   <h3> <strong> June Board of Trustees Meeting </strong></h3>
                   <h5 className="information-sub1"> 4:30pm on 6/17</h5>
                   <a className="information-link"> Learn More</a>
                   <h5 className="information-sub2"> Price: 50.00/ Ticket</h5>
                   <h5 className="information-sub3"> Select Quantity :</h5>
                   <i class="fas fa-minus" onClick={()=>{setcount2(count2-1); setprice3(price3-50) }}></i>
                 
                    {count2}
                   <i class="fas fa-plus" onClick={()=>{setcount2(count2+1); setprice3(price3+50)}}></i>
                   {/* {count < 0 ? setcount(0) :{count}} */}
                   <b className="card-price"> {price3}$</b>
                 </div>
                 <button class="information-btn"> Register</button>
               </div>
               <div className="information-inner1"> 
               <img src={imagefour}/>
               <div className="card-information"> 
                   <h3> <strong> June Board of Trustees Meeting </strong></h3>
                   <h5 className="information-sub1"> 4:30pm on 6/17</h5>
                   <a className="information-link"> Learn More</a>
                   <h5 className="information-sub2"> Price: 50.00/ Ticket</h5>
                   <h5 className="information-sub3"> Select Quantity :</h5>
                   <i class="fas fa-minus" onClick={()=>{setcount3(count3-1); setprice4(price4-50) }}></i>
                 
                    {count3}
                   <i class="fas fa-plus" onClick={()=>{setcount3(count3+1); setprice4(price4+50)}}></i>
                   {/* {count < 0 ? setcount(0) :{count}} */}
                   <b className="card-price"> {price4}$</b> 
                 </div>
                 <button class="information-btn"> Register</button>            
                </div>
             </div>
             <button> See All  Events</button>
           </div>   
                 <div class="imageoverlay-div">
                 
                 {/* <img src={imageoverlay} class="imageoverlay" /> */}
                  <div className="div-wrap">
                   <h1 className="imageoverlay-h1"> We need your support! </h1>
                  <h3 className="imageoverlay-h3"> The BCSC is working harder than ever to ensure that our scholars recieve intensive academic interventions and extended learning opportunities</h3>
                  <button className="imageoverlay-btn"> Donate </button>
                  </div>
                   
                  
                </div>

            <div className="contact-form">
               <h2 class="heading-center"> Connect With Us</h2>
               <form class="connect-form"> 
                 <div className="form-wrap"> 
                  <h2> Keep in touch</h2>
                  <p> Sign up for our newsletter</p>
                  </div>
                <input class="form-input" type="text" placeholder="Name" /><br/>
                <input class="form-input" type="text" placeholder="Email"/><br/>
                <button className="form-btn"> Subscribe</button>    
                     
              </form> 
                
                </div> 
           <footer>
             <div className="upper-half"> 
               <div className="footer-logo"> 
               <i class="fas fa-graduation-cap"></i> ROSS SCHOOL
               </div>
               <div className="social-icons"> 
               <i class="fab fa-facebook-f"></i>
               <i class="fab fa-instagram"></i>
               <i class="fab fa-linkedin-in"></i>
               <i class="fab fa-youtube"></i>
               </div>
             </div>
             <div className="middle-half"> 
                    <div className="footer-aboutus">
                     <h6 className="footer-aboutheading"> ABOUT US</h6>
                     <p className="footer-aboutpara"> Our mission is to change the way education meets the future; to foster interdisciplinary, integrated thinking and innovative leadership; to engage fully in the global community; and to facilitate lifelong learning.

                     </p>
                    </div>
                     <div className="contact-links">
                       <ul> <h6 className="footer-aboutheading"> CONTACT</h6>
                            <li className="footer-links"> School:071-345-3456 </li>
                            <li className="footer-links"> Summer:071-345-3456 </li>
                            <li className="footer-links"> Tennis:071-345-3456 </li>
                            <li className="footer-links"> 18 Goodfriend Drive
                                East Hampton, NY 11937 </li>  </ul>
                      <ul className="second-footerlinks"> <h6 className="footer-aboutheading"> QUICK LINKS</h6>
                      <li className="footer-links2"> Contact </li>
                      <li className="footer-links2"> Apply </li>
                      <li className="footer-links2"> Visit </li>
                      <li className="footer-links2"> Portal </li>
                       </ul>

                     </div>
   
             </div>
             <div className="lower-half"> 
               <div className="footer-copyright"> 
               <h6 className="footer-privacyheading"> Privacy Policy</h6>
               <p> @Ross School</p></div>
               <div> </div>
             </div>
           </footer>
          </div>
         </div>
         
    )
}

export default Homepage
