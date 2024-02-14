import { createContext, useState } from "react";

export const ElecticPriceContext = createContext(null);

function ElecticPriceProvider({ children }) {
    const [averagePrice, setAveragePrice] = useState(0);

    const value = {
        values: {
            averagePrice,
        },
        actions: {
            setAveragePrice,
        },
    };

    return (
        <ElecticPriceContext.Provider value={value}>
            {children}
        </ElecticPriceContext.Provider>
    );

};

export default ElecticPriceProvider;

//codepilots