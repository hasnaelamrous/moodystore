
import vase from '../Images/vase.png';
import chaiseb from '../Images/chaiseb.png';
import decore from '../Images/decore.png';
import linen from '../Images/linen.png';
import boite from '../Images/boite.png';
import fond from '../Images/fond.png';
import assiete from '../Images/assiete.png';
import panier from '../Images/panier.png';
import boitea from '../Images/boitea.png';
import coussin from '../Images/coussin.png';


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
      title: "Square Clear Glass Box",
      prix: 30,
      img: boite
    },
    {
      id: 3,
      title: "4-pack Small Ceramic Plates",
      prix: 30,
      img: assiete
    },
    {
      id: 4,
      title: "Produit 4",
      prix: 30,
      img: boitea
    },
     {
      id: 5,
      title: "Produit 4",
      prix: 30,
      img: boitea
    },
     {
      id: 6,
      title: "Produit 4",
      prix: 30,
      img: boitea
    }
    
  ];



  const productB = [
    {
      id: 1,
      title: "HELO",
      prix: 30,
      img: coussin
    },
    {
      id: 2,
      title: "Square Clear Glass Box",
      prix: 30,
      img: coussin
    },
    {
      id: 3,
      title: "4-pack Small Ceramic Plates",
      prix: 30,
      img: coussin
    },
    {
      id: 4,
      title: "Produit 4",
      prix: 30,
      img: boitea
    },
     {
      id: 5,
      title: "Produit 4",
      prix: 30,
      img: coussin
    },
     {
      id: 6,
      title: "Produit 4",
      prix: 30,
      img: coussin
    }
    
  ];




 
  return (

    <>
<section className="section1">
       <div className="grid grid-cols-2 gap-4 w-full"style={{ fontFamily: 'Roboto, sans-serif', fontWeight: '700' }}>
  
  
    <div className="  flex  h-[368px] bg-[#FAFAFA]">
      <img src={chaiseb}  alt="chaiseb" />
      <div className="p-4 flex flex-col justify-center w-1/2">
         <h5 className="mb-4" >INY VINTAGE CHAIR</h5>
        
           <button className="mt-4 w-[124px] h-[48px]  border border-solid border-[#323334] cursor-pointer hover:bg-sky-700 hover:text-white transition">
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
</section>

<section className="produita">
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
<div className='flex'>
<img src={panier} alt="decore" />
</div> 
   </div>

</section>
<section className="hero2 relative w-full h-auto">

   


       <div className="relative w-full">
        <img src={fond}/>
    
 <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center px-4 bg-white  ">
          <h1
             style={{ fontFamily: 'Roboto, sans-serif', fontWeight: '700' }} className="text-3xl text-[#323334]" >
             BEDSHEET SETS
           </h1>
           <p style={{ fontFamily: 'Roboto, sans-serif', fontWeight: '700' }} className="text-[#323334]">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
  </p>


  <button className={`w-[124px] h-[48px]  border border-solid border-[#323334]  cursor-pointer  hover:text-white  transition`}>
    VIEW NOW
  </button>
  </div>
  </div>

</section>





 <section className="produitb">


    <div className=" grid grid-cols-4  gap-4 mt-4">

  {productB.map(productB => (
  <div className=" " key={productB.id}>
    <div className="flex ">
      <img src={productB.img} className="w-[198px] h-[308px]" alt={productB.title} />
      <div className="">
        <h5 className="">{productB.title}</h5>
        <p className="">{productB.prix} $</p>
        <a href="#" className="">VIEW DETAILS</a>
      </div>
    </div>
  </div>
  
))}

   </div>



 </section>


 
      
    </>
  );
}

export default Main;
