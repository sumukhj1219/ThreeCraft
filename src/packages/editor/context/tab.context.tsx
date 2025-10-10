"use client";
import { createContext, useContext, useState } from "react";

type TabContextType = {
    activeTab: number;
    setActiveTab: (tab:number)=>void;
}

const TabContext = createContext<TabContextType | undefined>(undefined)

export function TabContextProvider({children}:{children:React.ReactNode}){
    const [activeTab, setActiveTab] = useState(1)

    return(
        <TabContext.Provider value={{activeTab, setActiveTab}}>
            {children}
        </TabContext.Provider>
    )
}

export function useTabContext(){
    const context = useContext(TabContext)
    if(!context){
        throw new Error("Context must be used within Provider")
    }
    return context
}