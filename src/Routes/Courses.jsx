import HeaderPrimary from "../components/Header/Header";
import FooterPrimary from "../components/Footer/Footer";
import { getDocuments } from "../Utils/Firebase";
import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard/ProductCard";


const Courses = () => {

    const [products, setProducts] = useState([]);

    const getProducts = async () => {
        const response = await getDocuments();
        setProducts(response);
    }

    useEffect(() => {
        getProducts();
    }, []);

    
    
    return (
        <>

            <HeaderPrimary />
            <section className="py-3 bg-slate-300">

                <div className="w-10/12 mx-auto grid md:grid-cols-2 xl:grid-cols-3 y">

                {!products ? <span>Loading...</span> : 
                    (
                        Object.keys(products).filter( (title) => {
                            const product = products[title];
                            return product.category === "Course"
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

export default Courses;
