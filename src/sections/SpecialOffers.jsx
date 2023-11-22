import { arrowRight } from "../assets/icons"
import { offer } from "../assets/images"
import Button from "../components/Button"


const SpecialOffers = () => {
  return (
    <section className="flex justify-wrap
    items-center max-xl:flex-col-reverse
    gap-10 max-container ">
      <div className="flex-1">
        <img 
          src={offer}
            width={773}
            height={687}
            className="object-contain w-full"
          />
      </div>
      <div className="flex flex-1 flex-col ">
    <h2 className="mt-10 font-palanquin 
    text-4xl font-bold capitalize" >
    <span className="text-coral-red">Special</span> Offers
    </h2>
      <p 
      className="mt-4 lg:max-w-lg info-text">
      Lorem ipsum dolor sit amet, 
      consectetur adipiscing elit. 
      Suspendisse lacus urna, rhoncus eu orci ut, 
      malesuada venenatis dui.
     </p>
    

    <div className="flex gap-8 items-center mt-11">
      <Button 
      lable='Shop Now'
      iconUrl={arrowRight}
        />
      <Button 
        lable="Learn more"
        backgroundColor="bg-white"
        borderColor="border-slate-grey"
        textColor="text-slate-grey"
        />
      </div>
    
      </div>
      
    </section>
  )
}

export default SpecialOffers