

import {Link, NavLink} from "react-router-dom"
import { rendernavbar } from "../../root"
import { useEffect, useState } from "react"
import { useAppDispatch } from "../../store/hook"
import { setCurrentUser } from "../../store/slice"





export default function Header() {
  const user = ()=>{
    const user =  localStorage.getItem("user")
    return user
  }
 
  const removeUser=()=>{
      return localStorage.removeItem("user")
  }
  const [found,setFound] = useState(false)
  
  useEffect(()=>{
    if(user()){
      setFound(true)
    }else{
      setFound(false)
    }
  },[user()])
  const dispatch = useAppDispatch()

  return (
   
 <header className="relative ">
  <nav className="container">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto ">
    <Link  to={"/"} className="logo">
    <span className="mt-2">tieusau</span>
          <span>
            <i className="fa-solid fa-film ml-2" />
          </span>
    </Link>
    <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
      <span className="sr-only">Open main menu</span>
      <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h15M1 7h15M1 13h15" />
      </svg>
    </button>
    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul className="font-medium flex flex-col p-4 md:p-0 mt-4  rounded-lg  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 relative">
        {rendernavbar()}
        {!found && (
          <li >
          <NavLink
            to={"auth/signin"}
            className={"block py-2 px-3 text-white  md:p-0 login"}
          >
            Sign in
          </NavLink>
        </li>
        )}
        {found && (
            <button onClick={()=>{
              removeUser();
              user();
              dispatch(setCurrentUser(null));
              setFound(false);
             }} className="login block py-2 px-3 text-white text-xl  md:p-0 ">Log out</button>
        )}
      </ul>
    </div>
  </div>
</nav>
 </header>

  

  
  


    
  )
}

