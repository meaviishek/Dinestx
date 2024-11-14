import { MdContacts } from "react-icons/md";
import { MdOutlineEmail } from "react-icons/md";
import { MdCall } from "react-icons/md";
import { RiWhatsappLine } from "react-icons/ri";

function Floating() {
  return (
    <div> <div className="group fixed z-10 bottom-16 right-0 lg:bottom-4 lg:right-4 p-2 flex items-end justify-end w-24 h-24 animate-pulse">
    {/* main button */}
    <div className="text-white shadow-xl flex items-center justify-center p-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 z-40 absolute">
<MdContacts color="white" size='30px'/>
</div>
    {/* sub left */}
 
    <div className="absolute rounded-full transition-all duration-[0.2s] ease-out scale-y-0 group-hover:scale-y-100 group-hover:-translate-x-16 flex p-2 hover:p-3 bg-green-300 scale-100 hover:bg-green-400 text-white">
    <a href="https://wa.me/8409031739"> <RiWhatsappLine size="25px"/></a>

    </div>


    {/* sub top */}
    <div className="absolute rounded-full transition-all duration-[0.2s] ease-out scale-x-0 group-hover:scale-x-100 group-hover:-translate-y-16 flex p-2 hover:p-3 bg-blue-300 hover:bg-blue-400 text-white">
    <a href="mailto:dinestx@gmail.com" > <MdOutlineEmail size="25px"/></a>
    </div>


    {/* sub middle */}
    <div className="absolute rounded-full transition-all duration-[0.2s] ease-out scale-x-0 group-hover:scale-x-100 group-hover:-translate-y-14 group-hover:-translate-x-14 flex p-2 hover:p-3 bg-yellow-300 hover:bg-yellow-400 text-white">
    <a href="tel:8936860540" > <MdCall size="25px"/></a>
    </div>

  </div></div>
  )
}

export default Floating