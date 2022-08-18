import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons';

const FooterPrimary = () => {
  return (
    <>
        <section className='bg-black text-white border-t-4 border-glowGreen'>
            <div className='flex flex-row justify-between items-start py-16 xl:w-2/3 xl:mx-auto'>

                <div className='flex flex-col items-start'>
                    <span className='text-3xl pb-3 text-glowGreen'>Crazy Coder Commerce</span>

                    <p className='text-xl text-grey1 py-1'>One stop shop for all your coding and gaming needs.</p>

                    <p className='text-xl text-grey1'>We buy in bulk and pass on the savings to our valued customers.</p>

                    <span className='text-2xl py-3 text-glowGreen'>Contact us</span>
                    <span>Phone: 07123 456 789</span>
                    <span>Email: cccommerce@gmail.com</span>
                </div>

                <div className='border-t-4 border-white'>
                    <nav className='px-6'>
                        <ul className='flex flex-col items-stretch pt-3 text-xl'>
                            <li className='py-1 ggTextHoverState'>Desktops</li>
                            <li className='py-1 ggTextHoverState'>Laptops</li>
                            <li className='py-1 ggTextHoverState'>Accessories</li>
                            <li className='py-1 ggTextHoverState'>Courses</li>
                            <li className='py-1 ggTextHoverState'>Contact Us</li>
                        </ul>
                    </nav>
                </div>

                <div className='border-t-4 border-white'>
                    <nav className='px-4'>
                        <ul className='flex flex-col items-stretch pt-3 text-xl'>
                            <li className='py-1 ggTextHoverState'>Careers</li>
                            <li className='py-1 ggTextHoverState'>Returns</li>
                            <li className='py-1 ggTextHoverState'>Deliveries</li>
                            <li className='py-1 ggTextHoverState'>Refunds</li>
                            <li className='py-1 ggTextHoverState'>FAQs</li>
                        </ul>
                    </nav>
                </div>

                <div className='border-t-4 border-white'>
                    <nav className='px-4'>
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
        </section>

        <section className='bg-black1 text-lg text-white'>
            <div className='flex flex-row justify-between items-center xl:w-3/4 xl:mx-auto'>

                <div>
                    <ul className='flex flex-row justify-center items-center'>
                        <li className="pr-2 ggTextHoverState">Cookies</li>
                        <li className="p-2 ggTextHoverState">T's & C's</li>
                        <li className="pl-2 ggTextHoverState">Privacy</li>
                    </ul>
                </div>

                <span>© Lewis Broadhurst 2022</span>

                <div className='text-3xl py-4'>
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