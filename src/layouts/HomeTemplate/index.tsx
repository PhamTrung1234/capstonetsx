import { Outlet } from "react-router-dom";
import Headers from "../../component/Headers";
import { useEffect } from "react";
import Footer from "../../component/Footer";
import FooterEnd from "../../component/FooterEnd";


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

