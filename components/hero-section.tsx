import { Button } from "@/components/ui/button"
import { ArrowDownCircle } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[url('/IMG_0003.png?height=1080&width=1920')] bg-cover bg-center opacity-10"></div>
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Elite <span className="text-orange-500">Device Repair</span> Services
          </h1>
          <p className="text-lg md:text-xl text-zinc-400 mb-8">
            Fast, reliable repairs for all your devices. From smartphones to laptops, we've got you covered.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
              Start Repair Process
            </Button> */}
            {/* <Button
              size="lg"
              variant="outline"
              className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white"
            >
              View Services
            </Button> */}
          </div>
          <a
            href="#repair"
            className="inline-flex items-center gap-2 mt-12 text-zinc-400 hover:text-orange-500 transition-colors"
          >
            <span>Start your repair journey</span>
            <ArrowDownCircle className="h-5 w-5 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  )
}
