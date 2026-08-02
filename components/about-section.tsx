import { story, timeline } from '@/lib/site-data'

export function AboutSection() {
  return (
    <section id="about" className="border-b border-border bg-background">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-navy-soft">
              {story.eyebrow}
            </span>
            <h1 className="mt-3 font-serif text-3xl font-bold leading-tight tracking-tight text-navy text-balance sm:text-4xl">
              {story.heading}
            </h1>
          </div>
          <div className="space-y-5">
            {story.paragraphs.map((paragraph, i) => (
              <p key={i} className="text-base leading-relaxed text-muted-foreground text-pretty">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        <div className="mt-16 lg:mt-20">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-navy-soft">
            2016 → Present
          </h2>

          <ol className="mt-8 grid gap-8 md:grid-cols-5 md:gap-4">
            {timeline.map((item, i) => (
              <li key={item.id} className="relative pl-8 md:pl-0 md:pt-8">
                <span
                  aria-hidden="true"
                  className="absolute left-[5px] top-3 h-full w-px bg-border md:left-0 md:top-[5px] md:h-px md:w-full"
                />
                {i === timeline.length - 1 && (
                  <span
                    aria-hidden="true"
                    className="absolute bottom-0 left-[5px] top-3 w-px bg-background md:hidden"
                  />
                )}
                <span
                  aria-hidden="true"
                  className="absolute left-0 top-2 size-[11px] rounded-full border-2 border-gold bg-background md:top-0 md:-translate-y-[5px]"
                />
                <p className="font-serif text-lg font-bold text-navy">{item.year}</p>
                <p className="mt-1 text-sm font-semibold text-foreground">{item.title}</p>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
