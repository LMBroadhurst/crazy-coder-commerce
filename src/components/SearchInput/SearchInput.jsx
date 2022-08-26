
const SearchInput = ( {name, tailwind, onClick } ) => {
  return (
    <>
        <input className={`rounded-sm text-center p-1 ${tailwind}`} type="text" placeholder={name} name={name} onClick={onClick} />
    </>
  )
}

export default SearchInput;