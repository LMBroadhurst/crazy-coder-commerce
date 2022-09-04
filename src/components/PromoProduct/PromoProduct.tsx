import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import promoProductIMG from "../../Assets/gamingPcPromo1.png";
import ButtonA from "../Button/ButtonA";

const PromoProduct = (): JSX.Element => {
  return (
    <>
        <section className="text-white">
            <div className="flex flex-col items-center justify-center py-8 sm:py-16 rounded-lg">

              <div className="md:hidden w-1/2 sm:w-1/3">
                <img src={promoProductIMG} alt='Gaming PC'/>
              </div>

              <div className="flex flex-row justify-between items-center pt-6 px-2 lg:px-10">

                <div className="transition-all duration-500 bg-grey1 bg-opacity-20 h-10 w-10 flex items-center justify-center rounded-full hover:bg-glowGreen hover:cursor-pointer hover:-translate-x-2 flex-shrink-0">
                  <span className="text-white"><FontAwesomeIcon icon={faArrowLeft} /></span>
                </div>

                <div className="hidden md:flex md:w-1/6">
                  <img src={promoProductIMG} alt='Gaming PC'/>
                </div>
                

                <div className="flex flex-col items-center justify-center px-6 md:w-2/5">
                  <h2 className="text-lg sm:text-2xl border-b-2 pb-1 mb-1 md:self-start">INTEL Z390 TOWER</h2>

                  <p className="my-1 text-md self-start sm:text-xl">Custom Gaming Computer with latest gen Intel Core processors.</p>
                  
                  <p className="my-1 text-md self-start sm:text-xl">Ideal for serious gamers.</p>

                  <ButtonA text={"More Info."} buttonStyle={"promoCard"} type={"button"} />
                 
                </div>

                <div className="transition-all duration-500 bg-grey1 bg-opacity-20 h-10 w-10 flex items-center justify-center rounded-full hover:bg-glowGreen hover:cursor-pointer hover:-translate-x-2 flex-shrink-0">
                  <span className="text-white"><FontAwesomeIcon icon={faArrowRight} /></span>
                </div>

              </div>
                
            </div>
        </section>
    </>
  )
}

export default PromoProduct