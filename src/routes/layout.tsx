import { PropsWithChildren } from 'react'

export function Layout({ children }: PropsWithChildren) {
  return <div className="font-sans antialiased">{children}</div>
}
