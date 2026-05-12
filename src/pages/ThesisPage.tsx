import { Link } from 'react-router-dom'
import { ArrowLeft, Github, FileText, ChevronRight, ExternalLink } from 'lucide-react'
import { asset } from '../utils/asset'

const meshPairs = [
  {
    label: 'Quarter Circle',
    tri: { src: asset('/images/self_upload/thesis/cross_tri.png'), alt: 'Quarter circle: initial tri mesh' },
    quad: { src: asset('/images/self_upload/thesis/cross_recombined.png'), alt: 'Quarter circle: recombined quad mesh' },
  },
  {
    label: 'Diamond Airfoil (Full View)',
    tri: { src: asset('/images/self_upload/thesis/airofil_tri.png'), alt: 'Diamond airfoil (full): initial tri mesh' },
    quad: { src: asset('/images/self_upload/thesis/airfoil_recombined.png'), alt: 'Diamond airfoil (full): recombined quad mesh' },
  },
  {
    label: 'Diamond Airfoil (Zoomed In)',
    tri: { src: asset('/images/self_upload/thesis/airfoil_tri_zoomedOut.png'), alt: 'Diamond airfoil (zoomed): initial tri mesh' },
    quad: { src: asset('/images/self_upload/thesis/airfoil_recombined_zoomed.png'), alt: 'Diamond airfoil (zoomed): recombined quad mesh' },
  },
  {
    label: 'Configuration 1',
    tri: { src: asset('/images/self_upload/thesis/config1_tri.png'), alt: 'Config 1: initial tri mesh' },
    quad: { src: asset('/images/self_upload/thesis/config1_recombined.png'), alt: 'Config 1: recombined quad mesh' },
  },
  {
    label: 'Configuration 2',
    tri: { src: asset('/images/self_upload/thesis/config2_tri.png'), alt: 'Config 2: initial tri mesh' },
    quad: { src: asset('/images/self_upload/thesis/config2_recombined.png'), alt: 'Config 2: recombined quad mesh' },
    quadZoomed: { src: asset('/images/self_upload/thesis/config2_recombined_zoomed.png'), alt: 'Config 2 zoomed: recombined quad mesh' },
  },
  {
    label: 'Quarter Circle (Zoomed)',
    tri: { src: asset('/images/self_upload/thesis/quarter_tri.png'), alt: 'Quarter (zoomed): initial tri mesh' },
    quad: { src: asset('/images/self_upload/thesis/quarter_recombine.png'), alt: 'Quarter (zoomed): recombined quad mesh' },
    quadZoomed: { src: asset('/images/self_upload/thesis/quarter_recombine_zoomed.png'), alt: 'Quarter (zoomed detail): recombined mesh' },
  },
]

