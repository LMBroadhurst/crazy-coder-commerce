import { CategoriesContext } from "../contexts/Categories.context";
import { useContext } from "react";
import HeaderPrimary from "../components/Header/Header";
import ProductCard from "../components/ProductCard/ProductCard";
import FooterPrimary from "../components/Footer/Footer";
import { useSelector } from "react-redux";
import { selectCategoriesMap } from "../store/categories/categorySelector";

const Shop = () => {

    const categoriesMap = useSelector(selectCategoriesMap);

    return (
        <>

            <HeaderPrimary />
            <section className="py-3 bg-slate-300">

                <div className="w-10/12 mx-auto grid md:grid-cols-2 xl:grid-cols-3">
                {
                    Object.keys(categoriesMap).map( title => {
                        return (
                            <>
                                <div>
                                    {
                                        categoriesMap[title].map( (product) => {
                                            return <ProductCard key={product.id} product={product} />
                                        })
                                    }
                                </div>
                            </>
                            
                        )
                    })
                }
                </div>
            </section>
            <FooterPrimary />

        </>
    )
}

export default Shop;
