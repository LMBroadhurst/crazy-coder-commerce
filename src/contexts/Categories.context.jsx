import { createContext, useEffect, useState } from "react";

import { getCategoriesAndDocuments } from "../Utils/Firebase.js";

export const CategoriesContext = createContext({
    categoriesMap: {},
});

export const CategoriesProvider = ( {children} ) => {
    const [categoriesMap, setCategoriesMap] = useState({});

    useEffect( () => {
        const getCategoriesMap = async () => {
            const categoryMap = await getCategoriesAndDocuments();
            setCategoriesMap(categoryMap);
        }

        getCategoriesMap(); 
    }, [categoriesMap]);

    const value = { categoriesMap };

    return (
        <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
    )
}