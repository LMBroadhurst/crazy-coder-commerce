import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../contexts/User.context";

const HeaderPrimary = (): JSX.Element => {

  const { currentUser } = useContext(UserContext);
  console.log(currentUser);

  return (
    <header className='bg-navy text-white'>
      <div className='flex flex-row justify-between items-center p-3'>

        <h1 className='text-2xl'><Link to="/">Crazy Coder Commerce</Link></h1>

        <div className="text-2xl flex flex-col justify-center items-end md:hidden">

          <span>Basket</span>

          <span>Sign In</span>

          <span className="">X</span>

        </div>

        <nav className="hidden md:flex text-2xl">
            <ul className="flex flex-row px-2">
                <li className="px-2">Desktops</li>
                <li className="px-2">Laptops</li>
                <li className="px-2">Keyboards & Mice</li>
                <li className="px-2">Streaming</li>
                <li className="px-2">Audio</li>
                <li className="px-2">Courses</li>
            </ul>
        </nav>

        <span className="hidden md:flex text-2xl"><Link to="/auth">Sign In</Link></span>

      </div>
    </header>
  )
}

export default HeaderPrimary