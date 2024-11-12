import { cn } from '@/lib/utils'

export function Hero() {
  return (
    <section className="border-b">
      <section className="c grid-bg flex flex-col items-center justify-center px-5 py-24">
        <h1
          className={cn(
            'text-center text-balance font-semibold font-serif',
            'w-[960px] max-w-full',
            'text-4xl md:text-5xl xl:text-6xl',
            'leading-[48px] md:leading-[60px] xl:leading-[72px]',
            'mb-6 md:mb-8',
          )}
        >
          Next Generation React Starter Template
        </h1>
        <p className="text-muted-foreground w-[400px] max-w-full text-center text-sm leading-5 md:text-base md:leading-6 text-balance">
          Our mission is to make web developers more productive than ever before.
        </p>
      </section>
    </section>
  )
}
