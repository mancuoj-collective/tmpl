import { Header } from '@/components/header'
import { Layout } from './layout'
import { Hero } from '@/components/hero'
import { Projects } from '@/components/projects'

export function App() {
  return (
    <Layout>
      <Header />
      <Hero />
      <Projects />
    </Layout>
  )
}
