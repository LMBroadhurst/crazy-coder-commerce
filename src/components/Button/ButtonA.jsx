
const BUTTON_STYLES = {
  default: "bg-black text-white",
  google: "bg-blue-600 text-white hover:bg-blue-300 hover:text-blue-900",
  inverted: "inverted"
}


const ButtonA = ( {type, buttonStyle, text, ...otherProps} ) => {
  return (
    <>
        <button 
          type={type}
          className={`${BUTTON_STYLES[buttonStyle]} p-4 rounded-lg my-2 text-xl md:text-2xl`}
          {...otherProps}
        >
        {text}
        </button>
    </>
  )
}

export default ButtonA