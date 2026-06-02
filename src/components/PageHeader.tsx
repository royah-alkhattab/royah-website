import { motion } from 'framer-motion'

// Compact dark hero for inner pages (Product, About). Sits under the fixed navbar.
export function PageHeader({ eyebrow, title, subtitle }: { eyebrow: string; title: string; subtitle: string }) {
  return (
    <section className="relative bg-[#0a0a0a] text-white overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-28">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-1/3 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#DB4B4B]/20 blur-[140px]" />
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)',
          backgroundSize: '32px 32px'
        }} />
      </div>
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-sm font-semibold text-white/80 mb-5">
            <span className="h-2 w-2 rounded-full bg-[#DB4B4B]" />
            {eyebrow}
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.05] tracking-tight">
            {title}
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-lg sm:text-xl text-white/70 leading-relaxed">
            {subtitle}
          </motion.p>
        </div>
      </div>
    </section>
  )
}
