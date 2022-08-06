import FooterPrimary from '../components/FooterPrimary/FooterPrimary';
import HeaderPrimary from '../components/HeaderPrimary/HeaderPrimary';
import LogIn from '../components/LogIn/LogIn';
import Register from '../components/Register/Register';


const SignIn = () => {
  return (
    <>
        <section className='max-h-screen'>
            <HeaderPrimary />
            <section className='flex flex-col h-screen w-8/12 mx-auto'>

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

export default SignIn;