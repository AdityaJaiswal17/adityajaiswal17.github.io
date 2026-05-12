import { Github, Linkedin, Mail, FileText } from 'lucide-react'
import { siteConfig } from '../data/content'

export default function Footer() {
  return (
    <footer className="border-t border-slate-700/50 bg-navy-900/60 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="text-white font-semibold">{siteConfig.name}</p>
            <p className="text-slate-400 text-sm mt-1">{siteConfig.subtitle}</p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-slate-700/40 text-slate-400 hover:text-accent hover:bg-accent/10 transition-all"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-slate-700/40 text-slate-400 hover:text-accent hover:bg-accent/10 transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              className="p-2.5 rounded-lg bg-slate-700/40 text-slate-400 hover:text-accent hover:bg-accent/10 transition-all"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
            <a
              href={siteConfig.cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-slate-700/40 text-slate-400 hover:text-accent hover:bg-accent/10 transition-all"
              aria-label="CV"
            >
              <FileText size={18} />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-slate-700/40 text-center">
          <p className="text-slate-500 text-xs">
            © {new Date().getFullYear()} {siteConfig.name} · Built with React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}
