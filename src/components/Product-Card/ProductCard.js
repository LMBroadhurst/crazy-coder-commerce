import ButtonA from '../Button/ButtonA';

const ProductCard = ( {product} ) => {

  const { name, price, imageUrl } = product;

  return (
    <>
      <section>
        <img src={imageUrl} alt={name}/>

        <div>
          <span>{name}</span>
          <span>{price}</span>
        </div>

        <ButtonA 
          type='button'
          buttonStyle="google"
          text="Add to basket" 
        />
      </section>
    </>
  )
}

export default ProductCard;