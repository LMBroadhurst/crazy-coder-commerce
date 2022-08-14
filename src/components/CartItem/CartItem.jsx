
const CartItem = ( {cartItem} ) => {

    const {name, quantity, imageUrl, price} = cartItem;


  return (
    <>
        <section>
            <h2>{name}</h2>
            <span>{quantity}</span>
            <span>{imageUrl}</span>
            <span>{price}</span>
        </section>
    </>
  )
}

export default CartItem;