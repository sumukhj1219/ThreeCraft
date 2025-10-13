export const lights = [
    {
        id: 1,
        label: "Ambient Light",
        value: "AmbientLight",
        color: "#ffffff",
        intensity: 0.5,
    },
    {
        id: 2,
        label: "Directional Light",
        value: "DirectionalLight",
        color: "#ffffff",
        intensity: 1,
        position: { x: 5, y: 5, z: 5 }
    },
    {
        id: 3,
        label: "Hemisphere Light",
        value: "HemisphereLight",
        skyColor: "#ffffff",
        groundColor: "#444444",
        intensity: 0.8
    },
    {
        id: 4,
        label: "Point Light",
        value: "PointLight",
        color: "#ffffff",
        intensity: 1,
        distance: 100,
        decay: 2,
        position: { x: 2, y: 2, z: 2 }
    },
    {
        id: 5,
        label: "Spot Light",
        value: "SpotLight",
        color: "#ffffff",
        intensity: 1,
        distance: 100,
        angle: Math.PI / 6,
        penumbra: 0.2,
        decay: 1,
        position: { x: 3, y: 5, z: 3 }
    },
    {
        id: 6,
        label: "Rect Area Light",
        value: "RectAreaLight",
        color: "#ffffff",
        intensity: 1,
        width: 10,
        height: 10,
        position: { x: 2, y: 2, z: 0 }
    },
    {
        id: 7,
        label: "Light",
        value: "Light",
        color: "#ffffff",
        intensity: 1
    },
    {
        id: 8,
        label: "Light Probe",
        value: "LightProbe",
        intensity: 1
    }
]
