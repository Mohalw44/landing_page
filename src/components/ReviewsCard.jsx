import { star } from "../assets/icons"


const ReviewsCard = ({imgURL, customerName, rating, feedback}) => {
  return (
    <div className="flex justify-center items-center flex-col">
        <img src={imgURL}
             alt={customerName}
             className="rounded-full object-contain w-[120px] h-[120px]"/>
        <p className="mt-6 max-w-sm text-center info-text">
        {feedback}
        </p>
        <div className="flex mt-4 justify-center items-center gap-2.5">
        <img 
        src={star}
         width={24}
         height={24}
         className="object-contain m-0"   
        />
        <p className="text-xl font-montserrat text-slate-gray">({rating})</p> 
        </div>
         
        <div>
            <h3 className="mt-1 font-palanquin text-3xl font-bold text-center">{customerName}</h3>
        </div>   
    </div>
  )
}

export default ReviewsCard