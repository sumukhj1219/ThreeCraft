import React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import ColorPallete from '@/components/common/color-pallete'
import LightsSelector from './lights-selector'
import LightEditor from './light-editor'

const SceneTab = () => {
  return (
    <div className="p-0.5 flex flex-col gap-y-4">
      <div className="border rounded-lg w-full">
        <Accordion type="single" collapsible defaultValue='scene-bg' className="w-full">
          <AccordionItem value="scene-bg">
            <AccordionTrigger className="px-3 py-3">
              Scene Background
            </AccordionTrigger>
            <AccordionContent className="px-3 py-3">
              <ColorPallete />
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      <div className="border rounded-lg w-full ">
        <Accordion type="single" collapsible defaultValue="scene-light" className="w-full ">
          <AccordionItem value="scene-light">
            <AccordionTrigger className="px-3 py-3">
              Scene Lighting
            </AccordionTrigger>
            <AccordionContent className="px-3 py-3 flex flex-col ">
              <LightsSelector />
              <LightEditor />
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      <div className="border rounded-lg w-full">
        <Accordion type="single" collapsible defaultValue="scene-camera" className="w-full">
          <AccordionItem value="scene-camera">
            <AccordionTrigger className="px-3 py-3">
              Scene Camera
            </AccordionTrigger>
            <AccordionContent className="px-3 py-3">
              Camera position and settings.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  )
}

export default SceneTab
