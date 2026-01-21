import  PointerHighlight  from "../components/ui/PointerHighlight";
import phoneui from "../Images/phoneui.avif"
import desktopui from "../Images/desktopui.avif"
export default function Home(){
    return  <div className="md:flex md:flex-row md:w-full md:justify-between mt-16">
                  <div className="flex md:justify-center justify-center items-center mx-auto">
                           <div className=" md:text-base font-bold text-base justify-center">
                                  <div className="text-4xl"><span className="text-[100px]">W</span>e build the </div>
                                    <PointerHighlight
                                        rectangleClassName="bg-green-100 dark:bg-green-900 border-green-300 dark:border-green-700 leading-loose"
                                        pointerClassName="text-green-500 h-3 w-3"
                                        containerClassName="inline-block ml-1">
                                        <div className="relative z-10 text-3xl flex flex-col w-86 left-0">
                                            <div>MVPs that launch startups and</div>
                                            <div>the websites that scale</div>
                                        </div>
                                    </PointerHighlight>
                           </div>       
                  </div>
                   <div className=" ">
                           <div className="relative">
                                 <img className="relative md:h-[500px] md:w-[700px] "src={desktopui} alt="" />
                                 <img className="absolute md:h-[400px] md:w-[220px] md:w-1/3 top-0 left-0 drop-shadow-2xl border-2 border-gray-200 rounded-xl "src={phoneui} alt="" />
                           </div>
                  </div>
               
           </div>
}   