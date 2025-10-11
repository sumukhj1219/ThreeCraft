"use client";
import { createContext, useContext, useState } from "react";

type SceneContextType = {
    color: string;
    setColor: (color: string) => void;
}

const SceneContext = createContext<SceneContextType | undefined>(undefined)

export function SceneContextProvider({ children }: { children: React.ReactNode }) {
    const [color, setColor] = useState<string>("#f6f3f4"); 

    return (
        <SceneContext.Provider value={{ color, setColor }}>
            {children}
        </SceneContext.Provider>
    )
}

export function useSceneContext() {
    const context = useContext(SceneContext)
    if (!context) {
        throw new Error("useSceneContext must be used within SceneContextProvider")
    }
    return context
}
