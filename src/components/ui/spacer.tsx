import { cn } from '@/lib/utils'

export function Spacer({ className }: { className?: string }) {
  return (
    <div className="border-b">
      <div className={cn('c h-16', className)} />
    </div>
  )
}
