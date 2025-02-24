"use client"
import { WavyBackground } from "./ui/wavy-background"
import { Button } from "./ui/button"

export default function Hero() {
  return (
    <WavyBackground className="max-w-7xl mx-auto pb-40 pt-24">
      <div className="text-center space-y-8">
        <h1 className="text-4xl md:text-5xl lg:text-7xl text-white font-bold inter-var">
          Supercharge Your Business with AI-Powered Tools!
        </h1>
        <p className="text-xl md:text-2xl mt-4 text-white font-normal inter-var max-w-3xl mx-auto">
          Integr AI delivers cutting-edge artificial intelligence solutions to transform your business operations and
          drive growth.
        </p>
        <div className="flex justify-center">
          <Button size="lg" variant="secondary">
            Get Started
          </Button>
        </div>
      </div>
    </WavyBackground>
  )
}

