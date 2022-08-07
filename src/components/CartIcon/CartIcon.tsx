import { ReactComponent as Basket} from "../../Assets/shopping-bag.svg";

const CartIcon = () => {
  return (
    <>
        <div className="flex flex-col items-center justify-center">
            <Basket fill="white" stroke="yellow" />
            <span className="mt=[-10px]">0</span>
        </div>
        
    </>
  )
}

export default CartIcon;