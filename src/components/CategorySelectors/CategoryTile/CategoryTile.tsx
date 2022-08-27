
interface IProps {
    categoryName: string,
    imageFile: string
}

const CategoryTile = ( {categoryName, imageFile}: IProps ): JSX.Element => {

  return (
    <>
        <section className="flex flex-col items-center justify-center p-2 duration-500 hover:scale-105 hover:cursor-pointer">
            <div className='bg-grey1 rounded-full w-20 h-20 flex items-center justify-center flex-col md:w-32 md:h-32'>
                <img src={imageFile} alt='' className="flex w-10 md:w-20"/> 
            </div>

            <span className="pt-2">{categoryName}</span>
        </section>
    </>
  )
}

export default CategoryTile