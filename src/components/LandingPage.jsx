import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { designVariants } from '../data/teamData';

const LandingPage = () => {
  const variants = Object.values(designVariants);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto"
      >
        {/* Header */}
        <header className="text-center mb-16">
          <motion.h1
            className="text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            Team Resume Portfolio
          </motion.h1>
          <p className="text-xl text-slate-300 mb-2">
            10 Innovative Design Approaches for High-Stakes Project Bids
          </p>
          <p className="text-sm text-slate-400">
            Built with React, Framer Motion, and Tailwind CSS | Optimized for A4 Print
          </p>
        </header>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-4xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {[
            { label: 'Team Members', value: '4' },
            { label: 'Combined Experience', value: '13+ Years' },
            { label: 'Design Variants', value: '10' },
            { label: 'Technologies', value: '50+' }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-4 text-center border border-slate-700"
              whileHover={{ scale: 1.05, borderColor: '#60A5FA' }}
              transition={{ duration: 0.2 }}
            >
              <div className="text-3xl font-bold text-blue-400">{stat.value}</div>
              <div className="text-sm text-slate-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Prototype Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {variants.map((variant, index) => (
            <motion.div
              key={variant.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link to={`/${variant.id}`}>
                <motion.div
                  className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-blue-500 transition-all cursor-pointer group"
                  whileHover={{ scale: 1.02, y: -5 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Prototype Preview */}
                  <div className="aspect-[1/1.414] bg-gradient-to-br rounded-lg mb-4 overflow-hidden relative"
                    style={{
                      backgroundImage: `linear-gradient(135deg, ${variant.colors.primary} 0%, ${variant.colors.secondary} 100%)`
                    }}
                  >
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-white/20 font-bold text-4xl">
                        {index + 1}
                      </div>
                    </div>
                    {/* Mini preview elements */}
                    <div className="absolute top-4 left-4 right-4">
                      <div className="h-2 bg-white/30 rounded mb-2"></div>
                      <div className="h-1 bg-white/20 rounded w-2/3"></div>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4 space-y-1">
                      <div className="h-1 bg-white/20 rounded"></div>
                      <div className="h-1 bg-white/20 rounded w-3/4"></div>
                    </div>
                  </div>

                  {/* Info */}
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-400 transition-colors">
                    {variant.name}
                  </h3>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-400 capitalize">
                      {variant.emphasis} Focus
                    </span>
                    <span className="text-blue-400 group-hover:translate-x-1 transition-transform">
                      View →
                    </span>
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Footer */}
        <motion.footer
          className="text-center mt-16 text-slate-400 text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <p>Team: Mathew Meleth • Rahil Harihar • Siddarth Bhave • Shreyas Subramanya</p>
          <p className="mt-2">University of Washington | Masters in Information Management</p>
        </motion.footer>
      </motion.div>
    </div>
  );
};

export default LandingPage;
