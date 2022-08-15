import promoProductIMG from "../../Assets/gamingPcPromo1.png";
import ButtonA from "../Button/ButtonA";

const PromoProduct = (): JSX.Element => {
  return (
    <>
        <section className="text-white">
            <div className="flex flex-col items-center justify-center w-10/12 mx-auto py-16 rounded-lg bg-slate-700">

              <div className="flex flex-row justify-evenly">
                <img src={promoProductIMG} alt='Gaming PC' className="w-1/5"/>

                <div className="flex flex-col justify-center items-center w-2/5">
                  <h2 className="my-3 text-4xl border-b-4 pb-3 mb-8">Intel z390 Tower</h2>

                  <p className="my-2 text-2xl text-left self-start">Custom Gaming Computer with latest gen Intel Core processors.</p>
                  
                  <p className="my-2 text-2xl text-left self-start">Ideal for serious gamers.</p>

                  {/* <span className="my-2">£99.99</span> */}

                  <ButtonA text={"More Info."} buttonStyle={"promoCard"} type={"button"} />

                </div>
              </div>
                
            </div>
        </section>
    </>
  )
}

export default PromoProduct