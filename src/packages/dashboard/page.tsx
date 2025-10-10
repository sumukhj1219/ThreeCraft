import React from 'react'
import { EditorSection } from '../editor'
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"
import { PreviewPage } from '../preview'

const DashboardPage = () => {
  return (
    <div>
      <ResizablePanelGroup direction="horizontal">
        <ResizablePanel defaultSize={25} minSize={20}>
          <EditorSection />
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel defaultSize={75} minSize={60}>
          <PreviewPage />
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  )
}

export default DashboardPage
