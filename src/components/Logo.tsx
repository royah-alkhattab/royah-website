// The real Royah wordmark (white-on-transparent PNG). On dark backgrounds it shows
// as-is; on light backgrounds we flip it to black via a brightness(0) filter so it
// stays visible (the source art is pure white).
export function Logo({ className = 'h-8', onDark = true }: { className?: string; onDark?: boolean }) {
  return (
    <img
      src="/royah-logo-real.png"
      alt="Royah"
      className={`w-auto object-contain select-none ${onDark ? '' : '[filter:brightness(0)]'} ${className}`}
      draggable={false}
    />
  )
}
