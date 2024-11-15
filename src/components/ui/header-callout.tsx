import { PropsWithChildren } from 'react'

export function HeaderCallout({ children }: PropsWithChildren) {
  return (
    <div className="absolute -right-2.5 bottom-1.5 hidden md:block md:translate-x-full">
      <code className="font-mono text-[12px] text-muted-foreground">{children}</code>
    </div>
  )
}
