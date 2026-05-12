import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex items-center justify-center pt-16">
      <div className="text-center px-4">
        <p className="font-mono text-accent text-8xl font-bold mb-4">404</p>
        <h1 className="text-3xl font-bold text-white mb-4">Page Not Found</h1>
        <p className="text-slate-400 mb-8">This page does not exist or was moved.</p>
        <Link to="/" className="btn-primary inline-flex">
          <ArrowLeft size={15} /> Back to Home
        </Link>
      </div>
    </div>
  )
}
