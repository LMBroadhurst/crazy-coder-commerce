import HeaderPrimary from "../components/Header/Header";
import FooterPrimary from "../components/Footer/Footer";
import { getDocuments } from "../Utils/Firebase";
import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard/ProductCard";


const Laptops = () => {

    const [products, setProducts] = useState([]);

    const getProducts = async () => {
        const response = await getDocuments();
        await setProducts(response);
        listProducts();
    }

    useEffect(() => {
        getProducts();
    }, []);

    const listProducts = () => {

        products.forEach( (product, index) => {
            return (
                <div className="h-6">
                    {index}
                </div>
            )
        });

    }
    
    
    return (
        <>

            <HeaderPrimary />
            <section className="p-3 bg-slate-300 w-2/3 mx-auto">

                <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">

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
