import { ExternalLink, BookOpen } from 'lucide-react'
import { experience } from '../data/content'

export default function ExperienceTimeline() {
  return (
    <section className="py-16 border-t border-slate-700/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-4 gap-8 lg:gap-12">

          {/* Left sticky label */}
          <div className="lg:col-span-1">
            <div className="lg:sticky lg:top-24">
              <span className="method-badge mb-4 block w-fit">Experience</span>
              <div className="section-divider" />
              <h2 className="text-3xl font-bold text-white">Work &amp; Research</h2>
            </div>
          </div>

          {/* Timeline */}
          <div className="lg:col-span-3 relative">
            {/* Vertical line — centered in the 2rem (32px) left gutter */}
            <div className="absolute left-[15px] top-3 bottom-3 w-px bg-gradient-to-b from-accent/60 via-slate-600/40 to-transparent hidden sm:block" />

            <div className="space-y-5 sm:pl-8">
              {experience.map((item, i) => (
                <div key={i} className="relative group">
                  {/* Timeline dot — centered at left-[15px] of the outer container */}
                  <div className="absolute -left-8 top-6 hidden sm:flex w-8 items-center justify-center">
                    {item.current ? (
                      <span className="w-3 h-3 rounded-full bg-accent shadow-lg shadow-accent/40 ring-[3px] ring-navy-950 shrink-0" />
                    ) : (
                      <span className="w-3 h-3 rounded-full border-2 border-slate-500 bg-navy-950 group-hover:border-accent transition-colors duration-300 shrink-0" />
                    )}
                  </div>

                  {/* Card */}
                  <div className="card p-5 group-hover:border-accent/30 transition-all duration-300">
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                      <div className="flex items-start gap-3 flex-1 min-w-0">
                        {/* Logo */}
                        {'logo' in item && item.logo && (
                          <div className="shrink-0 w-10 h-10 rounded-lg bg-white flex items-center justify-center p-1 border border-slate-200/20">
                            <img
                              src={item.logo}
                              alt={item.company}
                              className={`w-full h-full object-contain ${'logoInvert' in item && item.logoInvert ? 'invert' : ''}`}
                            />
                          </div>
                        )}
                        <div className="min-w-0">
                          <div className="flex items-center gap-2 flex-wrap">
                            <h3 className="text-white font-bold text-sm leading-snug">{item.role}</h3>
                            {item.current && (
                              <span className="text-xs font-mono px-1.5 py-0.5 rounded bg-accent/15 text-accent border border-accent/25">
                                Current
                              </span>
                            )}
                          </div>
                          <div className="flex flex-wrap items-center gap-2 mt-0.5">
                            <a
                              href={item.companyUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-accent text-sm font-medium hover:text-slate-300 transition-colors inline-flex items-center gap-1"
                            >
                              {item.company}
                              <ExternalLink size={10} className="opacity-60" />
                            </a>
                            {'advisor' in item && item.advisor && (
                              <>
                                <span className="text-slate-600">·</span>
                                <span className="text-slate-400 text-xs">under {item.advisor}</span>
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="text-right shrink-0">
                        <p className="text-slate-300 text-xs font-mono">{item.period}</p>
                        <p className="text-slate-500 text-xs mt-0.5">{item.location}</p>
                      </div>
                    </div>

                    {'description' in item && item.description && (
                      <p className="text-slate-300 text-sm leading-relaxed mb-2">{item.description}</p>
                    )}

                    {'venue' in item && item.venue && item.venueUrl && (
                      <a
                        href={item.venueUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs text-accent/80 hover:text-accent mb-3 transition-colors"
                      >
                        <BookOpen size={11} />
                        {item.venue}
                        <ExternalLink size={10} className="opacity-60" />
                      </a>
                    )}

                    <ul className="space-y-1.5 mt-1">
                      {item.bullets.map((bullet, j) => (
                        <li key={j} className="flex items-start gap-2.5 text-sm text-slate-400 leading-relaxed">
                          <span className="text-accent mt-1.5 shrink-0 text-xs">›</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
