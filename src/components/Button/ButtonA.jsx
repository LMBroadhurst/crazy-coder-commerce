import "./ButtonA.css";

const BUTTON_STYLES = {
  default: "default-btn-styling",
  google: "google-sign-in",
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