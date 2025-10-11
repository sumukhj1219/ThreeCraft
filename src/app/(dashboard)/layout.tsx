import Navbar from '@/packages/dashboard/components/navbar'
import { GeometryProvider } from '@/packages/editor/context/geometry.context'
import { SceneContextProvider } from '@/packages/editor/context/scene.context'
import { TabContextProvider } from '@/packages/editor/context/tab.context'
import React from 'react'

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <TabContextProvider>
            <SceneContextProvider>
                <GeometryProvider>
                    <div>
                        <Navbar />
                        {children}
                    </div>
                </GeometryProvider>
            </SceneContextProvider>
        </TabContextProvider>
    )
}

export default DashboardLayout
