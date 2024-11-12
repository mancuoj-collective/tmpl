import { useDark } from '@/hooks/use-dark'
import { Button } from './ui/button'
import { LucideMoon, LucideSun } from 'lucide-react'

export function DarkModeToggle() {
  const { toggleDark } = useDark()

  return (
    <Button aria-label="toggle dark mode" size="icon" variant="ghost" onClick={toggleDark}>
      <LucideSun className="sun rotate-0 scale-100 transition-transform duration-500 dark:-rotate-90 dark:scale-0" />
      <LucideMoon className="moon absolute rotate-90 scale-0 transition-transform duration-500 dark:rotate-0 dark:scale-100" />
    </Button>
  )
}
