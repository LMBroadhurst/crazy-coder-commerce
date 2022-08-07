import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../contexts/User.context";
import { signOutUser } from "../../Utils/Firebase";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const HeaderPrimary = () => {


  const { currentUser } = useContext(UserContext);


  return (
    <header className='bg-navy text-white'>
      <div className='flex flex-row justify-between items-center p-3'>

        <h1 className='text-2xl'><Link to="/">Crazy Coder Commerce</Link></h1>
        
        <FontAwesomeIcon icon={faBars} />


        <nav className="hidden md:flex text-2xl">
            <ul className="flex flex-row px-2">
                <li className="px-2"><Link to="/shop">Desktops</Link></li>
                <li className="px-2">Laptops</li>
                <li className="px-2">Keyboards & Mice</li>
                <li className="px-2">Streaming</li>
                <li className="px-2">Audio</li>
                <li className="px-2">Courses</li>
            </ul>
        </nav>

        {
            currentUser ? (
              <section className="hidden flex-row md:flex text-2xl" >
                <span className="px-2">Account</span>
                <span className="px-2">Basket</span>
                <span onClick={signOutUser} className="px-2">Sign Out</span>
              </section>
              ) : (
              <span className="hidden md:flex text-2xl"><Link to="/auth">Sign In</Link></span>
        )}

      </div>
    </header>
  )
}

export default HeaderPrimary