import {useState} from "react"
import Navbar from "./Component/Navbar"
import Home from "./Component/Home"
import Services from "./Component/Services"
import Technology from "./Component/Technology"
import Getintouch from "./Component/Getintouch"
import Footer from "./Component/Footer"
import Copyright from "./Component/Copyright"
import { BrowserRouter,Routes,Route } from "react-router-dom"
import Aboutus from "./Component/Aboutus"
export default function  App(){
  const [color,setColor]=useState(false)
  return <div className={`w-full ${color?"bg-black":"bg-white"}`}>
           <BrowserRouter>
              <Navbar color={color} setColor={setColor}/>
               <Routes>
                    <Route path="/"
                       element={ 
                        <>
                        <Home/>
                        <Services/>   
                        <Technology/>
                        <Getintouch/>
                        <Footer/>
                        <Copyright/>
                        </>
                       } />
               
                    <Route path="/about-us" element={<Aboutus/>}/>
              </Routes>
            </BrowserRouter>
         
         </div>
}