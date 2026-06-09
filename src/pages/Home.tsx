import { Hero } from '../components/Hero'
import { WhatWeDo } from '../components/WhatWeDo'
import { Vision2040 } from '../components/Vision2040'
import { FinalCTA } from '../components/FinalCTA'

// ProductTeaser ("Meet Royah Property") is intentionally not on the homepage
// while the product is pre-launch. The component is kept in
// src/components/ProductTeaser.tsx so it can be re-added when it ships.

export function Home() {
  return (
    <>
      <Hero />
      <WhatWeDo />
      <Vision2040 />
      <FinalCTA />
    </>
  )
}
