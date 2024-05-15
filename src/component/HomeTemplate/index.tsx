import { Outlet } from "react-router-dom";
import Headers from "../../layouts/Headers";
import { useEffect } from "react";
import Footer from "../../layouts/Footer";
import FooterEnd from "../../layouts/FooterEnd";


export default function HomeTemplates() {
    useEffect(()=>{
            window.addEventListener('scroll', function() {
            let navbar = document.querySelector('header');
            if (window.scrollY > 0) { 
                navbar?.classList.add('fixed-top');
            } else {
                navbar?.classList.remove('fixed-top');
            }
        });
    },[])
  return (
    <div className="homepage ">
      
       <Headers/>
       <Outlet/>
       <Footer/>
       <FooterEnd/>
    </div>
  )
}

