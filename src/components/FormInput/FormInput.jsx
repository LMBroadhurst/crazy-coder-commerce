

const FormInput = ( {placeholder, ...otherProps} ) => {
  return (
    <>
        <input 
            placeholder={placeholder} 
            className="my-2 py-3 text-xl text-center rounded-lg border-2 border-slate-300 md:text-3xl" 
            {...otherProps}
        />
    </>
  )
}

export default FormInput;