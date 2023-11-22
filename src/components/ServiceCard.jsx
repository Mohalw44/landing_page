

const ServiceCard = ({ imgURL, label, subtext}) => {
  return (
    <div className="flex-1 sm:w-[350px]
    sm:min-w-[350px] w-full rounded-[20px]
     shadow-3xl px-10 py-16">
        <div 
        className="bg-coral-red w-11 h-11 
                    rounded-full flex
                    justify-center items-center">
                    <img 
                    src={imgURL}
                    alt={label}
                    width={24}
                    height={24} />
        </div>
        <h3 className="mt-6 font-palanquin text-3xl font-semibold leading-normal">{label}</h3>
        <p className="mt-4 break-words font-montserrat 
        leading-normal 
        text-lg text-slate-gray">{subtext}</p>
    
    </div>
  )
}

export default ServiceCard