import { createContext, useEffect, useState } from "react";
import { getInfo } from "../services/info";

// import informacion from "./../mook/info.json";

// 1. Crear el contexto
export const InfoContext = createContext();

// 2. Crear el provider
export function InfoProvider({ children }) {
    const [info, setInfo] = useState(null);

    useEffect(() => {
        getInfo().then((data) => {
            setInfo(data);
        });
    }, []);

    const { info: information, users, businesses, categories, products } = info || {};

    return (
        <InfoContext.Provider
            value={{
                info: information || null,
                users: users || null,
                businesses: businesses || null,
                categories: categories || null,
                products: products || null,
            }}
        >
            {children}
        </InfoContext.Provider>
    );
}
