

const FormInput = ( {placeholder, ...otherProps} ) => {
  return (
    <>
        <input 
            placeholder={placeholder} 
            className="my-3 text-3xl text-center" 
            {...otherProps}
        />
    </>
  )
}

export default FormInput;