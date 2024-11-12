import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import { Spacer } from '@/components/spacer'
import { Outlet } from 'react-router-dom'

export function Layout() {
  return (
    <div className="relative font-sans antialiased">
      <Header />
      <Outlet />
      <Spacer />
      <Footer />
    </div>
  )
}
