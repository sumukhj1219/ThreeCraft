"use client"
import { useSceneContext } from '@/packages/editor/context/scene.context'
import React from 'react'
import { Lightbulb } from 'lucide-react'
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
import { Input } from '@/components/ui/input'
import { lights } from '@/packages/editor/config/lights'

const LightsSelector = () => {
    const { light, setLight } = useSceneContext()
    const [open, setOpen] = React.useState(false)

    return (
        <div className='w-full flex items-center justify-center gap-x-2'>
            <div className='flex w-full'>
                <Input
                    className='w-full rounded'
                    value={light?.label || "Select Light"}
                    disabled
                />
            </div>

            <div className='flex'>
                <Popover open={open} onOpenChange={setOpen}>
                    <PopoverTrigger asChild className="cursor-pointer">
                        <span className='w-9 h-9 flex items-center justify-center rounded border'>
                            <Lightbulb className='w-4 h-4' />
                        </span>
                    </PopoverTrigger>

                    <PopoverContent className="w-56 p-0">
                        <Command>
                            <CommandInput placeholder="Search Lights..." className="h-9" />
                            <CommandList>
                                <CommandEmpty>No lights found.</CommandEmpty>

                                <CommandGroup className="custom-scrollbar">
                                    {lights.map((l) => (
                                        <CommandItem
                                            key={l.id}
                                            value={l.label}
                                            onSelect={() => {
                                                setLight(l)
                                                setOpen(false)
                                            }}
                                        >
                                            {l.label}
                                        </CommandItem>
                                    ))}
                                </CommandGroup>
                            </CommandList>
                        </Command>
                    </PopoverContent>
                </Popover>
            </div>
        </div>
    )
}

export default LightsSelector
