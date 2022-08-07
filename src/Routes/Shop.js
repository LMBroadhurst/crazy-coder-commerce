import { ProductsContext } from "../contexts/Products.context";
import { useContext } from "react";
import HeaderPrimary from "../components/HeaderPrimary/HeaderPrimary";
import ProductCard from "../components/Product-Card/ProductCard";

const Shop = () => {

    const { products } = useContext(ProductsContext);

    return (
        <>
            <HeaderPrimary />
            {products.map( product => {
                return <ProductCard product={product} key={product.id}/>
            })}
        </>
    )
}

export default Shop