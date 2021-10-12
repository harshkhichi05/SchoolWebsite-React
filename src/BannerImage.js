import React,{ useState }from 'react'
import { SliderData } from './BannerSliderDtat'
import {FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa'



const BannerImage = ({slides}) => {

    const[current, setcurrent] = useState(0);
    const length = slides.length;

    const nextslide=()=>{
        setcurrent(current===length ? 0 : current+ 1)
    }
   
    const prevslide= ()=>{
        setcurrent(current=== 0 ? length-1 : current-1)
    }
    if(!Array.isArray(slides) || slides.length <=0){
        return null;
    }
    
    return (
        <section className="slider">
        {/* <FaArrowAltCircleLeft className="left-arrow" onClick={prevslide}/> */}
        <i class="fas fa-chevron-left" onClick={prevslide}></i>
        {/* <FaArrowAltCircleRight className="right-arrow" onClick={nextslide}/> */}
        <i class="fas fa-chevron-right" onClick={nextslide}></i>
          { SliderData.map((slide,index)=>{
          return (
          
          <>
          <div className={index===current ? 'slide active' : 'slide'} key={index}>
           {index===current && (<img src={slide.image} alt="travel-img" className="image"/>)}  
           <div className="image-content" key={index}>    
           <h2 className="banner-heading"> {slide.h3}</h2>
           <p className="banner-text"> {slide.p}</p> 
           <button className="banner-btn">{slide.button}</button> 
           </div>

               </div>
        
         </>
          )
        })}  
        </section>
    )
}

export default BannerImage
