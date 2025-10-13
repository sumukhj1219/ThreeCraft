import ColorPallete from '@/components/common/color-pallete'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Slider } from '@/components/ui/slider'
import { useSceneContext } from '@/packages/editor/context/scene.context'
import React from 'react'

const LightEditor = () => {
  const { light, setLight } = useSceneContext()
  return (
    light &&
    <div className='w-full flex flex-col gap-y-3 mt-5 overflow-y-scroll scroll-auto'>
      <div className='flex flex-col gap-y-3'>
        <Label htmlFor='intensity' className='text-xs'>
          Intensity
        </Label>
        <Slider
          id='intensity'
          value={[light.intensity]}
          onValueChange={(value) => setLight({ ...light, intensity: value[0] })}
          max={1}
          step={0.1}
        />
      </div>
      <div className='flex flex-col gap-y-3'>
        <Label htmlFor='distance' className='text-xs'>
          Distance
        </Label>
        <Slider
          id='distance'
          value={[light.distance as number]}
          onValueChange={(value) => setLight({ ...light, distance: value[0] })}
          max={1000}
          step={50}

        />
      </div>
      <div className='flex flex-col gap-y-3'>
        <Label htmlFor='position' className='text-xs'>
          Positions
        </Label>
        <div className='flex items-center justify-center gap-x-2'>
          <div className='flex items-center justify-center gap-x-2'>
            <span>x</span>
            <Input
              type="number"
              value={light.position?.x ?? 0}
              onChange={(e) =>
                setLight({
                  ...light,
                  position: { ...light.position, x: Number(e.target.value) }
                })
              }
            />
          </div>
          <div className='flex items-center justify-center gap-x-2'>
            <span>y</span>
            <Input
              type="number"
              value={light.position?.y ?? 0}
              onChange={(e) =>
                setLight({
                  ...light,
                  position: { ...light.position, y: Number(e.target.value) }
                })
              }
            />
          </div>
          <div className='flex items-center justify-center gap-x-2'>
            <span>z</span>
            <Input
              type="number"
              value={light.position?.z ?? 0}
              onChange={(e) =>
                setLight({
                  ...light,
                  position: { ...light.position, z: Number(e.target.value) }
                })
              }
            />
          </div>
        </div>

      </div>
      <div className='flex flex-col gap-y-3'>
        <Label htmlFor='angle' className='text-xs'>
          Angle
        </Label>
        <Slider
          id='angle'
          value={[light.angle ?? 0.3]}
          onValueChange={(value) => setLight({ ...light, angle: value[0] })}
          max={Math.PI / 2}
          min={0}
          step={0.01}
          className="flex-1"
        />
      </div>
      <div className='flex flex-col gap-y-3'>
        <Label htmlFor='decay' className='text-xs'>
          Decay
        </Label>
        <Slider
          id='decay'
          value={[light.decay ?? 1]}
          onValueChange={(value) => setLight({ ...light, decay: value[0] })}
          max={2}
          min={0}
          step={0.1}
          className="flex-1"
        />
      </div>
      <div className='flex flex-col gap-y-3'>
        <Label htmlFor='penumbra' className='text-xs'>
          Penumbra
        </Label>
        <Slider
          id='penumbra'
          value={[light.penumbra ?? 0.3]}
          onValueChange={(value) =>
            setLight({ ...light, penumbra: Number(value[0].toFixed(2)) })
          }
          max={1}
          min={0}
          step={0.01}
          className="flex-1"
        />
      </div>
      <div className='flex flex-col gap-y-3'>
        <Label htmlFor='position' className='text-xs'>
          Dimensions
        </Label>
        <div className='flex items-center justify-center gap-x-2'>
          <div className='flex items-center justify-center gap-x-2'>
            <span>width</span>
            <Input
              type="number"
              value={light.width ?? 0}
              onChange={(e) =>
                setLight({
                  ...light,
                  width: Number(e.target.value)
                })
              }
            />
          </div>
          <div className='flex items-center justify-center gap-x-2'>
            <span>height</span>
            <Input
              type="number"
              value={light.height ?? 0}
              onChange={(e) =>
                setLight({
                  ...light,
                  height:Number(e.target.value)
                })
              }
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default LightEditor
