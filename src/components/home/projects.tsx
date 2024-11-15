import { SectionNumber } from '../ui/section-number'

export function Projects() {
  return (
    <section className="border-b">
      <div className="c flex h-[800px] flex-col pt-16 xl:pt-8">
        <SectionNumber num="01" />
        <h2 className="mb-5 px-10 font-serif text-2xl font-semibold md:text-3xl">Projects</h2>
        <p className="mb-12 w-[600px] max-w-[calc(100%_-_80px)] text-pretty px-10 text-[15px] text-muted-foreground">
          Simple, scalable and powerful templates for building production ready React applications.
        </p>
        <div className="dotted-separator" />
      </div>
    </section>
  )
}