export default function ThesisPage() {
  return (
    <div className="page-enter pt-24 pb-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-slate-500 mb-8">
          <Link to="/" className="hover:text-accent transition-colors">Home</Link>
          <ChevronRight size={14} />
          <span className="text-slate-300">Undergraduate Thesis</span>
        </nav>

        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-accent transition-colors mb-8 group"
        >
          <ArrowLeft size={15} className="group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>

        {/* Header */}
        <div className="mb-10">
          <span className="method-badge mb-4 block w-fit">Undergraduate Thesis · IISc</span>
          <div className="w-12 h-0.5 bg-accent/60 rounded-full mb-6" />
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4 leading-tight">
            Optimal Recombination Algorithms for Generating Quad-Dominant Meshes
          </h1>
          <p className="text-slate-400 leading-relaxed max-w-2xl mb-6">
            Algorithm that converts metric-adapted triangular meshes into quad-dominant meshes by scoring
            candidate triangle pairs with a combined aspect-ratio + angle-quality metric, recombining
            them greedily, and optionally smoothing. Done at the{' '}
            <strong className="text-slate-200">Indian Institute of Science (IISc)</strong> under{' '}
            <strong className="text-slate-200">Prof. Aravind Balan</strong>.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="https://github.com/AdityaJaiswal17/BITS_Pilani-Undergraduate-Thesis"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              <Github size={15} /> GitHub Repository
            </a>
            <a
              href={asset('/files/Aditya_Jaiswal_Thesis.pdf')}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <FileText size={15} /> Download Thesis PDF
            </a>
          </div>
        </div>

        {/* Work Highlights */}
        <Section title="Work Highlights" eyebrow="1 — Results">
          <p className="text-slate-400 text-sm mb-6 italic">
            Left figures show the initial triangular mesh. Right figures show the final quad-dominant mesh after recombination.
          </p>
          <div className="space-y-8">
            {meshPairs.map((pair) => (
              <div key={pair.label} className="card p-5">
                <p className="text-accent font-semibold text-sm font-mono mb-4">{pair.label}</p>
                <div className={`grid gap-4 ${'quadZoomed' in pair && pair.quadZoomed ? 'sm:grid-cols-3' : 'sm:grid-cols-2'}`}>
                  <MeshFigure src={pair.tri.src} alt={pair.tri.alt} label="Initial triangular mesh" />
                  <MeshFigure src={pair.quad.src} alt={pair.quad.alt} label="Recombined quad-dominant mesh" />
                  {'quadZoomed' in pair && pair.quadZoomed && (
                    <MeshFigure src={pair.quadZoomed.src} alt={pair.quadZoomed.alt} label="Recombined mesh (zoomed)" />
                  )}
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* Introduction */}
        <Section title="Introduction" eyebrow="2 — Background">
          <div className="prose-dark space-y-4 text-sm leading-relaxed">
            <p>
              This thesis develops a practical recombination pipeline to convert metric-adapted triangular
              meshes (Netgen <code>.vol</code>) into quad-dominant (hybrid) meshes.
            </p>
            <ul className="space-y-2 ml-4">
              {[
                'Triangular meshes are easy to adapt, but quads give better alignment with anisotropic flow and boundary layers and often reduce degrees of freedom needed for a target accuracy.',
                'The thesis proposes a two-metric scoring for candidate quad formation (aspect ratio and angle quality), a greedy selection algorithm, boundary weighting, Laplacian smoothing, and an MPI variant for scaling.',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-accent mt-1 shrink-0">›</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </Section>

        {/* Algorithm Pipeline */}
        <Section title="Algorithm Pipeline" eyebrow="3 — Methodology">
          <div className="space-y-5">
            <div className="p-4 bg-accent/5 border border-accent/20 rounded-lg">
              <p className="text-sm font-mono text-slate-300 leading-relaxed">
                Read metric-adapted <span className="text-accent">.vol</span> →
                enumerate candidate triangle pairs →
                compute <span className="text-accent">aspect-ratio &amp; angle quality</span> →
                combine with weight ω →
                sort candidates →
                <span className="text-accent"> greedy recombination</span> →
                optional <span className="text-accent">Laplacian smoothing</span> →
                write recombined <span className="text-accent">.vol</span>
              </p>
            </div>

            <div className="space-y-4">
              {pipelineSteps.map((step) => (
                <div key={step.step} className="card p-5">
                  <div className="flex items-start gap-4">
                    <span className="font-mono text-accent text-xs font-bold bg-accent/10 border border-accent/20 rounded px-2 py-1 shrink-0">
                      Step {step.step}
                    </span>
                    <div className="flex-1">
                      <h4 className="text-white font-semibold text-sm mb-1">{step.title}</h4>
                      <p className="text-slate-400 text-sm leading-relaxed">{step.description}</p>
                      {'image' in step && step.image && (
                        <figure className="mt-4 rounded-lg overflow-hidden border border-slate-700/50 max-w-sm">
                          <img src={step.image.src} alt={step.image.alt} className="w-full" />
                          <figcaption className="px-3 py-2 bg-navy-800/60 text-xs text-slate-400 italic">
                            {step.image.caption}
                          </figcaption>
                        </figure>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Notation figures */}
            <div className="grid sm:grid-cols-2 gap-4 mt-6">
              <MeshFigure
                src={asset('/images/self_upload/thesis/notations.jpg')}
                alt="Triangle notation"
                label="Triangle notation for identifying vertex and edges."
              />
              <MeshFigure
                src={asset('/images/self_upload/thesis/opp_neighbor_notation.jpg')}
                alt="Neighbor notation"
                label="Notation for identifying neighboring triangle."
              />
            </div>

            {/* Flowcharts */}
            <div className="grid sm:grid-cols-2 gap-4 mt-4">
              <MeshFigure
                src={asset('/images/self_upload/thesis/AR_algoFlowchart.png')}
                alt="AR algorithm flowchart"
                label="Algorithm to compute aspect ratios."
              />
              <MeshFigure
                src={asset('/images/self_upload/thesis/program_flowchart.png')}
                alt="Program flowchart"
                label="Program's algorithm overview."
              />
            </div>
          </div>
        </Section>

        {/* Numerical Results */}
        <Section title="Numerical Results" eyebrow="4 — Results">
          <div className="card overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-navy-700/60 border-b border-slate-700/50">
                  <th className="px-5 py-3 text-left text-slate-300 font-semibold">Mesh</th>
                  <th className="px-5 py-3 text-right text-slate-300 font-semibold"># Triangles</th>
                  <th className="px-5 py-3 text-right text-slate-300 font-semibold"># Quads</th>
                  <th className="px-5 py-3 text-right text-slate-300 font-semibold">DOF</th>
                  <th className="px-5 py-3 text-right text-slate-300 font-semibold">L2 Error</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-700/30">
                  <td className="px-5 py-3 text-slate-300">Initial</td>
                  <td className="px-5 py-3 text-right font-mono text-white">519</td>
                  <td className="px-5 py-3 text-right font-mono text-slate-400">0</td>
                  <td className="px-5 py-3 text-right font-mono text-white">3,114</td>
                  <td className="px-5 py-3 text-right font-mono text-white">2.48×10⁻⁵</td>
                </tr>
                <tr>
                  <td className="px-5 py-3 text-accent font-medium">Recombined</td>
                  <td className="px-5 py-3 text-right font-mono text-white">37</td>
                  <td className="px-5 py-3 text-right font-mono text-accent font-semibold">241</td>
                  <td className="px-5 py-3 text-right font-mono text-accent font-semibold">2,391</td>
                  <td className="px-5 py-3 text-right font-mono text-white">4.25×10⁻⁴</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-4 space-y-2">
            {[
              'Recombination reduces element counts and DOFs while keeping numerical error within an engineeringly acceptable range.',
              'The L2 error increased compared to the triangular solution, but the tradeoff is fewer DOFs and improved element alignment — often desirable in solver pipelines where DOF budget is constrained.',
              'Boundary-layer regions re-meshed with quad rows aligned tangentially.',
              'Smoothing reduces corner skewness and improves internal angles.',
            ].map((point, i) => (
              <p key={i} className="flex items-start gap-2 text-sm text-slate-400">
                <span className="text-accent mt-0.5 shrink-0">›</span>
                {point}
              </p>
            ))}
          </div>
        </Section>

        {/* Prerequisites & Running */}
        <Section title="How to Run" eyebrow="5 — Reproducibility">
          <div className="space-y-4">
            <div className="card p-5">
              <h4 className="text-white font-semibold text-sm mb-2">Prerequisites</h4>
              <p className="text-slate-400 text-sm">
                Requires <code className="font-mono text-xs bg-navy-700/80 text-accent px-1.5 py-0.5 rounded">netgen</code> and{' '}
                <code className="font-mono text-xs bg-navy-700/80 text-accent px-1.5 py-0.5 rounded">ngsolve</code> packages
                to run and visualize the mesh. Download from{' '}
                <a href="https://ngsolve.org/downloads" target="_blank" rel="noopener noreferrer"
                  className="text-accent hover:text-slate-300 underline underline-offset-2 inline-flex items-center gap-1">
                  ngsolve.org/downloads <ExternalLink size={11} />
                </a>.
              </p>
            </div>
            <div className="card p-5">
              <h4 className="text-white font-semibold text-sm mb-3">Execution</h4>
              <pre className="bg-navy-900/80 rounded-lg p-4 text-sm font-mono text-slate-300 overflow-x-auto">
                <span className="text-slate-500"># Python 2</span>{'\n'}
                <span className="text-accent">python</span> recombination.py{'\n\n'}
                <span className="text-slate-500"># Python 3</span>{'\n'}
                <span className="text-accent">python3</span> recombination.py
              </pre>
            </div>
          </div>
        </Section>

        {/* Future Work */}
        <Section title="Future Work" eyebrow="6 — Extensions">
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              'Use local search to improve global quad quality',
              'Angle-based smoothing (more robust, accounts for vertex crossing)',
              'Metric-respecting smoothing',
              'Extend to 3D prism/hexahedral recombination',
              'Integrate solver feedback for adaptive recombination',
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-2 text-sm text-slate-400 card p-4">
                <span className="text-accent mt-0.5 shrink-0 font-mono text-xs">0{i + 1}</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </Section>
      </div>
    </div>
  )
}

function Section({ title, eyebrow, children }: {
  title: string
  eyebrow: string
  children: React.ReactNode
}) {
  return (
    <div className="mt-14">
      <span className="method-badge mb-3 block w-fit">{eyebrow}</span>
      <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
        <span className="w-1 h-6 bg-accent rounded-full shrink-0" />
        {title}
      </h2>
      {children}
    </div>
  )
}

function MeshFigure({ src, alt, label }: { src: string; alt: string; label: string }) {
  return (
    <figure className="rounded-lg overflow-hidden border border-slate-700/50 flex flex-col">
      <div className="aspect-[4/3] bg-black overflow-hidden">
        <img src={src} alt={alt} className="w-full h-full object-contain" />
      </div>
      <figcaption className="px-3 py-2.5 bg-navy-800/60 text-xs text-slate-400 italic">
        {label}
      </figcaption>
    </figure>
  )
}

const pipelineSteps = [
  {
    step: 1,
    title: 'Input',
    description: 'Reads a Netgen/NGSolve .vol file containing a triangular mesh adapted in metric space.',
    image: { src: asset('/images/self_upload/thesis/meshInput.png'), alt: 'Mesh input block from the code', caption: 'Mesh input block (snippet taken from the code).' },
  },
  {
    step: 2,
    title: 'Neighbor Discovery',
    description: 'For each triangle, identifies up to three neighboring triangles sharing an edge (opposite vertices) using neighbors_elm and neighbors_vert.',
  },
  {
    step: 3,
    title: 'Two Quality Metrics',
    description: 'Aspect ratio (AR = max_side / min_side) and angle quality (deviation of quad angles from 90°, bounded in [0,1]).',
  },
  {
    step: 4,
    title: 'Normalization & Linear Combination',
    description: 'AR normalized by global maximum. Combined score: q = ω·(AR_local/max(AR)) + (1−ω)·angle_quality',
  },
  {
    step: 5,
    title: 'Collect & Sort',
    description: 'All candidate pairs collected into elm_info array and sorted descending by combined quality score.',
  },
  {
    step: 6,
    title: 'Greedy Recombination',
    description: 'Iterate sorted list; accept candidate pairs whose triangles are still active, mark both inactive, and create quad element records.',
  },
  {
    step: 7,
    title: 'Boundary Handling',
    description: 'Candidates near domain boundaries get score multiplied by boundary factor (e.g. 1.5) to favor quads near walls.',
  },
  {
    step: 8,
    title: 'Laplacian Smoothing (Optional)',
    description: 'Averages non-boundary vertex positions across their neighbors for n iterations to improve cell shapes.',
  },
  {
    step: 9,
    title: 'Output',
    description: 'Writes recombined .vol files (one per experimental configuration) and optional PNG/SVG visualizations.',
  },
]
