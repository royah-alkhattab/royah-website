HERO VIDEO — DROP-IN INSTRUCTIONS
=================================

To put your cinematic video in the homepage hero, drop TWO files into this
/public folder (exact names, lowercase):

  1. hero.mp4         <- the video
  2. hero-poster.jpg  <- a single still frame (shows instantly while the video loads)

That's it. No code changes needed — the hero detects hero.mp4 automatically and
switches from the gradient to your video on the next page load.

VIDEO SPECS
-----------
  - Format:   MP4 (H.264)
  - Size:     1920x1080 (16:9)
  - Length:   10-20 seconds, seamless loop (ends where it begins)
  - Audio:    none / muted (browsers require muted autoplay)
  - Weight:   3-8 MB compressed (use Handbrake or ffmpeg). Keep it light for fast load.
  - Framing:  keep important detail out of the dead-center — the headline sits there.
              A dark overlay is applied automatically so white text stays readable.

POSTER
------
  - hero-poster.jpg, 1920x1080, exported from the first frame of the video.

To go back to the gradient, just remove hero.mp4 from this folder.

Full creative brief (story, shot list, prompts, music): /docs/hero-video-brief.md
