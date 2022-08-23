
interface IProps {
    categoryName: string,
    imageFile: string
}

const CategoryTile = ( {categoryName, imageFile}: IProps ): JSX.Element => {

  return (
    <>
        <section className="flex flex-col items-center justify-center p-2 duration-500 hover:scale-105 hover:cursor-pointer">
            <div className='bg-grey1 rounded-full w-32 h-32 flex items-center justify-center flex-col'>
                <img src={imageFile} alt='' className="flex w-20"/> 
            </div>

            <span className="pt-2">{categoryName}</span>
        </section>
    </>
  )
}

export default CategoryTile