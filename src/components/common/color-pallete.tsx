"use client"
import { useSceneContext } from '@/packages/editor/context/scene.context'
import React from 'react'
import { Input } from '../ui/input'
import { Palette } from 'lucide-react'
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { colors } from '@/config/colors'

const ColorPallete = () => {
    const { color, setColor } = useSceneContext()
    const [open, setOpen] = React.useState(false)

    return (
        <div className='w-full flex items-center justify-center gap-x-2'>
            <div className='flex'>
                <span
                    className='w-9 h-9 rounded border'
                    style={{ backgroundColor: color }}
                ></span>
            </div>

            <div className='flex w-full'>
                <Input className='w-full rounded' value={color} disabled />
            </div>

            <div className='flex'>
                <Popover open={open} onOpenChange={setOpen}>
                    <PopoverTrigger asChild className="cursor-pointer">
                        <span className='w-9 h-9 flex items-center justify-center rounded border'>
                            <Palette className='w-4 h-4' />
                        </span>
                    </PopoverTrigger>
                    <PopoverContent className="w-56 p-0">
                        <Command>
                            <CommandInput placeholder="Search Colors..." className="h-9" />
                            <CommandList>
                                <CommandEmpty>No colors found.</CommandEmpty>
                                    <CommandGroup className="custom-scrollbar">
                                        <div className="grid grid-cols-6 gap-1 p-2 max-h-48 overflow-y-auto">
                                            {colors.map((c) => (
                                                <CommandItem
                                                    key={c}
                                                    value={c}
                                                    onSelect={() => {
                                                        setColor(c)
                                                        setOpen(false)
                                                    }}
                                                    className="w-7 h-7 p-0 rounded cursor-pointer border"
                                                    style={{ backgroundColor: c }}
                                                />
                                            ))}
                                        </div>
                                    </CommandGroup>
                            </CommandList>
                        </Command>
                    </PopoverContent>
                </Popover>
            </div>
        </div>
    )
}

export default ColorPallete
