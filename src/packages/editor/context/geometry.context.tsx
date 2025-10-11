"use client";

import { createContext, useContext, useState, useEffect } from "react";

interface GeometryData {
  value: string;
  parameters: any;
  position?: { x: number; y: number; z: number };
}

interface GeometryContextType {
  activeGeometries: GeometryData[];
  setActiveGeometries: React.Dispatch<React.SetStateAction<GeometryData[]>>;
  clearGeometries: () => void;
}

const GeometryContext = createContext<GeometryContextType | undefined>(undefined);

export const GeometryProvider = ({ children }: { children: React.ReactNode }) => {
  const [activeGeometries, setActiveGeometries] = useState<GeometryData[]>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("activeGeometries");
      return saved ? JSON.parse(saved) : [];
    }
    return [];
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      console.log(activeGeometries)
      localStorage.setItem("activeGeometries", JSON.stringify(activeGeometries));
    }
  }, [activeGeometries]);

  const clearGeometries = () => {
    setActiveGeometries([]);
    if (typeof window !== "undefined") {
      localStorage.removeItem("activeGeometries");
    }
  };

  return (
    <GeometryContext.Provider value={{ activeGeometries, setActiveGeometries, clearGeometries }}>
      {children}
    </GeometryContext.Provider>
  );
};

export const useGeometryContext = () => {
  const context = useContext(GeometryContext);
  if (!context) {
    throw new Error("useGeometryContext must be used inside GeometryProvider");
  }
  return context;
};
