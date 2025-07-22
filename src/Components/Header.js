import Vector1 from '../Images/Vector1.png';
import Groupe40 from '../Images/Group 40.png';
import Groupe from '../Images/Group.png';
import Vector from '../Images/Vector.png';
import Vector2 from '../Images/Vector2.png';
import Vector3 from '../Images/Vector3.png';
import Vector4 from '../Images/Vector4.png';


function Header() {
  return (
    <div className="App">
      
     <nav style={{ fontFamily: 'Roboto, sans-serif', fontWeight: '700'  }} className= "text-[#323334] p-8 bg-white  md:flex flex-col md:items-center md:justify-between">
        <div className="flex justify-between items-center w-full">
        <div className="text-2xl  font-bold">
        MOODY STUDIO
      </div>
     <ul className="flex items-center space-x-8">
      <li class="">
        <a href="#" className=""><img src={Vector1} alt="Vector" className="h-5" /> </a>
      </li>
      <li className="">
        <a href="#" className=""><img src={Groupe40} alt="Vector" className="h-5" /> </a>
      </li>
      <li className="">
        <a href="#" className=""><img src={Groupe} alt="Vector" className="h-5" /></a>
      </li>
      <li className="">
        <a href="#" className=""><img src={Vector} alt="Vector" className="h-5" /></a>
      </li>
    </ul>
    </div>
    <div className="flex-col justify-between">
    <hr className="w-[1190px] border-t border-gray-300 my-2 mx-auto " />
   <ul className="flex justify-center mt-4 space-x-10 " >
    <li className=""><a href=''>HOME</a></li>
     <li className=""><a href=''>STORE</a></li>
      <li className=""><a href=''>ACCESSORIES</a></li>
       <li className=""><a href=''>BRAND</a></li>
        <li className=""><a href=''>PAGES</a></li>
         <li className=""><a href=''>ABOUT US</a></li>
          <li className=""><a href=''>NEWS</a></li>
           <li className=""><a href=''>CONTACT US</a></li>
   </ul>
    <hr className="w-[1190px] border-t border-gray-300 my-2 mx-auto " />
 </div>

 <ul className="flex justify-center space-x-30" style={{ color:'#00000080' }}>
      <li className="">
        <a href="#" className="flex items-center gap-2"><img src={Vector2} alt="Vector" className="h-5" />FREE SHIPPING </a>
      </li>
      <li className="">
        <a href="#" className="flex items-center gap-2"><img src={Vector4} alt="Vector" className="h-5" />100% MONEY BACK</a>
      </li>
      <li className="">
        <a href="#" className="flex items-center gap-2"><img src={Vector3} alt="Vector" className="h-5" />SUPPORT 24/7</a>
      </li>
    </ul>
  </nav>

  
 </div>
  );
}

export default Header;