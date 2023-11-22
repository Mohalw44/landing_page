import { shoe8 } from "../assets/images"
import Button from "../components/Button"

const SuperQaulty = () => {
  return (
    <section id="about-us"
    className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
    <div className="flex flex-1 flex-col ">
    <h2 className="mt-10 font-palanquin 
    text-4xl font-bold capitalize" > 
    We provide you <span className="text-coral-red">Super</span>
    <br/> 
    <span className="text-coral-red">Qaulty</span> shoes
    </h2>
      <p 
      className="mt-4 lg:max-w-lg info-text">
      Lorem ipsum dolor sit amet, 
      consectetur adipiscing elit. 
      Suspendisse lacus urna, rhoncus eu orci ut, 
      malesuada venenatis dui.
     </p>
    <div className="mt-11">

    <Button 
    lable='View details'
      />
      </div>
      </div>
      <div className="flex flex-1 justify-center items-center">
        <img 
        src={shoe8}
        width={570}
        height={522}
        className="object-contain"
        /> 

      </div>
    

    </section>
  )
}

export default SuperQaulty
