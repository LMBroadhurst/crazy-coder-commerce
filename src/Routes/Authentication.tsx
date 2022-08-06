import FooterPrimary from '../components/FooterPrimary/FooterPrimary';
import HeaderPrimary from '../components/HeaderPrimary/HeaderPrimary';
import LogIn from '../components/LogIn/LogIn';
import Register from '../components/Register/Register';


const Authentication = () => {
  return (
    <>
        <section className='max-h-screen'>
            <HeaderPrimary />
            <section className='flex flex-col w-8/12 mx-auto lg:h-screen'>

              <div className="flex flex-col justify-around items-start my-auto  lg:flex-row">

                <LogIn />

                <Register />

              </div>

              </section>
            <FooterPrimary />
        </section>
    </>
  )
}

export default Authentication;