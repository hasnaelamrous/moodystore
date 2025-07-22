import chaise from '../Images/chaise.png';
import vase from '../Images/vase.png';
function Hero() {

  return (
   <>
     
  <div className="bg-[#DBD0CCCC]  my-5 w-full h-[566px] ">
    <div className=" mx-auto flex flex-col md:flex-row  gap-8">
         <div className="md:w-1/2 md:py-10 text-[#f97316] ">
        <img src={chaise} alt="Vector" classNameName="h-5" />
       </div>

        <div className="md:w-1/2 p-4 flex flex-col justify-center space-y-4">
  <p style={{ fontFamily: 'Roboto, sans-serif', fontWeight: '700' }} className="text-[#323334]">
    HOT DEALS THIS WEEK
  </p>

  <h1
    style={{ fontFamily: 'Roboto, sans-serif', fontWeight: '700' }}
    className="text-3xl text-[#A86A3D]"
  >
    SALE UP 50% <br />MODERN FURNITURE.
  </h1>

  <button className="w-[124px] h-[48px]  border border-solid border-[#323334] hover:bg-[#A86A3D] hover:text-white transition">
    VIEW NOW
  </button>
</div>

    
      
    </div>
  </div>
    
   

   
   
   </>
  );
}

export default Hero;