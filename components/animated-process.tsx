"use client"

import { useRef } from "react"
import { useInView } from "framer-motion"
import { Zap, Code, Bot, Rocket } from "lucide-react"

export function AnimatedProcess() {
  // Create refs for each process item
  const process1Ref = useRef(null)
  const process2Ref = useRef(null)
  const process3Ref = useRef(null)
  const process4Ref = useRef(null)

  // Check if elements are in view
  const process1InView = useInView(process1Ref, { once: true, amount: 0.5 })
  const process2InView = useInView(process2Ref, { once: true, amount: 0.5 })
  const process3InView = useInView(process3Ref, { once: true, amount: 0.5 })
  const process4InView = useInView(process4Ref, { once: true, amount: 0.5 })

  return (
    <div className="relative">
      {/* Process timeline line */}
      <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary/20 hidden md:block"></div>

      <div className="space-y-12 relative">
        <div
          ref={process1Ref}
          className={`flex flex-col md:flex-row items-center transition-all duration-700 ${
            process1InView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="md:w-1/2 md:pr-12 md:text-right mb-4 md:mb-0">
            <h3 className="text-xl font-bold mb-2">1. Discovery & Assessment</h3>
            <p className="text-muted-foreground">
              Understanding your business needs, current processes, and identifying opportunities for AI implementation.
            </p>
          </div>
          <div
            className="z-10 flex-shrink-0 h-12 w-12 rounded-full bg-primary flex items-center justify-center 
                          transition-all duration-500 delay-300
                          scale-100 rotate-0"
          >
            <Zap className="h-6 w-6 text-white" />
          </div>
          <div className="md:w-1/2 md:pl-12 hidden md:block"></div>
        </div>

        <div
          ref={process2Ref}
          className={`flex flex-col md:flex-row items-center transition-all duration-700 delay-150 ${
            process2InView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="md:w-1/2 md:pr-12 hidden md:block"></div>
          <div
            className="z-10 flex-shrink-0 h-12 w-12 rounded-full bg-primary flex items-center justify-center
                          transition-all duration-500 delay-300
                          scale-100 rotate-0"
          >
            <Code className="h-6 w-6 text-white" />
          </div>
          <div className="md:w-1/2 md:pl-12 md:text-left mb-4 md:mb-0">
            <h3 className="text-xl font-bold mb-2">2. Solution Design</h3>
            <p className="text-muted-foreground">
              Creating a tailored implementation plan with clear deliverables, timelines, and cost estimates.
            </p>
          </div>
        </div>

        <div
          ref={process3Ref}
          className={`flex flex-col md:flex-row items-center transition-all duration-700 delay-300 ${
            process3InView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="md:w-1/2 md:pr-12 md:text-right mb-4 md:mb-0">
            <h3 className="text-xl font-bold mb-2">3. Development & Integration</h3>
            <p className="text-muted-foreground">
              Building and integrating the AI solution into your existing systems with regular progress updates.
            </p>
          </div>
          <div
            className="z-10 flex-shrink-0 h-12 w-12 rounded-full bg-primary flex items-center justify-center
                          transition-all duration-500 delay-300
                          scale-100 rotate-0"
          >
            <Bot className="h-6 w-6 text-white" />
          </div>
          <div className="md:w-1/2 md:pl-12 hidden md:block"></div>
        </div>

        <div
          ref={process4Ref}
          className={`flex flex-col md:flex-row items-center transition-all duration-700 delay-450 ${
            process4InView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="md:w-1/2 md:pr-12 hidden md:block"></div>
          <div
            className="z-10 flex-shrink-0 h-12 w-12 rounded-full bg-primary flex items-center justify-center
                          transition-all duration-500 delay-300
                          scale-100 rotate-0"
          >
            <Rocket className="h-6 w-6 text-white" />
          </div>
          <div className="md:w-1/2 md:pl-12 md:text-left">
            <h3 className="text-xl font-bold mb-2">4. Deployment & Training</h3>
            <p className="text-muted-foreground">
              Launching your AI solution and providing training to ensure your team can effectively use and maintain it.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

