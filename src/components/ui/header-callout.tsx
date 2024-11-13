import { PropsWithChildren } from 'react'

export function HeaderCallout({ children }: PropsWithChildren) {
  return (
    <div className="absolute -right-4 bottom-2.5 hidden translate-x-full md:block">
      <code className="font-mono text-[12px] text-muted-foreground">{children}</code>
    </div>
  )
}
