import { Hero } from '../components/Hero'
import { WhatWeDo } from '../components/WhatWeDo'
import { ProductTeaser } from '../components/ProductTeaser'
import { Vision2040 } from '../components/Vision2040'
import { FinalCTA } from '../components/FinalCTA'

export function Home() {
  return (
    <>
      <Hero />
      <WhatWeDo />
      <ProductTeaser />
      <Vision2040 />
      <FinalCTA />
    </>
  )
}
