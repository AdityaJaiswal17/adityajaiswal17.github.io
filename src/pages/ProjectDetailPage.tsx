import { useParams, Link, Navigate } from 'react-router-dom'
import { ArrowLeft, Github, ChevronRight, Terminal, FileOutput } from 'lucide-react'
import ReactMarkdown from 'react-markdown'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import { fdmProjects, lbmProjects } from '../data/content'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'

export default function ProjectDetailPage() {
  const { method, id } = useParams<{ method: string; id: string }>()

  const allProjects = method === 'fdm' ? fdmProjects : lbmProjects
  const project = allProjects.find(p => p.id === id)

  if (!project) return <Navigate to="/projects" replace />

  const methodName = method === 'fdm' ? 'Finite Difference Method' : 'Lattice Boltzmann Method'
  const { fullContent } = project

  return (
    <div className="page-enter pt-24 pb-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-slate-500 mb-8">
          <Link to="/" className="hover:text-accent transition-colors">Home</Link>
          <ChevronRight size={14} />
          <Link to="/projects" className="hover:text-accent transition-colors">Projects</Link>
          <ChevronRight size={14} />
          <span className="method-badge">{method?.toUpperCase()}</span>
          <ChevronRight size={14} />
          <span className="text-slate-300 truncate">{project.title}</span>
        </nav>

        {/* Back */}
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-accent transition-colors mb-8 group"
        >
          <ArrowLeft size={15} className="group-hover:-translate-x-1 transition-transform" />
          Back to Projects
        </Link>

        {/* Header */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="method-badge">{method?.toUpperCase()}</span>
            <span className="text-slate-500 text-sm">{methodName}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4 leading-tight">
            {fullContent.title}
          </h1>
          <div className="flex flex-wrap gap-2 mb-5">
            {project.tags.map((tag) => (
              <span key={tag} className="tag">{tag}</span>
            ))}
          </div>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline text-sm"
          >
            <Github size={15} /> View on GitHub
          </a>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Description */}
            <div className="card p-6">
              <h2 className="text-white font-semibold text-lg mb-4 flex items-center gap-2">
                <span className="w-1 h-5 bg-accent rounded-full" />
                Overview
              </h2>
              <div className="prose-math text-slate-300 text-sm leading-relaxed">
                <ReactMarkdown
                  remarkPlugins={[remarkMath]}
                  rehypePlugins={[rehypeKatex]}
                  components={{
                    p: ({ children }) => <p className="mb-3 text-slate-300 leading-relaxed">{children}</p>,
                    strong: ({ children }) => <strong className="text-white font-semibold">{children}</strong>,
                    a: ({ href, children }) => (
                      <a href={href} target="_blank" rel="noopener noreferrer"
                        className="text-accent hover:text-slate-300 underline underline-offset-2">
                        {children}
                      </a>
                    ),
                    code: ({ children }) => (
                      <code className="font-mono text-xs bg-navy-700/80 text-accent px-1.5 py-0.5 rounded">
                        {children}
                      </code>
                    ),
                  }}
                >
                  {fullContent.description}
                </ReactMarkdown>
              </div>
            </div>

            {/* Images */}
            {project.images.length > 0 && (
              <div className="card p-6">
                <h2 className="text-white font-semibold text-lg mb-5 flex items-center gap-2">
                  <span className="w-1 h-5 bg-accent rounded-full" />
                  Results &amp; Visualizations
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {project.images.map((img, i) => (
                    <figure key={i} className="rounded-lg overflow-hidden border border-slate-700/50 flex flex-col">
                      <div className="aspect-[4/3] bg-black overflow-hidden">
                        <img
                          src={img.src}
                          alt={img.caption}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <figcaption className="px-4 py-2.5 bg-navy-800/60 text-xs text-slate-400 italic">
                        {img.caption}
                      </figcaption>
                    </figure>
                  ))}
                </div>
                {fullContent.notes && (
                  <div className="mt-5 p-4 bg-accent/5 border border-accent/20 rounded-lg">
                    <p className="text-slate-300 text-sm leading-relaxed">
                      <span className="text-accent font-semibold">Note: </span>
                      {fullContent.notes}
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-5">
            {/* Compilation */}
            <div className="card p-5">
              <h3 className="text-white font-semibold text-sm mb-3 flex items-center gap-2">
                <Terminal size={14} className="text-accent" />
                Compilation &amp; Execution
              </h3>
              <SyntaxHighlighter
                language="bash"
                style={vscDarkPlus}
                customStyle={{
                  background: 'rgba(10,14,26,0.8)',
                  borderRadius: '8px',
                  fontSize: '12px',
                  margin: 0,
                  padding: '12px',
                }}
              >
                {fullContent.compilation}
              </SyntaxHighlighter>
            </div>

            {/* Output Structure */}
            <div className="card p-5">
              <h3 className="text-white font-semibold text-sm mb-3 flex items-center gap-2">
                <FileOutput size={14} className="text-accent" />
                Output Structure
              </h3>
              <ul className="space-y-2">
                {fullContent.outputStructure.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-slate-400">
                    <span className="text-accent mt-0.5 shrink-0 font-mono">›</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Other projects in same method */}
            <div className="card p-5">
              <h3 className="text-white font-semibold text-sm mb-3">
                Other {method?.toUpperCase()} Projects
              </h3>
              <div className="space-y-2">
                {allProjects
                  .filter(p => p.id !== id)
                  .map(p => (
                    <Link
                      key={p.id}
                      to={`/projects/${method}/${p.id}`}
                      className="flex items-center gap-2 text-xs text-slate-400 hover:text-accent transition-colors py-1"
                    >
                      <ChevronRight size={12} className="shrink-0" />
                      {p.title}
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
