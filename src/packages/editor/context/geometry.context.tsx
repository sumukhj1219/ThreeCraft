"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type Vector3 = { x: number, y: number, z: number }

type GeometryType = {
  value: string;
  parameters: number[];
  position?: Vector3;
  rotation?: Vector3;
  scale?: Vector3;
};

type GeometryContextType = {
  activeGeometries: GeometryType[];
  setActiveGeometries: React.Dispatch<React.SetStateAction<GeometryType[]>>;
};

const GeometryContext = createContext<GeometryContextType | undefined>(undefined);

export function GeometryProvider({ children }: { children: ReactNode }) {
  const [activeGeometries, setActiveGeometries] = useState<GeometryType[]>(
    () => {
      if (typeof window !== "undefined") {
        const stored = localStorage.getItem("geometries");
        if (stored) return JSON.parse(stored) as GeometryType[];
      }
      return []
    }
  );

  const setGeometriesAndStore = (geometries: GeometryType[] | ((prev: GeometryType[]) => GeometryType[])) => {
    setActiveGeometries(prev => {
      const newState = typeof geometries === "function" ? geometries(prev) : geometries;
      if (typeof window !== "undefined") {
        localStorage.setItem("geometries", JSON.stringify(newState));
      }
      return newState;
    });
  };

  return (
    <GeometryContext.Provider value={{ activeGeometries, setActiveGeometries: setGeometriesAndStore }}>
      {children}
    </GeometryContext.Provider>
  );
}

export function useGeometryContext() {
  const context = useContext(GeometryContext);
  if (!context) {
    throw new Error("useGeometryContext must be used within a GeometryProvider");
  }
  return context;
}
