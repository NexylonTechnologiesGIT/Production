import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowLeft, Home } from 'lucide-react'
import SEO from '@/components/seo/SEO'

export default function NotFound() {
  return (
    <>
      <SEO
        title="Page Not Found"
        description="The page you are looking for could not be found. Return to Nexylon Technologies's homepage."
        noIndex
      />
      <section
        className="min-h-[70vh] flex items-center justify-center py-24 bg-hero-gradient relative overflow-hidden"
        aria-label="Page not found"
      >
        <div className="mesh-blob w-96 h-96 top-0 right-0 bg-blue-700/15" aria-hidden />
        <div className="container-narrow text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
          >
            <div className="text-8xl font-black font-display gradient-text mb-4" aria-hidden>404</div>
            <h1 className="text-4xl font-display font-bold text-white mb-4">Page Not Found</h1>
            <p className="text-slate-400 text-lg max-w-md mx-auto mb-8">
              The page you are looking for may have moved, been renamed, or no longer exists.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/" className="btn-primary">
                <Home size={17} aria-hidden />
                Return to Homepage
              </Link>
              <button
                onClick={() => window.history.back()}
                className="btn-secondary"
                aria-label="Go back to previous page"
              >
                <ArrowLeft size={17} aria-hidden />
                Go Back
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
