import OthersTab from "../components/tabs/others-tab";
import ProjectTab from "../components/tabs/project-tab";
import SceneTab from "../components/tabs/scene-tab";
import SettingsTab from "../components/tabs/settings-tab";

export const tabs = [
    {
        id:1,
        name:"Scene",
        component: SceneTab
    },
    {
        id:2,
        name:"Project",
        component: ProjectTab
    },
    {
        id:3,
        name:"Settings",
        component: SettingsTab
    },
    {
        id:4,
        name:"Others",
        component: OthersTab
    }
]