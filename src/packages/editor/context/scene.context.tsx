"use client";
import { createContext, useContext, useState } from "react";
import { Light } from "../types/scene.types";

type SceneContextType = {
    color: string;
    setColor: (color: string) => void;

    light: Light | null;
    setLight: (light: Light | null) => void;
};

const SceneContext = createContext<SceneContextType | undefined>(undefined);

export function SceneContextProvider({ children }: { children: React.ReactNode }) {
    const [color, setColor] = useState<string>("#f6f3f4");
    const [light, setLight] = useState<Light | null>(null);

    return (
        <SceneContext.Provider value={{ color, setColor, light, setLight }}>
            {children}
        </SceneContext.Provider>
    );
}

export function useSceneContext() {
    const context = useContext(SceneContext);
    if (!context) {
        throw new Error("useSceneContext must be used within SceneContextProvider");
    }
    return context;
}
