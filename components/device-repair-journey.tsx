"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Smartphone, Laptop, Tablet, Watch } from "lucide-react"

type DeviceType = "phone" | "laptop" | "tablet" | null
type DeviceBrand = "apple" | "samsung" | "google" | "other" | null
type DeviceModel = "iphone15" | "iphone14" | "iphone13" | "iphone12" | "iphoneSE" | "other" | null
type DeviceIssue = "screen" | "battery" | "charging" | "water" | "other" | null

const deviceTypes = [
  { id: "phone", name: "Smartphone", icon: Smartphone },
  { id: "laptop", name: "Laptop", icon: Laptop },
  { id: "tablet", name: "Tablet", icon: Tablet },
]

const phoneBrands = [
  { id: "apple", name: "Apple" },
  { id: "samsung", name: "Samsung" },
  { id: "google", name: "Google" },
  { id: "other", name: "Other" },
]

const appleModels = [
  { id: "iphone15", name: "iPhone 15 Series" },
  { id: "iphone14", name: "iPhone 14 Series" },
  { id: "iphone13", name: "iPhone 13 Series" },
  { id: "iphone12", name: "iPhone 12 Series" },
  { id: "iphoneSE", name: "iPhone SE" },
  { id: "other", name: "Other iPhone" },
]

const issueTypes = [
  { id: "screen", name: "Screen Damage" },
  { id: "battery", name: "Battery Issues" },
  { id: "charging", name: "Charging Problems" },
  { id: "water", name: "Water Damage" },
  { id: "other", name: "Other Issues" },
]

