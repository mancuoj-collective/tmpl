import { Link } from 'react-router-dom'
import { RiGithubLine, RiMoonLine, RiSunLine } from '@remixicon/react'
import { useDark } from '@/hooks/use-dark'

export function Footer() {
  const { toggleDark } = useDark()

  return (
    <footer className="border-b">
      <div className="c flex items-center justify-between p-5">
        <Link to="/" className="font-serif text-lg font-semibold text-muted-foreground">
          tmpl
        </Link>
        <p className="font-mono text-[13px] text-muted-foreground">Copyright © 2024 mancuoj-collective</p>
        <div className="flex items-center gap-2">
          <button className="relative flex text-muted-foreground hover:text-foreground" onClick={toggleDark}>
            <RiSunLine className="sun size-[18px] rotate-0 scale-100 transition-transform duration-500 dark:-rotate-90 dark:scale-0" />
            <RiMoonLine className="moon absolute size-[18px] rotate-90 scale-0 transition-transform duration-500 dark:rotate-0 dark:scale-100" />
          </button>
          <a href="https://github.com/mancuoj-collective/tmpl" target="_blank" rel="noreferrer">
            <RiGithubLine className="size-[18px] text-muted-foreground hover:text-foreground" />
          </a>
        </div>
      </div>
    </footer>
  )
}
