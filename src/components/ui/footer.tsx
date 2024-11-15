import { Link } from 'react-router-dom'
import { useDark } from '@/hooks/use-dark'

export function Footer() {
  const { toggleDark } = useDark()

  return (
    <footer className="border-b">
      <div className="c flex items-center justify-between p-3 sm:p-5">
        <Link to="/" className="font-serif text-lg font-semibold text-muted-foreground">
          tmpl
        </Link>
        <p className="font-mono text-[13px] text-muted-foreground">Copyright © 2024 mancuoj</p>
        <div className="flex items-center gap-2">
          <button className="relative flex text-muted-foreground hover:text-foreground" onClick={toggleDark}>
            <span className="sun i-ri-sun-line size-[18px] rotate-0 scale-100 transition-transform duration-500 dark:-rotate-90 dark:scale-0" />
            <span className="moon i-ri-moon-line absolute size-[18px] rotate-90 scale-0 transition-transform duration-500 dark:rotate-0 dark:scale-100" />
          </button>
          <a
            href="https://github.com/mancuoj-collective/tmpl"
            className="i-ri-github-line size-[18px] text-muted-foreground hover:text-foreground"
            target="_blank"
            rel="noreferrer"
          />
        </div>
      </div>
    </footer>
  )
}
