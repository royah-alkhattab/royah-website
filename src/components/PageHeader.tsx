import { motion } from 'framer-motion'

// Compact hero for inner pages, sitting under the fixed navbar.
// Default: dark with a red glow. Pass `image` to switch to the bright
// photographic variant (light background, dark text) — used on Work.
export function PageHeader({ eyebrow, title, subtitle, image }: { eyebrow: string; title: string; subtitle: string; image?: string }) {
  if (image) {
    return (
      <section className="relative bg-[#f7f4ef] text-[#16161a] overflow-hidden pt-32 pb-24 lg:pt-40 lg:pb-32">
        <div className="pointer-events-none absolute inset-0">
          <img src={image} alt="" className="h-full w-full object-cover" />
          {/* soft cream veil, lighter toward the bottom so the artwork shows through */}
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(252,250,247,0.94)_0%,rgba(252,250,247,0.70)_42%,rgba(252,250,247,0.22)_100%)]" />
        </div>
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 backdrop-blur-sm px-4 py-1.5 text-sm font-semibold text-[#16161a]/75 mb-5">
              <span className="h-2 w-2 rounded-full bg-[#DB4B4B]" />
              {eyebrow}
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.05] tracking-tight">
              {title}
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 text-lg sm:text-xl text-[#43464d] leading-relaxed">
              {subtitle}
            </motion.p>
          </div>
        </div>
      </section>
    )
  }

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
