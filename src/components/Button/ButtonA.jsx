
const BUTTON_STYLES = {
  default: "bg-black text-white p-4",
  google: "bg-blue-600 text-white p-4 hover:bg-blue-300 hover:text-blue-900",
  glowGreen: "bg-glowGreen text-white p-4 hover:bg-green-600 hover:text-black",
  inverted: "inverted",
  warning: "bg-red-600 text-white px-4 py-2 border-4 border-red-600 hover:bg-white hover:text-red-900"
}


const ButtonA = ( {type, buttonStyle, text, ...otherProps} ) => {
  return (
    <>
        <button 
          type={type}
          className={`${BUTTON_STYLES[buttonStyle]} rounded-lg my-2 text-xl md:text-2xl`}
          {...otherProps}
        >
        {text}
        </button>
    </>
  )
}

export default ButtonA