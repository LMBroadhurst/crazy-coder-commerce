import HeaderPrimary from "../components/Header/Header";
import ProductCard from "../components/ProductCard/ProductCard";
import FooterPrimary from "../components/Footer/Footer";
import { useSelector } from "react-redux";
import { selectCategoriesMap } from "../store/categories/categorySelector";
import { getDocuments } from "../Utils/Firebase";
import { useEffect } from "react";

const Shop = () => {
    
    
    return (
        <>

            <HeaderPrimary />
            <section className="py-3 bg-slate-300">

                <div className="w-10/12 mx-auto grid md:grid-cols-2 xl:grid-cols-3 y">

                    {

                    }

                </div>
            </section>
            <FooterPrimary />

        </>
    )
}

export default Shop;
