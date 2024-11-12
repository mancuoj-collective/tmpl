import { cn } from '@/lib/utils'

export function Projects() {
  return (
    <section className="border-b">
      <div className="c flex h-[800px] flex-col pt-20 xl:pt-8">
        <span
          className={cn(
            'font-mono text-lg font-semibold',
            'size-[50px] flex justify-center items-center',
            'absolute top-0 left-0',
            'border-b border-r',
            'sm:translate-x-[-100%] xl:border-l xl:border-r-0',
          )}
        >
          01
        </span>
        <span className="absolute right-4 top-4 font-mono text-[12px] text-muted-foreground">package.json</span>
        <h2 className="mb-3 px-10 font-serif text-2xl font-semibold sm:text-[28px]">Projects</h2>
      </div>
    </section>
  )
}
