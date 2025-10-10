import * as THREE from "three"

export function useGeometry() {
    const geometryMap: Record<string, any> = {
        "SphereGeometry": THREE.SphereGeometry
    }

    function createGeometry(value: string, parameters: number[]) {
        const GeometryClass = geometryMap[value]
        if (!GeometryClass) {
            console.warn(`Geometry type "${value}" not supported.`);
            return null;
        }
        return new GeometryClass(...parameters)
    }
    return { createGeometry }
}