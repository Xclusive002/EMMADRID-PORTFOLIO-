"use client"

import * as React from "react"
import {
  Calculator,
  Calendar,
  CreditCard,
  Settings,
  Smile,
  User,
  Search,
  Zap,
  Code2,
  Phone,
  Layout,
  Cpu,
} from "lucide-react"

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command"

export function CommandPalette() {
  const [open, setOpen] = React.useState(false)

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }

    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  const runCommand = React.useCallback((command: () => void) => {
    setOpen(false)
    command()
  }, [])

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 px-4 py-2 bg-black/90 backdrop-blur-md border border-white/10 rounded-full text-[10px] font-mono text-white/40 hover:border-primary/50 hover:text-primary transition-all group shadow-2xl"
      >
        <Search size={12} className="group-hover:scale-110 transition-transform" />
        <span className="hidden sm:inline">PRESS_CTRL_K_TO_INITIATE</span>
        <span className="sm:hidden uppercase tracking-widest">Command</span>
      </button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList className="font-mono bg-background border-none">
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="System Navigation">
            <CommandItem onSelect={() => runCommand(() => document.getElementById("hero")?.scrollIntoView({ behavior: "smooth" }))}>
              <Cpu className="mr-2 h-4 w-4" />
              <span>Jump to: HERO_CORE</span>
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" }))}>
              <User className="mr-2 h-4 w-4" />
              <span>Jump to: IDENTITY_DEPT</span>
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" }))}>
              <Zap className="mr-2 h-4 w-4" />
              <span>Jump to: CAPABILITIES</span>
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" }))}>
              <Layout className="mr-2 h-4 w-4" />
              <span>Jump to: DEPLOYMENTS</span>
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }))}>
              <Phone className="mr-2 h-4 w-4" />
              <span>Jump to: COMMS_UPLINK</span>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Quick Actions">
            <CommandItem onSelect={() => runCommand(() => window.open("https://wa.me/2349016615446", "_blank"))}>
              <Code2 className="mr-2 h-4 w-4" />
              <span>Direct: WHATSAPP_COMMS</span>
              <CommandShortcut>⌘W</CommandShortcut>
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => window.open("/projects/profit-pilot", "_self"))}>
              <Zap className="mr-2 h-4 w-4" />
              <span>Startup: PROFIT_PILOT</span>
              <CommandShortcut>⌘P</CommandShortcut>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  )
}
