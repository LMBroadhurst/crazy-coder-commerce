import FooterPrimary from '../components/Footer/Footer';
import HeaderPrimary from '../components/Header/Header.js';
import Register from '../components/Register/Register.js';
import LogIn from '../components/LogIn/LogIn.js';
import AuthModal from '../components/AuthModal/AuthModal';



const Authentication = () => {
  return (
    <>
        <section className=''>
            <HeaderPrimary />
            <section className='flex flex-col bg-slate-200'>

                <div className='w-11/12 mx-auto lg:w-6/12'>

                  <div className="bg-slate-700 flex flex-col mx-auto items-center justify-evenly my-10 rounded-xl lg:items-start lg:flex-row lg:justify-around">

                    <LogIn />

                    <Register />

                  </div>
                  
                </div>

              </section>
            <FooterPrimary />
        </section>
    </>
  )
}

export default Authentication;