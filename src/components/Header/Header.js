import { Link } from "react-router-dom";
import { useContext } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import CartDropDown from "../Cart-DropDown/CartDropDown";
import { CartContext } from "../../contexts/Cart.context";
import { UserContext } from "../../contexts/User.context";
import { signOutUser } from "../../Utils/Firebase";



const HeaderPrimary = () => {

  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);
  const { currentUser } = useContext(UserContext);

  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);


  return (
    <>
    <header className='bg-black text-white border-b-4 border-glowGreen'>

      <div className="p-1 bg-black1 text-s md:text-lg md:px-3 md:pt-2 lg:px-5">
        <section className="flex flex-row justify-end text-grey1 xl:mx-auto xl:w-3/4" >

            <span className="px-2 cursor-pointer hover:text-glowGreen"><Link to={`/account`}>Account</Link></span>
            <span className="px-2 cursor-pointer hover:text-glowGreen" onClick={toggleIsCartOpen}>Basket { cartCount ? cartCount : ""}</span>

            {
              currentUser ? <span onClick={signOutUser} className="pl-2 lg:pr-2 hover:text-glowGreen"><Link to="/">Sign Out</Link></span>
                : <span className="pl-2 lg:pr-2 hover:text-glowGreen"><Link to="/auth">Sign In</Link></span>
            }

        </section>
      </div>

      <div className="flex flex-col mx-auto xl:w-3/4">
        <div className='flex flex-row justify-between items-center p-3 lg:py-7'>

          <h1 className='text-xl cursor-pointer hover:text-glowGreen sm:text-3xl sm:w-auto lg:w-auto'><Link to="/">Coder Commerce</Link></h1>
          
          <span className="text-2xl sm:text-4xl lg:hidden" ><FontAwesomeIcon icon={faBars} /></span>


          <nav className="hidden text-2xl lg:flex">
              <ul className="flex flex-row px-2">
                  <li className="px-2 cursor-pointer hover:text-glowGreen"><Link to="/desktops">Desktops</Link></li>
                  <li className="px-2 cursor-pointer hover:text-glowGreen"><Link to="/laptops">Laptops</Link></li>
                  <li className="px-2 cursor-not-allowed hover:text-glowGreen">Accessories</li>
                  <li className="px-2 cursor-not-allowed hover:text-glowGreen">Courses</li>
                  <li className="px-2 cursor-not-allowed hover:text-glowGreen">Contact Us</li>
              </ul>
          </nav>

        </div>

      </div>

      <section className="hidden py-2 border-t-2 mx-3 text-lg sm:text-2xl lg:hidden">
        <nav>
          <ul className="flex flex-col items-center">
            <li className="py-1"><Link to="/shop">Desktops</Link></li>
            <li className="py-1"><Link to="/laptops">Laptops</Link></li>
            <li className="py-1">Accessories</li>
            <li className="py-1">Courses</li>
            <li className="py-1">Contact Us</li>
          </ul>
        </nav>
      </section>

    </header>

    <section className="flex justify-end mx-auto md:px-3 lg:px-5 xl:w-3/4">
      {isCartOpen && <CartDropDown />}
    </section>
    
    </>
  )
}

export default HeaderPrimary