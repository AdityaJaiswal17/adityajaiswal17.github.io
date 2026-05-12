import { ExternalLink, Trophy } from 'lucide-react'
import { education } from '../data/content'

export default function EducationSection() {
  const allAchievements = education.flatMap(item => item.achievements)

  return (
    <section className="py-12 border-t border-slate-700/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4 mb-6">
          <span className="method-badge">Education</span>
          <div className="section-divider mb-0" />
          <h2 className="text-xl font-bold text-white">Academic Background</h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          {education.map((item, i) => (
            <div key={i} className="card p-5 flex gap-4 items-start">
              {'logo' in item && item.logo && (
                <div className="shrink-0 w-12 h-12 rounded-lg bg-white flex items-center justify-center p-1.5 border border-slate-200/20">
                  <img
                    src={item.logo}
                    alt={item.institution}
                    className="w-full h-full object-contain"
                  />
                </div>
              )}

              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap mb-0.5">
                  <h3 className="text-white font-bold text-sm leading-snug">{item.degree}</h3>
                  {'upcoming' in item && item.upcoming && (
                    <span className="text-xs font-mono px-1.5 py-0.5 rounded-full bg-accent/15 text-accent border border-accent/30 shrink-0">
                      Upcoming
                    </span>
                  )}
                </div>
                <a
                  href={item.institutionUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent text-xs font-medium hover:text-slate-300 transition-colors inline-flex items-center gap-1"
                >
                  {item.institution}
                  <ExternalLink size={10} className="opacity-60" />
                </a>
                <div className="flex items-center gap-2 mt-1 flex-wrap">
                  <span className="text-slate-300 text-xs font-mono">{item.period}</span>
                  <span className="text-slate-600 text-xs">·</span>
                  <span className="text-slate-500 text-xs">{item.location}</span>
                </div>

                {item.highlights.length > 0 && (
                  <ul className="mt-3 space-y-1">
                    {item.highlights.map((h, j) => (
                      <li key={j} className="flex items-start gap-2 text-xs text-slate-400 leading-relaxed">
                        <span className="text-accent mt-1 shrink-0">›</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>

        {allAchievements.length > 0 && (
          <div className="mt-5 card p-5">
            <p className="text-white text-xs font-semibold uppercase tracking-widest mb-3 flex items-center gap-2">
              <Trophy size={12} className="text-accent" />
              Achievements
            </p>
            <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-1.5">
              {allAchievements.map((a, i) => (
                <li key={i} className="flex items-start gap-2 text-xs text-slate-400 leading-relaxed">
                  <span className="text-accent mt-1 shrink-0">›</span>
                  <span>{a}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  )
}
