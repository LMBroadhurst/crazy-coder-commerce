
const BUTTON_STYLES = {
  default: "bg-black text-white p-4 hover:bg-vLightBlue hover:text-black",
  google: "bg-blue-600 text-white p-4 hover:bg-blue-300 hover:text-blue-900",
  glowGreen: "bg-glowGreen text-white p-4 hover:bg-green-600 hover:text-black",
  warning: "bg-red-600 text-white px-4 py-2 border-4 border-red-600 hover:bg-white hover:text-red-900",
  promoCard: "bg-glowGreen w-1/2 mt-2 text-white p-2 hover:bg-green-600 hover:bg-vibrantPurple hover:scale-95 md:self-start"
}


const ButtonA = ( {type, buttonStyle, text, ...otherProps} ) => {
  return (
    <>
        <button 
          type={type}
          className={`${BUTTON_STYLES[buttonStyle]} rounded-lg my-2 text-xl md:text-2xl transition-all duration-300`}
          {...otherProps}
        >
        {text}
        </button>
    </>
  )
}

export default ButtonA