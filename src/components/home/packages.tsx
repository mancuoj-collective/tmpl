import { RiNextjsLine, RiReactjsLine } from '@remixicon/react'
import { SectionNumber } from '../ui/section-number'

export function Packages() {
  return (
    <section className="border-b">
      <div className="c flex h-[800px] flex-col pt-20 xl:pt-8">
        <SectionNumber num="02" />
        <span className="absolute right-4 top-4 font-mono text-[12px] text-muted-foreground">package.json</span>
        <h2 className="mb-8 px-10 font-serif text-2xl font-semibold md:text-3xl">Our Packages</h2>
        <div className="dotted-separator" />
        <ul className="flex flex-col border-b md:flex-row">
          <li className="flex items-center justify-center border-b py-10 md:w-1/2 md:border-b-0 md:border-r">
            <a href="https://react.dev">
              <RiReactjsLine className="size-10" />
            </a>
          </li>
          <li className="flex items-center justify-center py-10 md:w-1/2">
            <a href="https://nextjs.org">
              <RiNextjsLine className="size-10" />
            </a>
          </li>
        </ul>
      </div>
    </section>
  )
}
