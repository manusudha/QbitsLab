import {useState} from "react"
import { HashLink as Link } from 'react-router-hash-link';
import Qbitlogo from "../Images/qbitslogo.avif"
export default function Navbar({setColor,color}){
const [isActive,setIsActive ]=useState(false)
    return <div className="flex justify-center items-center">
                  <div className="border-2 border-dashed  w-96 h-12 border-blue-500 flex justify-between items-center flex-row mt-2 rounded-md md:w-[1400px]">
                     <span className="w-24 h-24  "><img src={Qbitlogo} alt="" type="image/avif"/></span>
                     <span className="md:hidden ">
                           {/*<svg onClick={()=>{setIsActive(!isActive)}} className="cursor-pointer z-50 relative w-12 h-12" xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 16 16"><path fill="#000000" fill-rule="evenodd" d="M2 3.75A.75.75 0 0 1 2.75 3h10.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 3.75M2 8a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 8m0 4.25a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75" clip-rule="evenodd"/></svg>*/}
                            <div className={` duration-700  ease-in-out transform transition-transform absolute left-0 min-h-[30vh] left-0 top-[8%] w-full z-40 bg-white  border-1 border-blue-100 ${isActive?"opacity-100 translate-y-0":"opacity-0 -translate-y-10 pointer-events-none"}`}>
                                             <ul className="flex flex-col  md:flex-row  rounded-md backdrop-opacity-10  gap-4 justify-between items-center ">
                                                <li className="w-[40px] h-[40px]  flex justify-center items-center border-2 border-gray-200 rounded-full"><svg className="bg-gray-100 backdrop-opacity-10" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-moon h-4 w-4 text-neutral-500 dark:text-neutral-500"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path></svg></li>
                                                <span className="flex flex-row justify-between w-full"><li className=" justify-center items-center text-center ">Services</li><li className="mr-4"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16"><path fill="#000000" fill-rule="evenodd" d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06" clip-rule="evenodd"/></svg></li></span>
                                                <li className="w-full left-0 bottom-0  text-blue-900 ">Technology Stack</li>
                                                <li> </li>
                                             </ul>
                                        </div>
                           
                     </span>
                     <span className="hidden md:flex md:justify-between md:w-96 ">
                          <ul className="md:flex md:flex-row justify-between md:w-96 md:text-center md:my-auto">
                               {/*<li className="w-[30px] h-[30px]   flex justify-center items-center border-2 border-gray-200 rounded-full md:text-center md:text-[20px] md:text-[20px] md:text-blue-700 md:cursor-pointer" onClick={()=>setColor(!color)}><svg className="bg-gray-100 backdrop-opacity-10" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-moon h-4 w-4 text-neutral-500 dark:text-neutral-500"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path></svg></li>*/}
                               <Link smooth to="#services" className="cursor-pointer md:text-center md:my-auto md:text-[20px]  text-[#6E2DFA]">Services</Link>
                               <Link smmoth to="#technology"className="cursor-pointer md:text-center md:my-auto md:text-[20px]  text-[#6E2DFA] pr-4">Technology Stack</Link>
                               <Link smmoth to="#getintouch"className="cursor-pointer md:text-center md:my-auto md:text-[20px]  text-[#6E2DFA] pr-4">Contact us</Link>
                          </ul>
                     </span>
                  </div>
           </div>
    
         
}

