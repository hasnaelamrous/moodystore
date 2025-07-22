
import vase from '../Images/vase.png';
import chaiseb from '../Images/chaiseb.png';
import decore from '../Images/decore.png';
import linen from '../Images/linen.png';
import boite from '../Images/boite.png';
import fond from '../Images/fond.png';


function Main() {

  const product = [
    {
      id: 1,
      title: "Linen beach towel",
      prix: 30,
      img: linen
    },
    {
      id: 2,
      title: "boite",
      prix: 30,
      img: boite
    },
    {
      id: 3,
      title: "Produit 3",
      prix: 30,
      img: vase
    },
    {
      id: 4,
      title: "Produit 4",
      prix: 30,
      img: vase
    },
     {
      id: 5,
      title: "Produit 4",
      prix: 30,
      img: vase
    },
     {
      id: 6,
      title: "Produit 4",
      prix: 30,
      img: vase
    }
    
  ];
 
  return (

    <>

       <div className="grid grid-cols-2 gap-4 w-full"style={{ fontFamily: 'Roboto, sans-serif', fontWeight: '700' }}>
  
  
    <div className="  flex  h-[368px] bg-[#FAFAFA]">
      <img src={chaiseb}  alt="chaiseb" />
      <div className="p-4 flex flex-col justify-center w-1/2">
         <h5 className="mb-4" >INY VINTAGE CHAIR</h5>
        
           <button className="mt-4 w-[124px] h-[48px]  border border-solid border-[#323334] hover:bg-[#A86A3D] hover:text-white transition">
    VIEW DETAILS
  </button>
       </div>
  </div>
  
    <div className=" flex  h-[368px] bg-[#EAE9E7]">
      <img src={vase} alt="Vase" />
      <div className="p-4 flex flex-col justify-center w-1/2">
        <h5 className="mb-4">LARGE TERACOTA VASE</h5>
        
     <button className="mt-4 w-[124px] h-[48px]  border border-solid border-[#323334] hover:bg-[#A86A3D] hover:text-white transition">
    VIEW DETAILS
  </button>
      </div> 
  </div>

</div>

     <div className="grid grid-cols-4  gap-4 mt-4">
      <div className=" flex">
<img src={decore} alt="decore" />
</div>
  {product.map(product => (
  <div className="" key={product.id}>
    <div className="">
      <img src={product.img} className="" alt={product.title} />
      <div className="">
        <h5 className="">{product.title}</h5>
        <p className="">{product.prix} $</p>
        <a href="#" className="">VIEW DETAILS</a>
      </div>
    </div>
  </div>
  
))}

   </div>
<div>
<img src={decore} alt="decore" />
</div> 
 


 
      
    </>
  );
}

export default Main;
