import { Link } from "react-router-dom";
import { useContext, useRef, useState } from "react";
import { UserContext } from "../../contexts/User.context";
import { signOutUser } from "../../Utils/Firebase";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import CartDropDown from "../Cart-DropDown/CartDropDown";

const HeaderPrimary = () => {

  const [displayStatus, setDisplayStatus] = useState("hidden");

  const { currentUser } = useContext(UserContext);

  const ddMenu = useRef();

  const toggleDdMenu = (event) => {
    event.preventDefault();
  }

  const toggleBasketDisplayStatus = (event) => {
    event.preventDefault();

    if (displayStatus === "hidden") {
      return setDisplayStatus("");
    }

    return setDisplayStatus("hidden");
  }


  return (
    <>
    <header className='bg-navy text-white'>

      <div className="p-1 bg-black text-s md:text-lg md:px-3 md:py-2 lg:px-5">
        <section className="flex flex-row justify-end xl:mx-auto xl:w-3/4" >

            <span className="px-2"><Link to="/account">Account</Link></span>
            <span className="px-2" onClick={toggleBasketDisplayStatus}>Basket {0}</span>
            {
              currentUser ? <span onClick={signOutUser} className="pl-2 lg:pr-2">Sign Out</span>
                : <span className="pl-2 lg:pr-2"><Link to="/auth">Sign In</Link></span>
            }

        </section>
      </div>

      <div className="flex flex-col mx-auto xl:w-3/4">
        <div className='flex flex-row justify-between items-center p-3 lg:py-7'>

          <h1 className='text-xl sm:text-3xl sm:w-auto lg:w-auto'><Link to="/">Crazy Coder Commerce</Link></h1>
          
          <span className="text-2xl sm:text-4xl lg:hidden" onClick={toggleDdMenu} ><FontAwesomeIcon icon={faBars} /></span>


          <nav className="hidden text-2xl lg:flex">
              <ul className="flex flex-row px-2">
                  <li className="px-2"><Link to="/shop">Desktops</Link></li>
                  <li className="px-2">Laptops</li>
                  <li className="px-2">Accessories</li>
                  <li className="px-2">Courses</li>
                  <li className="px-2">Contact Us</li>
              </ul>
          </nav>

        </div>

      </div>

      <section className="hidden py-2 border-t-2 mx-3 text-lg sm:text-2xl lg:hidden" useref={ddMenu}>
        <nav>
          <ul className="flex flex-col items-center">
            <li className="py-1"><Link to="/shop">Desktops</Link></li>
            <li className="py-1">Laptops</li>
            <li className="py-1">Accessories</li>
            <li className="py-1">Courses</li>
            <li className="py-1">Contact Us</li>
          </ul>
        </nav>
      </section>

    </header>

    <CartDropDown displayStatus={displayStatus}/>
    </>
  )
}

export default HeaderPrimary