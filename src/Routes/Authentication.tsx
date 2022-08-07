import FooterPrimary from '../components/FooterPrimary/FooterPrimary';
import HeaderPrimary from '../components/HeaderPrimary/HeaderPrimary.js';
import Register from '../components/Register/Register.js';
import LogIn from '../components/LogIn/LogIn.js';



const Authentication = () => {
  return (
    <>
        <section className=''>
            <HeaderPrimary />
            <section className='flex flex-col bg-slate-200'>

                <div className='w-11/12 mx-auto lg:w-8/12'>

                  <div className="flex flex-col mx-auto items-center justify-evenly py-5 lg:items-start lg:pt-16 lg:flex-row lg:justify-around">

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