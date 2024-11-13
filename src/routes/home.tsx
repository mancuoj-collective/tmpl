import { Hero, Packages, Projects } from '@/components/home'
import { Spacer } from '@/components/ui/spacer'

export function Home() {
  return (
    <>
      <Hero />
      <Projects />
      <Spacer />
      <Packages />
    </>
  )
}
