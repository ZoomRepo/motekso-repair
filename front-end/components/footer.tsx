import Link from "next/link"
import { Facebook, Instagram, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-800 py-12">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold text-orange-500 mb-4">MOTEKSO</h3>
            <p className="text-zinc-400 mb-4">
              Professional device repair services in Cornwall. </br>Fast, reliable, and affordable.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="text-zinc-400 hover:text-orange-500">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-zinc-400 hover:text-orange-500">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-zinc-400 hover:text-orange-500">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-zinc-400 hover:text-orange-500">
                  Home
                </Link>
              </li>
              {/* <li>
                <Link href="#services" className="text-zinc-400 hover:text-orange-500">
                  Services
                </Link>
              </li> */}
              <li>
                <Link href="#repair" className="text-zinc-400 hover:text-orange-500">
                  Repair Journey
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-zinc-400 hover:text-orange-500">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4">Contact</h3>
            <address className="not-italic text-zinc-400">
              <p>9 Rock Close</p>
              <p>Camborne, Cornwall</p>
              <p>TR14 7TT</p>
              <p className="mt-2">Phone: 07506 595309</p>
              <p>Email: ollie@motekso.co.uk</p>
            </address>
          </div>
        </div>

        <div className="border-t border-zinc-800 mt-8 pt-8 text-center text-zinc-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Motekso Device Repair. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
