import Link from "next/link"
import { PhoneCall } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-800 bg-zinc-900/95 backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-bold text-orange-500">MOTEKSO</span>
          <span className="text-lg font-medium">Device Repair</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="#services" className="text-sm font-medium hover:text-orange-500 transition-colors">
            Services
          </Link>
          <Link href="#repair" className="text-sm font-medium hover:text-orange-500 transition-colors">
            Repair
          </Link>
          <Link href="#contact" className="text-sm font-medium hover:text-orange-500 transition-colors">
            Contact
          </Link>
        </nav>
        <Button
          variant="outline"
          className="hidden md:flex gap-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white"
        >
          <PhoneCall className="h-4 w-4" />
          <span>07506 595309</span>
        </Button>
      </div>
    </header>
  )
}
