import { CategoriesContext } from "../contexts/Categories.context";
import { useContext } from "react";
import HeaderPrimary from "../components/HeaderPrimary/HeaderPrimary";
import ProductCard from "../components/ProductCard/ProductCard";
import FooterPrimary from "../components/FooterPrimary/FooterPrimary";

const Shop = () => {

    const { categoriesMap } = useContext(CategoriesContext);

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
