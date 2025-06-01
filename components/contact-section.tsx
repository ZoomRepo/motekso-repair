import { Mail, MapPin, Phone } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contact" className="py-16">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-2">Find Us</h2>
          <p className="text-zinc-400 text-center mb-8">Visit our shop or contact us directly</p>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="bg-zinc-800 rounded-lg p-6">
                <h3 className="text-xl font-medium mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-orange-500 mt-1" />
                    <div>
                      <p className="font-medium">Address</p>
                      <p className="text-zinc-400">9 Rock Close, Camborne, Cornwall, TR14 7TT</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="h-5 w-5 text-orange-500 mt-1" />
                    <div>
                      <p className="font-medium">Phone</p>
                      <p className="text-zinc-400">07506 595309</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="h-5 w-5 text-orange-500 mt-1" />
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-zinc-400">ollie@motekso.co.uk</p>
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-medium mt-8 mb-4">Opening Hours</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span className="text-zinc-400">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span className="text-zinc-400">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="text-zinc-400">Closed</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="h-[400px] bg-zinc-800 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2535.5762568345!2d-5.3066!3d50.2121!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x486adc0e1296c8e5%3A0x7c5d4c3c7cd5c659!2s9%20Rock%20Cl%2C%20Camborne%20TR14%207TT!5e0!3m2!1sen!2suk!4v1717257000000!5m2!1sen!2suk"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Motekso Device Repair Location"
                className="grayscale contrast-125 opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
