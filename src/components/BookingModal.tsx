import { useEffect } from 'react'
import { X } from 'lucide-react'
import Cal, { getCalApi } from '@calcom/embed-react'

const CAL_LINK = 'royah/free-consultation-'

export function BookingModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  useEffect(() => {
    ;(async () => {
      const cal = await getCalApi({})
      cal('ui', {
        theme: 'light',
        styles: { branding: { brandColor: '#C2410C' } },
        hideEventTypeDetails: false,
        layout: 'month_view',
      })
    })()
  }, [])

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-foreground/40 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative h-[90vh] w-[95vw] max-w-4xl overflow-hidden rounded-2xl bg-card shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-10 inline-flex h-9 w-9 items-center justify-center rounded-full bg-secondary text-muted-foreground transition-colors hover:bg-border hover:text-foreground"
          aria-label="Close booking"
        >
          <X className="h-4 w-4" />
        </button>
        <div className="h-full w-full overflow-auto">
          <Cal
            calLink={CAL_LINK}
            style={{ width: '100%', height: '100%', overflow: 'scroll' }}
            config={{ layout: 'month_view' }}
          />
        </div>
      </div>
    </div>
  )
}
