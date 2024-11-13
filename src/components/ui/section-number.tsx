import { cn } from '@/lib/utils'

export function SectionNumber({ num }: { num: string }) {
  return (
    <span
      className={cn(
        'absolute top-0 left-0',
        'font-mono text-lg font-semibold',
        'size-[50px] flex justify-center items-center',
        'border-b border-r',
        'sm:translate-x-[-100%] xl:border-l xl:border-r-0',
      )}
    >
      {num}
    </span>
  )
}
