import { star } from "../assets/icons"
const PopularProductsCard = ({ imgURL, name, price}) => {
   
  
    
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full">
        <img 
        src={imgURL}
        className="w-[280px] h-[280px]"    
        />
        <div className="mt-8 flex justify-start gap-2.5">
        <img 
        src={star}
        alt="rating"
        width={24}
        height={24} />

        <p className="font-montserrat leading-normal text-lg text-slate-gray">(4.5)</p>
        </div>
        <p className="mt-4 text-2xl leading-normal font-semibold font-palanquin">{name}</p>
        <p className="mt-2 text-coral-red font-montserrat font-semibold text-2xl leading-normal ">{price}</p>
    </div>
  )
}

export default PopularProductsCard