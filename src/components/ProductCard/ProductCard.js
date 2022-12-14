import ButtonA from '../Button/ButtonA';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleRight } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import { CartContext } from '../../contexts/Cart.context';

const ProductCard = ( {product} ) => {

  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext);

  const addProductToCart = () => addItemToCart(product);

  return (
    <>
      <section className='flex flex-col'>

        <h2 className='bg-black text-white text-2xl text-center py-4 lg:text-3xl'>{name}</h2>
      
        <div className='px-5 flex flex-col items-center bg-slate-700 text-white py-2 pb-4 md:items-stretch '>

          <div className='w-11/12 my-3 mx-auto self-center flex justify-center'>
            <img src={imageUrl} alt="" className=""/>
          </div>

          <div className='py-2 pl-2 md:self-start'>
            <span className='py-0.5'>From <span className='text-vLightBlue px-1 text-2xl lg:text-3xl'>£{price}</span> including delivery</span>
          </div>

          <ul className='py-2 pl-4 flex flex-col'>
            <li className='py-1'><FontAwesomeIcon icon={faChevronCircleRight} className={"pr-2"}/>Lorem ipsum dolor, sit amet consectetur.</li>
            <li className='py-1'><FontAwesomeIcon icon={faChevronCircleRight} className={"pr-2"}/>Lorem ipsum dolor, sit amet consectetur.</li>
            <li className='py-1'><FontAwesomeIcon icon={faChevronCircleRight} className={"pr-2"}/>Lorem ipsum dolor, sit amet consectetur.</li>
          </ul>

          <ButtonA 
            type='button'
            buttonStyle="glowGreen"
            text="Add to basket" 
            onClick={addProductToCart}
          />

        </div>
      </section>
    </>
  )
}

export default ProductCard;