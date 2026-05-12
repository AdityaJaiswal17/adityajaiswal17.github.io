import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Loader from './components/Loader'
import HomePage from './pages/HomePage'
import ProjectsPage from './pages/ProjectsPage'
import ProjectDetailPage from './pages/ProjectDetailPage'
import ThesisPage from './pages/ThesisPage'
import NotFoundPage from './pages/NotFoundPage'

export default function App() {
  return (
    <>
      <Loader />
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/projects/:method/:id" element={<ProjectDetailPage />} />
            <Route path="/thesis" element={<ThesisPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  )
}
