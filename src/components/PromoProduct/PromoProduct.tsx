import promoProductIMG from "../../Assets/gamingPcPromo1.png";

const PromoProduct = (): JSX.Element => {
  return (
    <>
        <section className="text-black ">
            <div className="flex flex-col items-center justify-center w-10/12 mx-auto my-5 p-5 rounded-md">
                <img src={promoProductIMG} alt='Gaming PC'/>

                <h2 className="my-3 text-3xl">Intel z390 Tower</h2>

                <p className="my-2 text-xl text-center">Custom Gaming Computer with latest gen Intel Core processors. Ideal for serious gamers.</p>

                {/* <span className="my-2">£99.99</span> */}

                <button className="my-2 bg-navy text-white p-2 px-4 rounded-lg text-xl">More Info.</button>
            </div>
        </section>
    </>
  )
}

export default PromoProduct