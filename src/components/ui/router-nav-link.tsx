import { cn } from '@/lib/utils'
import { NavLink, NavLinkProps } from 'react-router-dom'

export function RouterNavLink({ to, children, className, ...props }: NavLinkProps) {
  return (
    <NavLink
      viewTransition
      to={to}
      className={({ isActive }) => {
        return cn(
          isActive ? 'text-foreground' : 'text-muted-foreground',
          'text-sm font-medium',
          'hover:text-foreground',
          'transition-colors duration-200 ease-in-out',
          className,
        )
      }}
      {...props}
    >
      {children}
    </NavLink>
  )
}
