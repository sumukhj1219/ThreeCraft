import Navbar from '@/packages/dashboard/components/navbar'
import { GeometryProvider } from '@/packages/editor/context/geometry.context'
import { TabContextProvider } from '@/packages/editor/context/tab.context'
import React from 'react'

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <TabContextProvider>
            <GeometryProvider>
                <div>
                    <Navbar />
                    {children}
                </div>
            </GeometryProvider>
        </TabContextProvider>
    )
}

export default DashboardLayout
