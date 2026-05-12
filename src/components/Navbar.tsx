import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Github, Linkedin, FileText } from 'lucide-react'
import { siteConfig } from '../data/content'

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Projects', path: '/projects' },
  { label: 'Thesis', path: '/thesis' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [location])

  const isActive = (path: string) =>
    path === '/' ? location.pathname === '/' : location.pathname.startsWith(path)

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-navy-900/95 backdrop-blur-md border-b border-slate-700/50 shadow-xl shadow-navy-950/50'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 group"
          >
            <span className="font-mono text-accent text-sm font-bold tracking-wider group-hover:text-slate-300 transition-colors">
              AJ
            </span>
            <span className="hidden sm:block text-white font-semibold text-sm">
              Aditya Jaiswal
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`nav-link ${isActive(link.path) ? 'nav-link-active text-accent' : ''}`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-400 hover:text-accent transition-colors"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-400 hover:text-accent transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href={siteConfig.cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline text-xs py-1.5 px-3"
            >
              <FileText size={14} />
              CV
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-slate-400 hover:text-white transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-slate-700/50 bg-navy-900/98 backdrop-blur-md">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    isActive(link.path)
                      ? 'text-accent bg-accent/10'
                      : 'text-slate-400 hover:text-white hover:bg-slate-700/30'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex items-center gap-3 px-4 pt-3 mt-2 border-t border-slate-700/50">
                <a href={siteConfig.github} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-slate-400 hover:text-accent transition-colors">
                  <Github size={16} /> GitHub
                </a>
                <a href={siteConfig.linkedin} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-slate-400 hover:text-accent transition-colors">
                  <Linkedin size={16} /> LinkedIn
                </a>
                <a href={siteConfig.cvUrl} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-accent hover:text-slate-300 transition-colors">
                  <FileText size={16} /> CV
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
