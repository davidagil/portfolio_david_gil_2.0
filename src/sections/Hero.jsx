import React, { useMemo } from 'react';
import Button from '../components/Button';
import AnimatedBorderButton from '../components/AnimatedBorderButton';
import { ArrowRight, Download, Github, Linkedin, Youtube, ChevronDown } from 'lucide-react';

// Images
import ProfilePic from '../assets/IMG_4570.jpeg'
import Resume from '../assets/david_gil_resume.pdf';

const skills = [
  "Flutter/Dart",
  "HTML/CSS",
  "Javascript",
  "Java",
  "React",
  "Next",
  "Tailwind",
  "C/C++",
  "Python",
  "Node",
  "Express",
  "SQL",
  "MongoDB",
  "Git/GitHub",
  "Zapier",
  "Figma"
];

const Hero = () => {

  // const randomPosition = useMemo(() => {
  //   return {
  //     left: `${Math.random() * 100}%`,
  //     top: `${Math.random() * 100}%`,
  //   };
  // }, []);

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Content */}
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-small text-primary">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse"/>
                UI/UX Engineer • Frontend Developer
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100">
                Bringing <span className="text-primary glow-text">designs</span> to <span className="font-serif italic font-normal">life</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200">
                Hi, I'm David Gil  - a software engineer specializing in UI/UX and Frontend tools. 
                Implementing business needs into scalable, maintainable, interfaces used in production
              </p>
            </div>

            {/* Call to action */}
            <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
              <Button className={"cursor-pointer"} size="lg" onClick={scrollToContact}>
                Contact Me <ArrowRight className="w-5 h-5" />
              </Button>
              <AnimatedBorderButton href={Resume} download>
                <Download className="w-5 h-5" />
                  Download CV
              </AnimatedBorderButton>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
              <span className="text-sm text-muted-foreground">Follow:</span>
              {[
                {icon: Github, href: "https://github.com/davidagil"},
                {icon: Linkedin, href: "https://www.linkedin.com/in/davidlindnerjr/"},
                {icon: Youtube, href: "https://www.youtube.com/@davidalgil"},
              ].map((social, index) => (
                <a 
                  className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300" 
                  key={index} href={social.href} 
                  target="_blank">
                  {<social.icon className="w-5 h-5" />}
                </a>
              ))}
            </div>
          </div>

          {/* Right Column Profile Image */}
          <div className="relative animate-fade-in animation-delay-300">
          {/* Profile Image */}
            <div className="relative max-w-md mx-auto">
            <div className="absolute inset-0 rounded 3xl bg-gradient-to-br from-primary/30 via transparent to-primary/10 blur-2xl animate-pulse"/>
              <div className="relative gladd rounded-3xl p-2 glow-border">
                <img 
                  src={ProfilePic} 
                  alt="David Gil" 
                  className="w-full aspect-[4/5] object-cover rounded-2xl"
                  />

                  {/* Floating Badge */}
                  <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"/>
                      <span className="text-sm font-medium">Available for work</span>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Skills */}
        <div className="mt-20 animate-fade-in animation-delay-600">
          <p className="text-sm text-muted-foreground mb-6 text-center">Technical Skills</p>
          <div className="relative overflow-hidden">
            <div className="flex animate-marquee">
              {[...skills, ...skills].map((skill, index) => (
                <div key={index} className="flex-shrink-0 px-8 py-4">
                  <span className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in animation-delay-800">
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
        >
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </a>
      </div>
    </section>
  )
}

export default Hero