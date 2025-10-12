export type Light = {
    id: number;
    label: string;
    value: string;
    color: string;
    intensity: number;
    distance?: number;
    angle?: number;
    penumbra?: number;
    decay?: number;
    position?: { x: number, y: number, z: number }
}