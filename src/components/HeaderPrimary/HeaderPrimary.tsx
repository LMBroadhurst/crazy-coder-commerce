import { Link } from "react-router-dom"

const HeaderPrimary = (): JSX.Element => {
  return (
    <header className='bg-navy text-white'>
      <div className='flex flex-row justify-between items-center p-3'>

        <h1 className='text-2xl w-8'>Crazy Coder Commerce</h1>

        <div className="text-2xl flex flex-col justify-center items-end md:hidden">

          <span>Basket</span>

          <span>Sign In</span>

          <span className="">X</span>

        </div>

        <nav className="hidden md:flex">
            <ul className="flex flex-row px-2">
                <li className="px-2">Desktops</li>
                <li className="px-2">Laptops</li>
                <li className="px-2">Keyboards & Mice</li>
                <li className="px-2">Streaming</li>
                <li className="px-2">Audio</li>
                <li className="px-2">Courses</li>
            </ul>
        </nav>

        <span className="hidden md:flex"><Link to="/signIn">Sign In</Link></span>

      </div>
    </header>
  )
}

export default HeaderPrimary