import FooterPrimary from '../components/FooterPrimary/FooterPrimary';
import HeaderPrimary from '../components/HeaderPrimary/HeaderPrimary';
import SigninSection from '../components/SigninSection/SigninSection';

const SignIn = () => {
  return (
    <>
        <section className='max-h-screen'>
            <HeaderPrimary />
            <SigninSection />
            <FooterPrimary />
        </section>
    </>
  )
}

export default SignIn;