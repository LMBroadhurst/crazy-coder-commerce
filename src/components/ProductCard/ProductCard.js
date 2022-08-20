import ButtonA from '../Button/ButtonA';
import { useDispatch, useSelector } from 'react-redux';
import { selectCartItems } from '../../store/cart/cartSelector';
import { addItemToCart } from '../../store/cart/cartAction';

const ProductCard = ( {product} ) => {

  const { name, price, imageUrl } = product;

  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const addProductToCart = () => dispatch(addItemToCart(cartItems, product));

  return (
    <>
      <section className='bg-slate-300 my-5 flex flex-col justify-between items-stretch rounded-lg md:m-5'>

        <div className='bg-black text-white text-4xl text-center py-2 rounded-t-lg'>
          <h2>{name}</h2>
        </div>

        <div className='px-5 flex flex-col items-stretch bg-slate-700 text-white py-4 pb-6 rounded-b-md'>

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