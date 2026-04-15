import React from 'react';
import {
  Github,
  Linkedin,
  Code,
  Trophy,
  Download,
  ExternalLink,
  ChevronRight,
  Briefcase,
  GraduationCap,
  Award
} from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import ContactForm from './ContactForm';
import {
  personalInfo,
  socialLinks,
  skills,
  projects,
  experience,
  education,
  certifications,
  stats
} from '../mock';

const Portfolio = () => {
  const socialIconMap = {
    linkedin: Linkedin,
    github: Github,
    code: Code,
    trophy: Trophy
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section
        id="hero"
        className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 via-cyan-500 to-teal-400 pt-20 relative overflow-hidden"
      >
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="text-center">
            <div className="mb-8 inline-block">
              <div className="w-40 h-40 mx-auto mb-6 rounded-full border-4 border-white shadow-2xl overflow-hidden bg-white">
                <img 
                  src={personalInfo.avatar} 
                  alt={personalInfo.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
              {personalInfo.name}
            </h1>
            <p className="text-2xl md:text-3xl text-white font-semibold mb-6 drop-shadow-md">
              {personalInfo.title}
            </p>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto drop-shadow">
              {personalInfo.tagline}
            </p>

            {/* Social Links */}
            <div className="flex justify-center space-x-4 mb-8">
              {socialLinks.map((social) => {
                const Icon = socialIconMap[social.icon];
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/20 backdrop-blur-sm p-3 rounded-full shadow-lg hover:shadow-xl hover:scale-110 hover:bg-white/30 transition-all text-white"
                    aria-label={social.name}
                  >
                    <Icon size={24} />
                  </a>
                );
              })}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button
                onClick={() => scrollToSection('projects')}
                size="lg"
                className="bg-white text-blue-600 hover:bg-white/90 text-lg px-8 shadow-lg hover:shadow-xl"
              >
                View My Work
                <ChevronRight className="ml-2" size={20} />
              </Button>
              <Button
                onClick={() => scrollToSection('contact')}
                size="lg"
                className="bg-transparent border-2 border-white text-white hover:bg-white/10 text-lg px-8 shadow-lg"
              >
                Contact Me
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:bg-white/20 transition-all">
                  <div className="text-4xl font-bold text-white mb-2 drop-shadow">
                    {stat.value}
                  </div>
                  <div className="text-white/90 drop-shadow">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-br from-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              About Me
            </h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <Card className="border-slate-700 bg-slate-800/50 backdrop-blur shadow-2xl">
              <CardContent className="p-8">
                <p className="text-lg text-slate-200 leading-relaxed mb-6">
                  {personalInfo.bio}
                </p>
                <div className="flex flex-wrap gap-3">
                  <Badge variant="secondary" className="bg-cyan-500/20 text-cyan-300 border-cyan-500/30 px-4 py-2 text-sm">
                    Problem Solving
                  </Badge>
                  <Badge variant="secondary" className="bg-blue-500/20 text-blue-300 border-blue-500/30 px-4 py-2 text-sm">
                    Full Stack Development
                  </Badge>
                  <Badge variant="secondary" className="bg-teal-500/20 text-teal-300 border-teal-500/30 px-4 py-2 text-sm">
                    RESTful APIs
                  </Badge>
                  <Badge variant="secondary" className="bg-green-500/20 text-green-300 border-green-500/30 px-4 py-2 text-sm">
                    Database Design
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Technical Skills
            </h2>
            <p className="text-lg text-slate-700 max-w-2xl mx-auto">
              A comprehensive toolkit for building modern web applications
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(skills).map(([category, items]) => (
              <Card
                key={category}
                className="border-blue-200 hover:shadow-2xl transition-all hover:-translate-y-1 bg-white"
              >
                <CardHeader className="bg-gradient-to-r from-blue-500 to-cyan-500">
                  <CardTitle className="text-xl text-white">
                    {category}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill) => (
                      <Badge
                        key={skill.name}
                        variant="outline"
                        className="border-slate-300 text-slate-700 hover:bg-blue-50 hover:border-blue-500 hover:text-blue-700 transition-colors"
                      >
                        {skill.name}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Featured Projects
            </h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Some of my recent work showcasing full-stack development skills
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card
                key={project.id}
                className={`border-slate-700 hover:shadow-2xl transition-all hover:-translate-y-2 ${
                  index === 0 
                    ? 'bg-gradient-to-br from-cyan-900/50 to-blue-900/50 backdrop-blur' 
                    : 'bg-gradient-to-br from-teal-900/50 to-cyan-900/50 backdrop-blur'
                }`}
              >
                <CardHeader>
                  <CardTitle className="text-2xl text-white">
                    {project.title}
                  </CardTitle>
                  <p className="text-sm text-cyan-300">{project.duration}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-200 mb-4">{project.description}</p>
                  <p className="text-slate-300 text-sm mb-4">
                    {project.longDescription}
                  </p>

                  <div className="mb-4">
                    <h4 className="font-semibold text-white mb-2">
                      Key Highlights:
                    </h4>
                    <ul className="space-y-1">
                      {project.highlights.map((highlight, idx) => (
                        <li
                          key={idx}
                          className="text-sm text-slate-300 flex items-start"
                        >
                          <ChevronRight
                            size={16}
                            className="text-cyan-400 mt-0.5 mr-1 flex-shrink-0"
                          />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        className="bg-cyan-500/20 text-cyan-300 border-cyan-500/30 hover:bg-cyan-500/30"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-gradient-to-br from-orange-50 to-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Work Experience
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {experience.map((exp, index) => (
              <Card
                key={exp.id}
                className={`border-orange-200 hover:shadow-2xl transition-all hover:-translate-y-1 ${
                  index === 0 
                    ? 'bg-gradient-to-r from-orange-50 to-amber-50' 
                    : 'bg-gradient-to-r from-amber-50 to-yellow-50'
                }`}
              >
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className={`${index === 0 ? 'bg-orange-500' : 'bg-amber-500'} p-3 rounded-lg`}>
                      <Briefcase className="text-white" size={24} />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                        <div>
                          <h3 className="text-xl font-bold text-slate-900">
                            {exp.role}
                          </h3>
                          <p className={`${index === 0 ? 'text-orange-600' : 'text-amber-600'} font-semibold`}>
                            {exp.company}
                          </p>
                        </div>
                        <div className="text-slate-600 text-sm font-medium">
                          {exp.duration}
                        </div>
                      </div>
                      {exp.project && (
                        <p className="text-slate-700 font-medium mb-2">
                          Project: {exp.project}
                        </p>
                      )}
                      <ul className="space-y-2 mb-4">
                        {exp.responsibilities.map((resp, idx) => (
                          <li
                            key={idx}
                            className="text-slate-700 flex items-start"
                          >
                            <ChevronRight
                              size={16}
                              className={`${index === 0 ? 'text-orange-600' : 'text-amber-600'} mt-1 mr-2 flex-shrink-0`}
                            />
                            {resp}
                          </li>
                        ))}
                      </ul>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <Badge
                            key={tech}
                            variant="outline"
                            className="border-slate-400 text-slate-800 bg-white"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Education & Certifications
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-4 flex items-center">
                <div className="bg-gradient-to-r from-green-500 to-emerald-500 p-2 rounded-lg mr-3">
                  <GraduationCap className="text-white" size={28} />
                </div>
                Education
              </h3>
              {education.map((edu, idx) => (
                <Card
                  key={idx}
                  className="border-green-200 hover:shadow-xl transition-all mb-4 hover:-translate-y-1 bg-gradient-to-r from-green-50 to-emerald-50"
                >
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="text-lg font-bold text-slate-900">
                          {edu.degree}
                          {edu.field && ` - ${edu.field}`}
                        </h4>
                        <p className="text-green-600 font-semibold">
                          {edu.institution}
                        </p>
                      </div>
                      <span className="text-slate-600 text-sm font-medium bg-white px-3 py-1 rounded-full">
                        {edu.duration}
                      </span>
                    </div>
                    {edu.cgpa && (
                      <p className="text-slate-800 font-medium mb-2">
                        CGPA: {edu.cgpa}
                      </p>
                    )}
                    {edu.percentage && (
                      <p className="text-slate-800 font-medium mb-2">
                        Percentage: {edu.percentage}
                      </p>
                    )}
                    {edu.highlights && (
                      <ul className="space-y-1 mt-2">
                        {edu.highlights.map((highlight, i) => (
                          <li key={i} className="text-slate-700 text-sm flex items-start">
                            <ChevronRight size={16} className="text-green-600 mt-0.5 mr-1 flex-shrink-0" />
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-4 flex items-center">
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-2 rounded-lg mr-3">
                  <Award className="text-white" size={28} />
                </div>
                Certifications
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {certifications.map((cert, idx) => (
                  <Card
                    key={idx}
                    className="border-purple-200 hover:shadow-xl transition-all hover:-translate-y-1 bg-gradient-to-br from-purple-50 to-pink-50"
                  >
                    <CardContent className="p-6">
                      <h4 className="font-bold text-slate-900 mb-2">
                        {cert.title}
                      </h4>
                      <p className="text-purple-600 text-sm font-semibold mb-1">
                        {cert.issuer}
                      </p>
                      <div className="flex justify-between items-center">
                        <span className="text-slate-600 text-xs">
                          {cert.date}
                        </span>
                        <Badge
                          variant={cert.status === 'Completed' ? 'default' : 'secondary'}
                          className={cert.status === 'Completed' ? 'bg-green-500 text-white' : 'bg-yellow-500 text-white'}
                        >
                          {cert.status}
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <ContactForm personalInfo={personalInfo} />

      {/* Footer */}
      <footer className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-slate-300">
                © {new Date().getFullYear()} {personalInfo.name}. All rights
                reserved.
              </p>
            </div>
            <div className="flex space-x-6">
              {socialLinks.map((social) => {
                const Icon = socialIconMap[social.icon];
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-300 hover:text-cyan-400 transition-colors"
                    aria-label={social.name}
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;