import { createContext, useState } from "react";

export const ElecticPriceContext = createContext(null);

function ElecticPriceProvider({ children }) {
    const [averagePrice, setAveragePrice] = useState(0);
    const [currentPrice, setCurrectPrice] = useState(0);

    const value = {
        values: {
            averagePrice,
            currentPrice,
        },
        actions: {
            setAveragePrice,
            setCurrectPrice,
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