import { createContext, useEffect, useState } from "react";

import { addCollectionAndDocuments } from "../Utils/Firebase.js";

export const ProductsContext = createContext({
    products: [],
});

export const ProductsProvider = ( {children} ) => {
    const [products, setProducts] = useState([]);
    const value = {products};

    return (
        <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
    )
}