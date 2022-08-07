import ButtonA from '../Button/ButtonA';

const ProductCard = ( {product} ) => {

  const { name, price, imageUrl, point1, point2, point3 } = product;

  return (
    <>
      <section className='bg-gray-200 my-5 flex flex-col justify-between items-stretch rounded-lg md:m-5'>

        <div className='bg-black text-white text-4xl text-center py-2 rounded-t-lg'>
          <h2>{name}</h2>
        </div>

        <div className='px-5 flex flex-col items-stretch'>

          <div className='w-11/12 my-3 mx-auto self-center flex justify-center'>
            <img src={imageUrl} alt={name} className=""/>
          </div>

          <ul className='py-1 px-4 flex flex-col items-center'>
            <li className='py-0.5'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</li>
            <li className='py-0.5'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</li>
            <li className='py-0.5'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</li>
          </ul>

          <div className='py-2 px-4 flex flex-col items-center'>
            <span className='py-0.5'>Category</span>
            <span className='py-0.5'>£{price}</span>
          </div>


          <ButtonA 
            type='button'
            buttonStyle="google"
            text="Add to basket" 
          />

        </div>
      </section>
    </>
  )
}

export default ProductCard;