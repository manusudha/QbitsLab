import {useNavigate} from "react-router-dom"
export default function Footer(){
    const navigate=useNavigate();
    return <div id="footer" className="m-auto mx-auto mt-12 py-8 md:py-12 lg:py-16 w-full px-4 md:px-6 lg:px-8 text-sm">
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-10">
                                {/*-------------------------*/}
                                <div className="flex flex-col gap-6  ">
                                    <p className="text-xl font-bold flex">Kagaj<p className="text-[#6E2DFA]">Lab</p></p>
                                    <p className="text-gray-500 ">Crafting Extraordinary Digital Experiences for Growing Brands</p>
                                    <div className="flex flex-col gap-2">
                                        <div className="flex flex-row gap-2 text-gray-500">
                                                    <svg class="w-4 h-4 text-[#6E2DFA]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg> 
                                                    <p>lab.qbits@gmail.com</p>
                                        </div>
                                        <div className="flex flex-row gap-2 text-gray-500">
                                               { /*<svg class="w-4 h-4 text-[#6E2DFA]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                                                <p>+91 7208752532</p>*/}
                                        </div>
                                        <div className="flex flex-row gap-2 text-gray-500">
                                                <svg class="w-4 h-4 text-[#6E2DFA]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                                                <p>Mumbai, Maharashtra, India</p>
                                        </div>
                                    </div>


                                </div>
                                {/*-------------------------*/}
                                <div className="flex flex-col gap-4">
                                    <p className="text-black text-xl font-semibold">Company</p>
                                    <div className="flex flex-col text-gray-500 gap-2">
                                        <p onClick={()=>navigate("/about-us",{replace:true})} className="cursor-pointer">About Us</p>
                                        <p>Contact</p>
                                    </div>

                                </div>
                                {/*-------------------------*/}
                                {/*<div className="flex flex-col gap-4">                      
                                    <p className="font-semibold text-black text-xl">Resources</p>
                                    <div className="flex flex-col gap-2 text-gray-500">
                                            <p>Blog</p>
                                            <p>Case Studies</p>
                                            <p>App Portfolio</p>
                                            <p>Website Portfolio</p>
                                            <p>Design Portfolio</p>
                                            <p>Cosulting Portfolio</p>
                                            <p>Our Products</p>
                                    </div>

                                </div>*/}
                                {/*-------------------------*/}
                                <div className="flex flex-col gap-4 ">
                                    <p className="text-xl font-semibold">Services</p>
                                    <div className="flex flex-col gap-2 text-gray-500">
                                        <p>Mobile App Development</p>
                                        <p>Web Development</p>
                                        <p>AI Integration</p>
                                        <p>UI/UX Design</p>
                                        <p>Quality Assurance</p>
                                    </div>
                                </div>
                                {/*-----------------------*/}
                                <div className="flex flex-col gap-4">
                                    <p className="text-xl font-semibold">Legal</p>
                                    <div className="flex flex-col text-gray-500 gap-2">
                                            <p>Privacy Policy</p>
                                            <p>Terms of Service</p>
                                    </div>
                                </div>
                          </div>

          </div>
}