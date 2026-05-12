import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Github, ArrowRight, Code2 } from 'lucide-react'
import { fdmProjects, lbmProjects } from '../data/content'

type Filter = 'all' | 'fdm' | 'lbm'

export default function ProjectsPage() {
  const [filter, setFilter] = useState<Filter>('all')

  const allProjects = [
    ...fdmProjects.map(p => ({ ...p, method: 'fdm' as const })),
    ...lbmProjects.map(p => ({ ...p, method: 'lbm' as const })),
  ]

  const filtered = filter === 'all' ? allProjects : allProjects.filter(p => p.method === filter)

  return (
    <div className="page-enter pt-24 pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-14">
          <span className="method-badge mb-4 block w-fit">Projects</span>
          <div className="section-divider" />
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Numerical Methods Projects
          </h1>
          <p className="text-slate-400 max-w-2xl leading-relaxed">
            A collection of computational fluid dynamics and numerical analysis implementations,
            all written in C++ with OpenMP parallelization. Data visualized using gnuplot.
          </p>
          <p className="text-slate-500 text-sm mt-3 font-mono border border-slate-700/50 rounded-lg px-3 py-2 inline-block">
            ⓘ All codes were independently developed. Links lead to GitHub repositories.
          </p>
        </div>

        {/* Method Overview Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-14">
          <MethodOverviewCard
            method="LBM"
            title="Lattice Boltzmann Method"
            description="Mesoscopic, transient solver based on the Boltzmann transport equation with BGK collision model. Alternates between Streaming and Collision steps. Unlike FDM, important variables are recovered indirectly by solving the discretized Boltzmann equation."
            count={lbmProjects.length}
            active={filter === 'lbm'}
            onClick={() => setFilter(filter === 'lbm' ? 'all' : 'lbm')}
          />
          <MethodOverviewCard
            method="FDM"
            title="Finite Difference Method"
            description="Deterministic numerical technique that directly discretizes PDEs over a computational grid. Derivatives are approximated by difference quotients, converting governing equations into a system of algebraic equations solved iteratively or directly."
            count={fdmProjects.length}
            active={filter === 'fdm'}
            onClick={() => setFilter(filter === 'fdm' ? 'all' : 'fdm')}
          />
        </div>

        {/* Filter */}
        <div className="flex items-center gap-3 mb-8">
          <span className="text-slate-400 text-sm">Filter:</span>
          {(['all', 'fdm', 'lbm'] as Filter[]).map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-1.5 rounded-full text-xs font-medium font-mono uppercase tracking-wider transition-all ${
                filter === f
                  ? 'bg-accent text-navy-950 shadow-lg shadow-accent/20'
                  : 'bg-slate-700/40 text-slate-400 hover:bg-slate-700/70 hover:text-white'
              }`}
            >
              {f === 'all' ? 'All' : f.toUpperCase()} {f !== 'all' && `(${f === 'fdm' ? fdmProjects.length : lbmProjects.length})`}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((project) => (
            <ProjectCard key={`${project.method}-${project.id}`} project={project} />
          ))}
        </div>
      </div>
    </div>
  )
}

function MethodOverviewCard({
  method, title, description, count, active, onClick,
}: {
  method: string
  title: string
  description: string
  count: number
  active: boolean
  onClick: () => void
}) {
  return (
    <button
      onClick={onClick}
      className={`card p-6 text-left transition-all duration-200 ${
        active ? 'border-accent/60 bg-accent/5 shadow-lg shadow-accent/10' : ''
      }`}
    >
      <div className="flex items-start justify-between mb-3">
        <span className="method-badge">{method}</span>
        <span className="text-slate-500 text-xs font-mono">{count} projects</span>
      </div>
      <h3 className="text-white font-semibold text-base mb-2">{title}</h3>
      <p className="text-slate-400 text-sm leading-relaxed">{description}</p>
      <p className="text-accent text-xs mt-3 font-medium">
        {active ? '✓ Filtered' : 'Click to filter'}
      </p>
    </button>
  )
}

type AnyProject = Omit<(typeof fdmProjects)[0], 'method'> & { method: 'fdm' | 'lbm' }

function ProjectCard({ project }: { project: AnyProject }) {
  const previewImg = project.images[0]

  return (
    <Link
      to={`/projects/${project.method}/${project.id}`}
      className="card group flex flex-col overflow-hidden"
    >
      {previewImg && (
        <div className="aspect-video overflow-hidden bg-navy-800">
          <img
            src={previewImg.src}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      )}
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-center gap-2 mb-2">
          <span className="method-badge text-xs">{project.method.toUpperCase()}</span>
        </div>
        <h3 className="text-white font-semibold text-base mb-2 group-hover:text-accent transition-colors">
          {project.title}
        </h3>
        <p className="text-slate-400 text-sm leading-relaxed flex-1 mb-4">{project.excerpt}</p>
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tags.slice(0, 4).map((tag) => (
            <span key={tag} className="tag-gray text-xs">{tag}</span>
          ))}
        </div>
        <div className="flex items-center justify-between">
          <span className="text-accent text-xs font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
            View Details <ArrowRight size={12} />
          </span>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="p-1.5 text-slate-500 hover:text-accent transition-colors"
          >
            <Github size={15} />
          </a>
        </div>
      </div>
    </Link>
  )
}
