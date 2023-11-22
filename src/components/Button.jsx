const Button = ({ lable, iconUrl, backgroundColor, borderColor, textColor, fullWidth}) => {
  const style ={
    backgroundColor,
    borderColor,
    textColor
  }
  const styleRender = backgroundColor ? style : `leading-none bg-coral-red 
  text-white border-coral-red`
  return (
     
    <button 
    className={`flex justify-center items-center gap-2 
                px-7 py-4 border font-montserrat text-lg 
                ${styleRender} rounded-full ${fullWidth && `w-full`} `} >
    {lable}
    {iconUrl && <img 
    src={iconUrl}
    alt="arrow right icon"
    className="ml-2 rounded-full w-5 h-5"

    />}
    </button>
    
  )
}

export default Button