import { DarkModeToggle } from './dark-mode-toggle'
import { RouterLink } from './router-link'

export function Header() {
  return (
    <header className="border-b">
      <section className="c flex items-center justify-between px-5 py-6">
        <a href="/" className="font-serif text-xl font-semibold">
          tmpl
        </a>
        <ul className="flex items-center gap-4">
          <li>
            <RouterLink title="Home" className="text-foreground" />
          </li>
          <li>
            <RouterLink title="Blog" />
          </li>
          <li>
            <RouterLink title="About" />
          </li>
          <li>
            <DarkModeToggle />
          </li>
        </ul>
      </section>
    </header>
  )
}
