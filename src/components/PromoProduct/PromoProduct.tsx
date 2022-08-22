import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import promoProductIMG from "../../Assets/gamingPcPromo1.png";
import ButtonA from "../Button/ButtonA";

const PromoProduct = (): JSX.Element => {
  return (
    <>
        <section className="text-white">
            <div className="flex flex-col items-center justify-center py-16 rounded-lg">

              <div className="flex flex-row justify-evenly items-center">

                <span className="bg-grey1 bg-opacity-20 p-2 px-3 rounded-full hover:bg-glowGreen hover:cursor-pointer hover:-translate-x-2 transition-all duration-500"><FontAwesomeIcon icon={faArrowLeft} /></span>

                <div className="w-1/6">
                  <img src={promoProductIMG} alt='Gaming PC'/>
                </div>
                

                <div className="flex flex-col items-start w-2/5">
                  <h2 className="text-2xl border-b-2 pb-1 mb-1">Intel z390 Tower</h2>

                  <p className="my-1 text-xl text-left self-start">Custom Gaming Computer with latest gen Intel Core processors.</p>
                  
                  <p className="my-1 text-xl text-left self-start">Ideal for serious gamers.</p>

                  <ButtonA text={"More Info."} buttonStyle={"promoCard"} type={"button"} />

                </div>

                <span className="bg-grey1 bg-opacity-20 p-2 px-3 rounded-full hover:bg-glowGreen hover:cursor-pointer hover:translate-x-2 transition-all duration-500"><FontAwesomeIcon icon={faArrowRight} /></span>
                
              </div>
                
            </div>
        </section>
    </>
  )
}

export default PromoProduct