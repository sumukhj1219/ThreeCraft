"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type GeometryType = {
  value: string;
  parameters: number[];
};

type GeometryContextType = {
  activeGeometry?: GeometryType;
  setActiveGeometry: (geometry: GeometryType) => void;
};

const GeometryContext = createContext<GeometryContextType | undefined>(undefined);

export function GeometryProvider({ children }: { children: ReactNode }) {
  const [activeGeometry, setActiveGeometry] = useState<GeometryType | undefined>(undefined);

  return (
    <GeometryContext.Provider value={{ activeGeometry, setActiveGeometry }}>
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
