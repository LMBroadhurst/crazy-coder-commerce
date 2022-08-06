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
          className={`${BUTTON_STYLES[buttonStyle]}`}
          {...otherProps}
        >
        {text}
        </button>
    </>
  )
}

export default ButtonA