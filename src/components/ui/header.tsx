import { Link, useLocation } from 'react-router-dom'
import { RouterNavLink } from './router-nav-link'
import { HeaderCallout } from './header-callout'

export function Header() {
  const location = useLocation()

  return (
    <header className="border-b">
      <section className="c flex items-center justify-between px-5 py-6">
        <HeaderCallout>{location.pathname}</HeaderCallout>
        <Link to="/" className="font-serif text-xl font-semibold">
          tmpl
        </Link>
        <ul className="flex items-center gap-4">
          <li>
            <RouterNavLink to="/">Home</RouterNavLink>
          </li>
          <li>
            <RouterNavLink to="/blog">Blog</RouterNavLink>
          </li>
          <li>
            <RouterNavLink to="/about">About</RouterNavLink>
          </li>
        </ul>
      </section>
    </header>
  )
}
