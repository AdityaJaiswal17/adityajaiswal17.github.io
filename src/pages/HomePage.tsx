import { Link } from 'react-router-dom'
import { Github, Linkedin, Mail, FileText, ArrowRight, MapPin } from 'lucide-react'
import { siteConfig, aboutText, fdmProjects, lbmProjects } from '../data/content'
import { asset } from '../utils/asset'
import ExperienceTimeline from '../components/ExperienceTimeline'
import EducationSection from '../components/EducationSection'

export default function HomePage() {
  return (
    <div className="page-enter">
      {/* ─── Hero ─── */}
      <section className="relative pt-28 pb-12 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-1/4 w-56 h-56 bg-white/3 rounded-full blur-3xl" />
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">
            {/* Text */}
            <div className="lg:col-span-3 space-y-6">
              <div className="flex items-center gap-2">
                <span className="w-8 h-px bg-accent" />
                <span className="font-mono text-accent text-xs tracking-widest uppercase">
                  Hello, I am
                </span>
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight">
                Aditya
                <br />
                <span className="text-accent">Jaiswal</span>
              </h1>

              <p className="text-slate-300 text-lg leading-relaxed max-w-xl">
                I like doing math and turning it into things that{' '}
                <span className="text-white font-medium">move</span>,{' '}
                <span className="text-white font-medium">fly</span>, or{' '}
                <span className="text-white font-medium">make sense</span>.
              </p>
              
              <div className="flex flex-wrap items-center gap-2 text-sm text-slate-400">
                <span className="flex items-center gap-1.5">
                  <MapPin size={13} className="text-accent" />
                  {siteConfig.location}
                </span>
              </div>

              <div className="flex flex-wrap gap-3 pt-2">
                <Link to="/projects" className="btn-primary">
                  View Projects <ArrowRight size={15} />
                </Link>
                <a href={siteConfig.cvUrl} target="_blank" rel="noopener noreferrer" className="btn-outline">
                  <FileText size={15} /> Download CV
                </a>
              </div>

              <div className="flex items-center gap-4 pt-1">
                <a href={siteConfig.github} target="_blank" rel="noopener noreferrer"
                  className="p-2 text-slate-500 hover:text-accent transition-colors" aria-label="GitHub">
                  <Github size={20} />
                </a>
                <a href={siteConfig.linkedin} target="_blank" rel="noopener noreferrer"
                  className="p-2 text-slate-500 hover:text-accent transition-colors" aria-label="LinkedIn">
                  <Linkedin size={20} />
                </a>
                <a href={`mailto:${siteConfig.email}`}
                  className="p-2 text-slate-500 hover:text-accent transition-colors" aria-label="Email">
                  <Mail size={20} />
                </a>
              </div>
            </div>

            {/* Profile image */}
            <div className="lg:col-span-2 flex justify-center lg:justify-end">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-br from-white/10 to-white/5 rounded-2xl blur-lg" />
                <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-2xl overflow-hidden border border-accent/20">
                  <img
                    src={siteConfig.profilePic}
                    alt="Aditya Jaiswal"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Education (horizontal cards, just below hero) ─── */}
      <EducationSection />

      {/* ─── About ─── */}
      <section className="py-16 border-t border-slate-700/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <span className="method-badge mb-4 block w-fit">About</span>
                <div className="section-divider" />
                <h2 className="text-3xl font-bold text-white mb-4">Background &amp; Research</h2>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Graduate in Mechanical Engineering from BITS Pilani, with research in applied
                  mathematics, numerical methods, and scientific computing.
                </p>
              </div>
            </div>

            <div className="lg:col-span-2 space-y-5">
              {/* IIT Bombay research images */}
              <div className="grid grid-cols-2 gap-3">
                <figure className="rounded-xl overflow-hidden border border-slate-700/50">
                  <img
                    src={asset('/images/self_upload/Phase_field_ST_0.0001.png')}
                    alt="Phase field simulation — IIT Bombay"
                    className="w-full h-auto object-contain"
                  />
                </figure>
                <figure className="rounded-xl overflow-hidden border border-slate-700/50">
                  <img
                    src={asset('/images/self_upload/ST_0.0001.png')}
                    alt="Surface tension forcing — IIT Bombay"
                    className="w-full h-auto object-contain"
                  />
                </figure>
              </div>
              <p className="text-slate-400 text-xs italic text-center">
                Part of work done as a Research Intern at IIT Bombay. Also presented at{' '}
                <a
                  href="https://ge.iitm.ac.in/compflu-2023/wp-content/uploads/2023/12/Abstract%20booklet%20COMPFLU%20v10.pdf#page=355"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent/80 hover:text-accent underline underline-offset-2 transition-colors"
                >
                  CompFlu 2023
                </a>
                ; publication manuscript under preparation.
              </p>

              {aboutText.map((para, i) => (
                <p
                  key={i}
                  className="prose-dark text-base leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: para }}
                />
              ))}

              {/* Flow past cylinder GIF */}
              <div className="mt-4 rounded-xl overflow-hidden border border-slate-700/50">
                <img
                  src={asset('/images/self_upload/flowPastCylinder.gif')}
                  alt="Flow past cylinder — Lattice Boltzmann Method"
                  className="w-full"
                />
                <p className="text-slate-400 text-sm text-center py-3 bg-navy-800/60 px-4">
                  Flow past cylinder, modelled using the Lattice Boltzmann Method and visualized using gnuplot.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Experience Timeline ─── */}
      <ExperienceTimeline />

      {/* ─── Projects Overview ─── */}
      <section className="py-16 border-t border-slate-700/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <span className="method-badge mb-4 block w-fit">Projects</span>
              <div className="section-divider" />
              <h2 className="text-3xl font-bold text-white">Numerical Methods</h2>
              <p className="text-slate-400 text-sm mt-2 max-w-xl">
                All codes are written in C++ with OpenMP parallelization. Visualized using gnuplot.
              </p>
            </div>
            <Link to="/projects" className="btn-outline shrink-0">
              All Projects <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <MethodCard
              method="FDM"
              title="Finite Difference Method"
              count={fdmProjects.length}
              description="Deterministic numerical technique that solves PDEs by discretizing differential operators over a computational grid using finite difference stencils."
              projectLinks={fdmProjects.slice(0, 3).map(p => ({ label: p.title, to: `/projects/fdm/${p.id}` }))}
              color="from-white/8 to-white/3"
            />
            <MethodCard
              method="LBM"
              title="Lattice Boltzmann Method"
              count={lbmProjects.length}
              description="Mesoscopic transient solver for fluid dynamics that models particle distribution functions on a discrete lattice, recovering macroscopic properties indirectly."
              projectLinks={lbmProjects.slice(0, 3).map(p => ({ label: p.title, to: `/projects/lbm/${p.id}` }))}
              color="from-white/5 to-white/2"
            />
          </div>
        </div>
      </section>

      {/* ─── Thesis CTA ─── */}
      <section className="py-16 border-t border-slate-700/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative card p-8 sm:p-12 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-white/3 via-transparent to-white/2 pointer-events-none" />
            <div className="relative grid lg:grid-cols-3 gap-8 items-center">
              <div className="lg:col-span-2">
                <span className="method-badge mb-4 block w-fit">Undergraduate Thesis</span>
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                  Optimal Recombination Algorithms for Quad-Dominant Meshes
                </h2>
                <p className="text-slate-400 leading-relaxed text-sm">
                  Algorithm development for converting metric-adapted triangular meshes into quad-dominant
                  meshes using a combined aspect-ratio + angle-quality scoring metric with greedy recombination
                  and Laplacian smoothing. Done at IISc under Prof. Aravind Balan.
                </p>
              </div>
              <div className="lg:col-span-1 flex flex-col gap-3">
                <Link to="/thesis" className="btn-primary justify-center">
                  Read Thesis Details <ArrowRight size={15} />
                </Link>
                <a
                  href="/files/Aditya_Jaiswal_Thesis.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline justify-center"
                >
                  <FileText size={14} /> Download PDF
                </a>
                <a
                  href="https://github.com/AdityaJaiswal17/BITS_Pilani-Undergraduate-Thesis"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 text-sm text-slate-400 hover:text-accent transition-colors py-2"
                >
                  <Github size={14} /> View Code
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

function MethodCard({
  method, title, count, description, projectLinks, color,
}: {
  method: string
  title: string
  count: number
  description: string
  projectLinks: { label: string; to: string }[]
  color: string
}) {
  return (
    <div className={`card p-6 group relative overflow-hidden`}>
      <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`} />
      <div className="relative">
        <div className="flex items-start justify-between mb-4">
          <span className="method-badge">{method}</span>
          <span className="text-slate-500 text-xs font-mono">{count} projects</span>
        </div>
        <h3 className="text-white font-bold text-xl mb-3">{title}</h3>
        <p className="text-slate-400 text-sm leading-relaxed mb-5">{description}</p>

        <div className="space-y-1.5">
          {projectLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="flex items-center gap-2 text-sm text-slate-400 hover:text-accent transition-colors py-1"
            >
              <ArrowRight size={13} className="shrink-0" />
              {link.label}
            </Link>
          ))}
          <Link
            to="/projects"
            className="flex items-center gap-2 text-sm text-accent/70 hover:text-accent transition-colors py-1 mt-1"
          >
            <ArrowRight size={13} className="shrink-0" />
            View all {method} projects
          </Link>
        </div>
      </div>
    </div>
  )
}
