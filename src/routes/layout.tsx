import { Footer } from '@/components/ui/footer'
import { Header } from '@/components/ui/header'
import { Spacer } from '@/components/ui/spacer'
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
