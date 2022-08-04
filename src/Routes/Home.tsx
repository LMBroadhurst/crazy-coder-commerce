import HeaderPrimary from "../components/HeaderPrimary/HeaderPrimary";
import PromoProduct from "../components/PromoProduct/PromoProduct";
import CategorySelectors from "../components/CategorySelectors/CategorySelectors";
import FooterPrimary from "../components/FooterPrimary/FooterPrimary";

const Home = () => {

  return (

    <>
        <HeaderPrimary />

        <section className="mx-auto xl:w-3/4">

          <PromoProduct />

          <CategorySelectors />

        </section>

        <FooterPrimary />
    </>
  )
}

export default Home