export function DeviceRepairJourney() {
  const [step, setStep] = useState(1)
  const [deviceType, setDeviceType] = useState<DeviceType>(null)
  const [brand, setBrand] = useState<DeviceBrand>(null)
  const [model, setModel] = useState<DeviceModel>(null)
  const [issue, setIssue] = useState<DeviceIssue>(null)

  const handleDeviceSelect = (type: DeviceType) => {
    setDeviceType(type)
    setStep(2)
  }

  const handleBrandSelect = (brand: DeviceBrand) => {
    setBrand(brand)
    setStep(3)
  }

  const handleModelSelect = (model: DeviceModel) => {
    setModel(model)
    setStep(4)
  }

  const handleIssueSelect = (issue: DeviceIssue) => {
    setIssue(issue)
    setStep(5)
  }

  const resetJourney = () => {
    setStep(1)
    setDeviceType(null)
    setBrand(null)
    setModel(null)
    setIssue(null)
  }

  return (
    <section id="repair" className="py-16 bg-zinc-800">
      <div className="container">
        <div className="max-w-4xl mx-auto">

          <Card className="bg-zinc-900 border-zinc-700">
            <CardContent className="p-6">
              <h2 className="text-3xl font-bold text-center text-white mb-2">Repair Journey</h2>
              <p className="text-zinc-400 text-center mb-8">Select your device and issue to get started</p>
              {step === 1 && (
                <div>
                  {/* <h3 className="text-xl font-medium mb-4">Select Device Type</h3> */}
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {deviceTypes.map((device) => (
                      <Button
                        key={device.id}
                        variant="outline"
                        className={`h-auto flex-col py-6 border-zinc-700 hover:border-orange-500 hover:bg-zinc-800 ${deviceType === device.id ? "border-orange-500 bg-zinc-800" : ""}`}
                        onClick={() => handleDeviceSelect(device.id as DeviceType)}
                      >
                        <device.icon className="h-10 w-10 mb-2" />
                        <span>{device.name}</span>
                      </Button>
                    ))}
                  </div>
                </div>
              )}

              {step === 2 && (
                <div>
                  {/* <h3 className="text-xl font-medium mb-4">Select Brand</h3> */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {phoneBrands.map((item) => (
                      <Button
                        key={item.id}
                        variant="outline"
                        className={`h-auto py-6 border-zinc-700 hover:border-orange-500 hover:bg-zinc-800 ${brand === item.id ? "border-orange-500 bg-zinc-800" : ""}`}
                        onClick={() => handleBrandSelect(item.id as DeviceBrand)}
                      >
                        {item.name}
                      </Button>
                    ))}
                  </div>
                </div>
              )}

              {step === 3 && brand === "apple" && (
                <div>
                  {/* <h3 className="text-xl font-medium mb-4">Select Model</h3> */}
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {appleModels.map((item) => (
                      <Button
                        key={item.id}
                        variant="outline"
                        className={`h-auto py-6 border-zinc-700 hover:border-orange-500 hover:bg-zinc-800 ${model === item.id ? "border-orange-500 bg-zinc-800" : ""}`}
                        onClick={() => handleModelSelect(item.id as DeviceModel)}
                      >
                        {item.name}
                      </Button>
                    ))}
                  </div>
                </div>
              )}

              {step === 4 && (
                <div>
                  {/* <h3 className="text-xl font-medium mb-4">Select Issue</h3> */}
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {issueTypes.map((item) => (
                      <Button
                        key={item.id}
                        variant="outline"
                        className={`h-auto py-6 border-zinc-700 hover:border-orange-500 hover:bg-zinc-800 ${issue === item.id ? "border-orange-500 bg-zinc-800" : ""}`}
                        onClick={() => handleIssueSelect(item.id as DeviceIssue)}
                      >
                        {item.name}
                      </Button>
                    ))}
                  </div>
                </div>
              )}

              {step === 5 && (
                <div className="text-center text-white">
                  <div className="bg-zinc-800 p-6 rounded-lg mb-6 text-white">
                    {/* <div className="text-xl font-semibold mb-4">Repair Summary</div> */}

                    <div className="flex flex-col md:flex-row gap-6">
                      {/* Repair Summary Table */}
                      <table className="table-auto border-collapse border border-zinc-600 w-full md:w-1/2 text-left">
                      <thead>
                        <tr>
                          <th className="border border-zinc-600 px-4 py-2 bg-zinc-700 font-semibold" colspan="2">Repair Summary</th>
                        </tr>
                      </thead>
                        <tbody>
                          <tr>
                            <td className="border border-zinc-600 px-4 py-2 font-semibold">Device Type:</td>
                            <td className="border border-zinc-600 px-4 py-2">
                              {deviceTypes.find((d) => d.id === deviceType)?.name}
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-zinc-600 px-4 py-2 font-semibold">Brand:</td>
                            <td className="border border-zinc-600 px-4 py-2">
                              {phoneBrands.find((b) => b.id === brand)?.name}
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-zinc-600 px-4 py-2 font-semibold">Model:</td>
                            <td className="border border-zinc-600 px-4 py-2">
                              {appleModels.find((m) => m.id === model)?.name}
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-zinc-600 px-4 py-2 font-semibold">Issue:</td>
                            <td className="border border-zinc-600 px-4 py-2">
                              {issueTypes.find((i) => i.id === issue)?.name}
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-zinc-600 px-4 py-2 font-semibold">Price:</td>
                            <td className="border border-zinc-600 px-4 py-2">
                              £79.00
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-zinc-600 px-4 py-2 font-semibold">Parts In-stock:</td>
                            <td className="border border-zinc-600 px-4 py-2">
                             Yes
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-zinc-600 px-4 py-2 font-semibold">Repair Time::</td>
                            <td className="border border-zinc-600 px-4 py-2">
                              1 Hour
                            </td>
                          </tr>
                        </tbody>
                      </table>

                      {/* Customer Details Form */}
                      <div className="w-full md:w-1/2">
                        <div className="text-lg font-semibold mb-4">Customer Details</div>
                        <form className="space-y-4">
                          <div>
                            <label className="block text-sm mb-1" htmlFor="name">Name</label>
                            <input
                              type="text"
                              id="name"
                              className="w-full px-3 py-2 bg-zinc-700 border border-zinc-600 rounded text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                            />
                          </div>
                          <div>
                            <label className="block text-sm mb-1" htmlFor="email">Email</label>
                            <input
                              type="email"
                              id="email"
                              className="w-full px-3 py-2 bg-zinc-700 border border-zinc-600 rounded text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                            />
                          </div>
                          <div>
                            <label className="block text-sm mb-1" htmlFor="phone">Phone Number</label>
                            <input
                              type="tel"
                              id="phone"
                              className="w-full px-3 py-2 bg-zinc-700 border border-zinc-600 rounded text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                            />
                            
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                  <p className="text-white mb-6">
                    Thank you for providing your device details. Please book now to get your device
                    repaired.
                  </p>
                  {/* <p>
                    Alternatively you can save a draft repair and call us for further information: +447506595309.
                  </p> */}
                  <div className="flex flex-col sm:flex-row gap-4 justify-center mt-5">
                    <Button className="bg-orange-500 hover:bg-orange-600">Book Now</Button>
                    {/* <Button className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white">Contact Us Now</Button> */}

                    {/* <Button
                      variant="outline"
                      className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white"
                      onClick={resetJourney}
                    >
                      Start New Repair
                    </Button> */}
                  </div>
 
                </div>
              )}
              <div className="flex gap-2 mt-10">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 1 ? "bg-orange-500" : "bg-zinc-700"}`}
                >
                  1
                </div>
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 2 ? "bg-orange-500" : "bg-zinc-700"}`}
                >
                  2
                </div>
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 3 ? "bg-orange-500" : "bg-zinc-700"}`}
                >
                  3
                </div>
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 4 ? "bg-orange-500" : "bg-zinc-700"}`}
                >
                  4
                </div>
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 5 ? "bg-orange-500" : "bg-zinc-700"}`}
                >
                  5
                </div>
                {step > 1 && (
                  <Button variant="ghost" onClick={resetJourney} className="ml-auto bg-orange-500 text-white px-4 py-2 rounded">
                    Restart Journey
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
