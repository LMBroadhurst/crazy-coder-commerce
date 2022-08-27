import HeaderPrimary from "../components/Header/Header";
import FooterPrimary from "../components/Footer/Footer";
import { getDocuments } from "../Utils/Firebase";
import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard/ProductCard";
import ProductFilter from "../components/ProductFilter/ProductFilter";


const Laptops = () => {

    const [products, setProducts] = useState([]);

    const getProducts = async () => {
        const response = await getDocuments();
        setProducts(response);
        return response;
    }

    useEffect(() => {
        getProducts();
    }, []);

    
    return (
        <>

            <HeaderPrimary />

            <ProductFilter />

            <section className="p-3 bg-slate-300 sm:w-3/4 mx-auto lg:w-2/3">

                <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">

                {
                    (
                        Object.keys(products).filter( (title) => {
                            const product = products[title];
                            return product.category === "Laptop"
                        }).map((title, index) => {
                            const product = products[title];

                            return (
                                <ProductCard key={index} product={product} />
                            );
                        }) 
                    )
                }

                {!products ? <span>Loading...</span> : 
                    (
                        Object.keys(products).filter( (title) => {
                            const product = products[title];
                            return product.category === "Laptop"
                        }).map((title) => {
                            const product = products[title];

                            return (
                                <ProductCard product={product} />
                            );
                        }) 
                    )
                }

                {!products ? <span>Loading...</span> : 
                    (
                        Object.keys(products).filter( (title) => {
                            const product = products[title];
                            return product.category === "Laptop"
                        }).map((title) => {
                            const product = products[title];

                            return (
                                <ProductCard product={product} />
                            );
                        }) 
                    )
                }

                </div>
            </section>
            <FooterPrimary />

        </>
    )
}

export default Laptops;
