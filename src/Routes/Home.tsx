import HeaderPrimary from "../components/Header/Header.js";
import PromoProduct from "../components/PromoProduct/PromoProduct";
import CategorySelectors from "../components/CategorySelectors/CategorySelectors";
import FooterPrimary from "../components/Footer/Footer.jsx";

const Home = () => {

  return (

    <>
        <HeaderPrimary />

        <section className="bg-black">

          <section>

            <PromoProduct />

            <div className="py-20 bg-white">
              <CategorySelectors />
            </div>

          </section>

        </section>

        <FooterPrimary />
    </>
  )
}

export default Home