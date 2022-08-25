import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons';

const FooterPrimary = () => {
  return (
    <>
        <section className='bg-black text-white border-t-4 border-glowGreen'>
            <div className='flex flex-col px-3 justify-between items-start py-4 md:flex-row lg:py-16 lg:px-0 lg:flex-row xl:w-2/3 xl:mx-auto'>

                <div className='flex flex-col items-start'>
                    <span className='text-3xl pb-3 text-glowGreen'>Coder Commerce</span>

                    <p className='text-xl text-grey1 py-1'>One stop shop for all your coding and gaming needs.</p>

                    <p className='text-xl text-grey1'>We buy in bulk and pass on the savings to our valued customers.</p>

                    <span className='text-2xl py-3 text-glowGreen'>Contact us</span>
                    <span>Phone: 07123 456 789</span>
                    <span className='pb-6'>Email: cccommerce@gmail.com</span>
                </div>

                <div className='flex flex-row justify-between self-center sm:justify-evenly sm:self-stretch md:flex-row'>

                    <div className='mx-1 border-t-4 border-white'>
                        <nav className='px-2 lg:px-4'>
                            <ul className='flex flex-col items-stretch pt-3 text-xl'>
                                <li className='py-1 ggTextHoverState'>Desktops</li>
                                <li className='py-1 ggTextHoverState'>Laptops</li>
                                <li className='py-1 ggTextHoverState'>Accessories</li>
                                <li className='py-1 ggTextHoverState'>Courses</li>
                                <li className='py-1 ggTextHoverState'>Contact Us</li>
                            </ul>
                        </nav>
                    </div>

                    <div className='border-t-4 border-white mx-1'>
                        <nav className='lg:px-4'>
                            <ul className='flex flex-col items-stretch pt-3 text-xl'>
                                <li className='py-1 ggTextHoverState'>Careers</li>
                                <li className='py-1 ggTextHoverState'>Returns</li>
                                <li className='py-1 ggTextHoverState'>Deliveries</li>
                                <li className='py-1 ggTextHoverState'>Refunds</li>
                                <li className='py-1 ggTextHoverState'>FAQs</li>
                            </ul>
                        </nav>
                    </div>

                    <div className='border-t-4 border-white mx-1'>
                        <nav className='lg:px-4'>
                            <ul className='flex flex-col items-stretch pt-3 text-xl'>
                                <li className='py-1 ggTextHoverState'>Finance</li>
                                <li className='py-1 ggTextHoverState'>Reviews</li>
                                <li className='py-1 ggTextHoverState'>Privacy</li>
                                <li className='py-1 ggTextHoverState'>Warranty</li>
                                <li className='py-1 ggTextHoverState'>Service</li>
                            </ul>
                        </nav>
                    </div>

                </div>

            </div>
        </section>

        <section className='bg-black1 text-lg text-white px-3'>
            <div className='flex flex-col justify-between items-center md:flex-row xl:w-3/4 xl:mx-auto'>

                <div className='order-last md:order-1'>
                    <ul className='flex flex-row justify-center items-center md:order-1'>
                        <li className="pr-2 ggTextHoverState">Cookies</li>
                        <li className="p-2 ggTextHoverState">T's & C's</li>
                        <li className="pl-2 ggTextHoverState">Privacy</li>
                    </ul>
                </div>

                <span className='md:order-2'>© Lewis Broadhurst 2022</span>

                <div className='text-3xl py-4 order-first md:order-3'>
                    <span className='pr-2 ggTextHoverState'><FontAwesomeIcon icon={faGithub} /></span>
                    <span className='px-2 ggTextHoverState'><FontAwesomeIcon icon={faLinkedin} /></span>
                    <span className='pl-2 ggTextHoverState'><FontAwesomeIcon icon={faTwitter} /></span>
                </div>

            </div>
            
        </section>
    </>
  )
}

export default FooterPrimary;