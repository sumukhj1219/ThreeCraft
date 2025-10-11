import * as THREE from "three"

export function useGeometry() {
    const geometryMap: Record<string, any> = {
        SphereGeometry: THREE.SphereGeometry,
        PlaneGeometry: THREE.PlaneGeometry,
        BoxGeometry: THREE.BoxGeometry,
        CylinderGeometry: THREE.CylinderGeometry,
        ConeGeometry: THREE.ConeGeometry,
        TorusGeometry: THREE.TorusGeometry,
        TorusKnotGeometry: THREE.TorusKnotGeometry,
        CircleGeometry: THREE.CircleGeometry,
        RingGeometry: THREE.RingGeometry,
        DodecahedronGeometry: THREE.DodecahedronGeometry,
        IcosahedronGeometry: THREE.IcosahedronGeometry,
        OctahedronGeometry: THREE.OctahedronGeometry,
        TetrahedronGeometry: THREE.TetrahedronGeometry,
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