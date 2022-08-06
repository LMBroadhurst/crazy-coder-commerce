

const FormInput = ( {placeholder, ...otherProps} ) => {
  return (
    <>
        <input 
            placeholder={placeholder} 
            className="my-2 py-4 text-3xl text-center rounded-lg" 
            {...otherProps}
        />
    </>
  )
}

export default FormInput;