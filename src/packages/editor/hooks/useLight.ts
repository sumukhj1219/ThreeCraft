import * as THREE from "three"

export function useLight() {

    const lightMap: Record<string, any> = {
        AmbientLight: THREE.AmbientLight,
        DirectionalLight: THREE.DirectionalLight,
        HemisphereLight: THREE.HemisphereLight,
        PointLight: THREE.PointLight,
        SpotLight: THREE.SpotLight,
        RectAreaLight: THREE.RectAreaLight,
        Light: THREE.Light,
        LightProbe: THREE.LightProbe,
    }

    function createLight(config: any) {
        const {
            value,
            color = "#2a2a2b",
            intensity = 1,
            distance = 0,
            decay = 1,
            angle = Math.PI / 3,
            penumbra = 0,
            skyColor = "#ffffff",
            groundColor = "#444444",
            width = 10,
            height = 10,
            position
        } = config

        const LightClass = lightMap[value]
        if (!LightClass) {
            console.warn(`Light type "${value}" is not supported.`)
            return null
        }

        let light

        switch (value) {
            case "AmbientLight":
                light = new LightClass(color, intensity)
                break

            case "DirectionalLight":
                light = new LightClass(color, intensity)
                break

            case "HemisphereLight":
                light = new LightClass(skyColor, groundColor, intensity)
                break

            case "PointLight":
                light = new LightClass(color, intensity, distance, decay)
                break

            case "SpotLight":
                light = new LightClass(color, intensity, distance, angle, penumbra, decay)
                break

            case "RectAreaLight":
                light = new LightClass(color, intensity, width, height)
                break

            case "Light":
                light = new LightClass(color, intensity)
                break

            case "LightProbe":
                light = new LightClass(undefined, intensity)
                break
        }

        if (position) {
            light.position.set(position.x, position.y, position.z)
        }

        return light
    }

    return { createLight }
}
