"use client"

import { useRef } from "react"
import Link from "next/link"
import { useInView } from "framer-motion"
import { Calendar, Clock, DollarSign, PiggyBank, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface Project {
  id: number
  title: string
  startDate: string
  endDate: string
  timeSpent: string
  cost: string
  income: string
  category: string
  description: string
}

interface ProjectTimelineProps {
  projects: Project[]
}

export function ProjectTimeline({ projects }: ProjectTimelineProps) {
  // Sort projects by start date (newest first)
  const sortedProjects = [...projects].sort((a, b) => {
    return new Date(b.startDate).getTime() - new Date(a.startDate).getTime()
  })

  return (
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-16 md:left-1/2 top-0 bottom-0 w-1 bg-primary/20"></div>

      <div className="space-y-12">
        {sortedProjects.map((project, index) => (
          <TimelineItem key={project.id} project={project} index={index} />
        ))}
      </div>
    </div>
  )
}

function TimelineItem({ project, index }: { project: Project; index: number }) {
  const itemRef = useRef(null)
  const isInView = useInView(itemRef, { once: true, amount: 0.2 })

  // Alternate sides for desktop view
  const isEven = index % 2 === 0

  return (
    <div
      ref={itemRef}
      className={`relative flex flex-col md:flex-row items-center 
                 ${isInView ? "opacity-100" : "opacity-0"} 
                 transition-opacity duration-700 ease-in-out`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {/* Timeline marker */}
      <div className="absolute left-16 md:left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-primary flex items-center justify-center z-10">
        <span className="text-primary-foreground font-bold">{index + 1}</span>
      </div>

      {/* Content for mobile (always on right) */}
      <div className="md:hidden w-full pl-24 pr-4">
        <TimelineContent project={project} />
      </div>

      {/* Content for desktop (alternating) */}
      <div className="hidden md:block md:w-1/2 md:pr-12 md:text-right">
        {isEven ? <TimelineContent project={project} /> : <div />}
      </div>

      <div className="hidden md:block md:w-1/2 md:pl-12 md:text-left">
        {!isEven ? <TimelineContent project={project} /> : <div />}
      </div>
    </div>
  )
}

function TimelineContent({ project }: { project: Project }) {
  return (
    <Card className="w-full overflow-hidden border-2 border-primary/20 mb-6 transform transition-transform duration-300 hover:scale-[1.02]">
      <CardContent className="p-0">
        <div className="bg-primary/10 p-4 flex flex-col md:flex-row justify-between items-start md:items-center">
          <div>
            <h3 className="text-lg font-semibold">{project.title}</h3>
            <div className="flex items-center mt-1 text-muted-foreground">
              <Calendar className="h-4 w-4 mr-1" />
              <span className="text-sm">
                {project.startDate} - {project.endDate}
              </span>
            </div>
          </div>
          <Badge className="mt-2 md:mt-0" variant="outline">
            {project.category}
          </Badge>
        </div>

        <div className="p-4">
          <p className="text-muted-foreground mb-4">{project.description}</p>

          <div className="grid grid-cols-3 gap-2 mb-4">
            <div className="flex items-center text-sm">
              <Clock className="mr-1 h-4 w-4 text-muted-foreground" />
              <span>{project.timeSpent}</span>
            </div>
            <div className="flex items-center text-sm">
              <DollarSign className="mr-1 h-4 w-4 text-muted-foreground" />
              <span>{project.cost}</span>
            </div>
            <div className="flex items-center text-sm">
              <PiggyBank className="mr-1 h-4 w-4 text-muted-foreground" />
              <span>{project.income}</span>
            </div>
          </div>

          <Button variant="outline" size="sm" asChild className="w-full md:w-auto">
            <Link href={`/blog/${project.id}`}>
              Read Case Study <ArrowRight className="ml-2 h-3 w-3" />
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

