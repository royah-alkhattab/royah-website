# Royah — Phone (Vertical 9:16) Hero Clips

Goal: native **portrait** versions of the 5 hero clips so the phone hero fills the
screen with nothing cropped (the man & woman are framed for vertical, not cut off).
Desktop keeps the existing 16:9 montage; phone gets these 9:16 ones.

## How (same pipeline you already used)
1. **Midjourney** → make the still at **`--ar 9:16`** (vertical). For the man & woman,
   add your **Omni Reference** (their photo) so the likeness matches.
2. **Runway Gen-4.5** → image-to-video on that vertical still, set **Aspect Ratio = 9:16**,
   paste the motion prompt below.
3. Download all 5 into a folder named **`phone`** inside `~/Downloads/video/`
   (so: `~/Downloads/video/phone/`). Keep them roughly in this order; the names don't matter.
4. Tell Claude "the phone clips are in Downloads/video/phone" → Claude stitches them into
   `hero-mobile.mp4` and wires it to show only on phones.

Keep the same calm, slow look. Muted. ~5s each is perfect.

---

## CLIP 1 — Omani mountain village  (vertical)
**Midjourney still:**
```
aerial view of a traditional Omani mountain village, stone houses and terraced farms on steep slopes, warm golden light, glowing blue holographic data lines connecting the buildings, cinematic, photoreal, tall vertical composition --ar 9:16 --style raw
```
**Runway motion (9:16):**
```
Slow aerial push forward over the Omani mountain village and terraced farms. Glowing blue data lines pulse softly and connect the buildings. Gentle, natural motion.
```

## CLIP 2 — Muscat harbour  (vertical)
**Midjourney still:**
```
aerial view of Muscat harbour, traditional white Omani buildings and dhow boats on calm water, mountains behind, warm daylight, glowing blue holographic data streams rising from the boats and buildings, cinematic, photoreal, tall vertical composition --ar 9:16 --style raw
```
**Runway motion (9:16):**
```
Slow cinematic aerial drift over Muscat harbour. Glowing blue data streams rise gently from the boats and buildings. Calm water, soft camera motion.
```

## CLIP 3 — Muscat corniche at night  (vertical)
**Midjourney still:**
```
aerial night view of the Muscat corniche, illuminated white buildings along the waterfront, orange car light-trails on the road, deep blue night sky, subtle glowing blue holographic data, cinematic, photoreal, tall vertical composition --ar 9:16 --style raw
```
**Runway motion (9:16):**
```
Slow cinematic aerial drift over the Muscat corniche at night. Orange car light-trails move along the road. Gentle, smooth camera motion.
```

## CLIP 4 — The man + holographic data  (vertical) — use Omni Reference (his photo)
**Midjourney still:**
```
young Omani man in a clean white dishdasha and massar, standing calm and confident in a softly lit modern space, a glowing blue holographic city model and data floating beside him, futuristic ambient technology, cinematic, photoreal, full-body tall vertical framing --ar 9:16 --style raw --s 70
```
**Runway motion (9:16):**
```
Slow gentle camera push-in. The man stays completely still and calm; only the holographic blue data and city model move and glow around him.
```

## CLIP 5 — The woman + holographic data wall  (vertical) — use Omni Reference (her photo)
**Midjourney still:**
```
young Omani woman in elegant modest attire, standing calm and confident, one hand near a glowing blue holographic data wall, soft modern lighting, futuristic ambient technology, cinematic, photoreal, tall vertical framing --ar 9:16 --style raw --s 70
```
**Runway motion (9:16):**
```
Slow gentle camera push-in. The woman stays still; the blue holographic data on the wall shifts and flows gently.
```

---

### Notes
- If you only want to redo the **two people shots** (they're the ones that crop badly),
  that's fine — Claude can build a phone montage from just those, or mix. But all 5 vertical
  = the most polished, consistent result.
- Same order as desktop: harbour → mountain → woman → man → corniche.
- Once delivered, Claude builds `hero-mobile.mp4` (720×1280), regenerates the phone poster,
  serves it only below the `md` breakpoint, and deploys. Desktop is untouched.
