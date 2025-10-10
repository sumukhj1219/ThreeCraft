"use client"

import * as React from "react"
import { Check, ChevronDown, ChevronsUpDown, VectorSquare } from "lucide-react"

import { cn } from "@/lib/utils"
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
import { geometries } from "../config/geometries"


export default function Geometries() {
    const [open, setOpen] = React.useState(false)
    const [value, setValue] = React.useState("")

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <div className='flex items-center justify-between px-2 h-full text-sm'>
                    <div className='flex items-center gap-x-2'>
                        <VectorSquare className='w-4 h-4' />
                        <span>Select Geometry</span>
                    </div>
                    <ChevronDown className='cursor-pointer w-4 h-4' />
                </div>
            </PopoverTrigger>
            <PopoverContent className="w-full p-0">
                <Command>
                    <CommandInput placeholder="Search Geometries..." className="h-9" />
                    <CommandGroup className="border-b">
                        <span className="text-xs p-1">13 geometries</span>
                    </CommandGroup>
                    <CommandList>
                        <CommandEmpty>No geometry found.</CommandEmpty>
                        <CommandGroup className="custom-scrollbar">
                            {geometries.map((geometry) => (
                                <CommandItem
                                    key={geometry.value}
                                    value={geometry.value}
                                    onSelect={(currentValue) => {
                                        setValue(currentValue === value ? "" : currentValue)
                                        setOpen(false)
                                    }}
                                >
                                    {geometry.label}
                                    <Check
                                        className={cn(
                                            "ml-auto",
                                            value === geometry.value ? "opacity-100" : "opacity-0"
                                        )}
                                    />
                                </CommandItem>
                            ))}
                        </CommandGroup>
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    )
}
