import HeaderPrimary from "../components/HeaderPrimary/HeaderPrimary.js";
import PromoProduct from "../components/PromoProduct/PromoProduct";
import CategorySelectors from "../components/CategorySelectors/CategorySelectors";
import FooterPrimary from "../components/FooterPrimary/FooterPrimary";

const Home = () => {

  return (

    <>
        <HeaderPrimary />

        <section className="bg-slate-300">

          <section className="pt-8 mx-auto xl:w-3/4">

            <PromoProduct />

            <div className="py-20">
              <CategorySelectors />
            </div>

          </section>

        </section>

        <FooterPrimary />
    </>
  )
}

export default Home