
const CartItem = ( {cartItem} ) => {

    const {name, quantity, imageUrl, price} = cartItem;

  return (
    <>
      <section className="flex flex-row p-2 items-center">

        <div className="w-20">
          <img src={imageUrl} alt="product preview"/>
        </div>

        <div className="flex flex-col pl-4">
          <h2>{name}</h2>
          <span>{quantity} x {price}</span>
        </div>

      </section>
    </>
  )
}

export default CartItem;