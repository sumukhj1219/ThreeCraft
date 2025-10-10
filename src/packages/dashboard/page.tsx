import React from 'react'
import Navbar from './components/navbar'
import { EditorSection } from '../editor'
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"

const DashboardPage = () => {
  return (
    <div>
      <ResizablePanelGroup direction="horizontal">
        <ResizablePanel defaultSize={30} minSize={20}>
          <EditorSection />
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel defaultSize={70} minSize={60}>Two</ResizablePanel>
      </ResizablePanelGroup>
    </div>
  )
}

export default DashboardPage
