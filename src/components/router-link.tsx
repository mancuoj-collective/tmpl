import { cn } from '@/lib/utils'

interface RouterLinkProps extends React.ComponentProps<'a'> {
  title: string
}

export function RouterLink({ title, className, ...props }: RouterLinkProps) {
  return (
    <a
      href="/"
      className={cn(
        'text-sm font-medium',
        'text-muted-foreground hover:text-foreground',
        'transition-colors duration-200 ease-in-out',
        className,
      )}
      {...props}
    >
      {title}
    </a>
  )
}
