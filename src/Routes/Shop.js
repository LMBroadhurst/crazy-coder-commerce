import { ProductsContext } from "../contexts/Products.context";
import { useContext } from "react";
import HeaderPrimary from "../components/HeaderPrimary/HeaderPrimary";
import ProductCard from "../components/ProductCard/ProductCard";
import FooterPrimary from "../components/FooterPrimary/FooterPrimary";

const Shop = () => {

    const { products } = useContext(ProductsContext);

    return (
        <>
            <HeaderPrimary />
                <section className="py-3 bg-slate-300">
                    <div className="w-10/12 mx-auto grid grid md:grid-cols-2 xl:grid-cols-3">
                        {products.map( product => {
                            return <ProductCard product={product} key={product.id}/>
                        })}
                    </div>
                </section>
            <FooterPrimary />
        </>
    )
}

export default Shop