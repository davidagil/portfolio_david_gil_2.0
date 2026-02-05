import React from 'react'

import {Figma, Users, Rocket, Merge} from 'lucide-react';

const highlights = [
  {
    icon: Figma,
    title: "Clean Design",
    description:
      "Designing and implementing systems for the best user experience.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Working closely with teams, or individuals, to bring ideas to life.",
  },
  {
    icon: Rocket,
    title: "Innovation",
    description:
      "Staying ahead with the latest best practices in code and design.",
  },
  {
    icon: Merge,
    title: "Design & Create",
    description:
      "Using design software, and the latest frameworks, to build functional user experiences.",
  },
];

const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                I’m a software engineer focused on building reliable, user-friendly systems that support real people and real workflows.
              </p>
              <p>
                Most of my work centers on improving and extending existing products — designing and implementing features across the stack, from UI and frontend logic to backend services and automation. 
                I have worked closely with support and operations teams, which keeps my work grounded in real-world use cases rather than hypotheticals.
              </p>
              <p>
                I’m especially interested in roles that sit at the intersection of engineering and design, where thoughtful implementation and user experience are equally important.
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About