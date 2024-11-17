import { cn } from '@/lib/utils'
import { SectionNumber } from '../ui/section-number'
import { PropsWithChildren } from 'react'

export function Packages() {
  return (
    <section className="border-b">
      <div className="c flex flex-col pt-16 xl:pt-8">
        <SectionNumber num="02" />
        <span className="absolute right-4 top-4 font-mono text-[12px] text-muted-foreground">
          package.json
        </span>
        <h2 className="mb-4 px-10 font-serif text-2xl font-semibold md:text-3xl">Our Packages</h2>
        <div className="mb-10 flex items-center px-10 text-[12px]">
          <span className="rounded-s bg-foreground/10 py-1 pl-2 pr-1.5">npm</span>
          <span className="rounded-e bg-foreground/20 py-1 pl-1.5 pr-2">@latest</span>
        </div>
        <div className="dotted-separator" />
        <ul className="grid grid-cols-1 md:grid-cols-2">
          <GridItem href="https://react.dev" className="border-r-0 py-10 md:border-r">
            <span className="i-simple-icons-react size-9 hover:bg-[#61DAFB]" />
          </GridItem>
          <GridItem href="https://nextjs.org" className="py-10">
            <span className="i-simple-icons-nextdotjs size-9" />
          </GridItem>
        </ul>
        <ul className="grid grid-cols-2 md:grid-cols-4">
          <GridItem href="https://vite.dev" className="py-8">
            <span className="i-simple-icons-vite size-7 hover:bg-[#646CFF]" />
          </GridItem>
          <GridItem href="https://reactrouter.com" className="border-r-0 py-8 md:border-r">
            <span className="i-simple-icons-reactrouter size-8 hover:bg-[#CA4245]" />
          </GridItem>
          <GridItem href="https://tanstack.com/query" className="py-8">
            <span className="i-simple-icons-reactquery size-7 hover:bg-[#FF4154]" />
          </GridItem>
          <GridItem href="https://tailwindcss.com" className="border-r-0 py-8">
            <span className="i-simple-icons-tailwindcss size-8 hover:bg-[#06B6D4]" />
          </GridItem>
        </ul>
        <ul className="grid grid-cols-2 md:grid-cols-4">
          <GridItem href="https://ui.shadcn.com" className="py-8">
            <span className="i-simple-icons-shadcnui size-6" />
          </GridItem>
          <GridItem href="https://framer.com" className="border-r-0 py-8 md:border-r">
            <span className="i-simple-icons-framer size-7 hover:bg-[#0055FF]" />
          </GridItem>
          <GridItem href="https://eslint.org" className="py-8">
            <span className="i-simple-icons-eslint size-7 hover:bg-[#4B32C3]" />
          </GridItem>
          <GridItem href="https://prettier.io" className="border-r-0 py-8">
            <span className="i-simple-icons-prettier size-6 hover:bg-[#F7B93E]" />
          </GridItem>
        </ul>
        <ul className="grid grid-cols-2 md:grid-cols-4">
          <GridItem href="https://react-hook-form.com" className="border-b-0 py-8">
            <span className="i-simple-icons-reacthookform size-6 hover:bg-[#EC5990]" />
          </GridItem>
          <GridItem href="https://zod.dev" className="border-b-0 border-r-0 py-8 md:border-r">
            <span className="i-simple-icons-zod size-7 hover:bg-[#3E67B1]" />
          </GridItem>
        </ul>
      </div>
    </section>
  )
}

function GridItem({
  children,
  href,
  className,
}: PropsWithChildren<{ href: string; className?: string }>) {
  return (
    <div className={cn('flex flex-col items-center justify-center border-b border-r', className)}>
      <a href={href} target="_blank" rel="noreferrer">
        {children}
      </a>
    </div>
  )
}
