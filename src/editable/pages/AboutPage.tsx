import Link from 'next/link'
import { BarChart3, Layers, ShieldCheck, Target } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/site-config'
import { pagesContent } from '@/editable/content/pages.content'
import { EditableSiteShell } from '@/editable/shell/EditableSiteShell'

const values = [
  { icon: Layers, title: 'Our Vision', body: 'Make every credible media update easier to package, publish, search, and share.' },
  { icon: Target, title: 'Our Mission', body: 'Give teams a clean distribution surface for releases, campaigns, and public announcements.' },
  { icon: ShieldCheck, title: 'Our Motto', body: 'Clear content, reliable structure, and distribution paths that audiences can trust.' },
]

export default function AboutPage() {
  return (
    <EditableSiteShell>
      <main className="bg-white text-[var(--slot4-page-text)]">
        <section className="relative min-h-[420px] overflow-hidden">
          <img src="/favicon.png?height=700&width=1600" alt="" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(4,18,27,.88),rgba(6,70,83,.58))]" />
          <div className="relative mx-auto flex min-h-[420px] max-w-[1260px] items-center px-4 py-16 text-white sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-xs font-black uppercase tracking-[.24em] text-[var(--slot4-accent)]">{pagesContent.about.badge}</p>
              <h1 className="mt-5 text-5xl font-black leading-tight sm:text-6xl">{pagesContent.about.title}</h1>
              <p className="mt-5 max-w-2xl text-base font-semibold leading-8 text-white/78">{pagesContent.about.description}</p>
            </div>
          </div>
        </section>

        <section className="bg-[var(--slot4-panel-bg)]">
          <div className="mx-auto max-w-[1260px] px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
            <div className="-mt-28 grid gap-8 bg-white p-8 shadow-[0_24px_70px_rgba(6,70,83,.12)] md:grid-cols-[1.2fr_1fr_1fr_1fr] md:items-center">
              <div className="flex items-center gap-8 border-[var(--slot4-accent)] md:border-r">
                <span className="text-6xl font-black">25+</span>
                <p className="text-xl font-semibold leading-8">Years experience supporting media distribution.</p>
              </div>
              {[
                ['87K+', 'Happy Clients'],
                ['24+', 'Content Lanes'],
                ['4.7', 'Client Reviews'],
              ].map(([value, label]) => (
                <div key={label} className="text-center">
                  <p className="text-4xl font-black">{value}</p>
                  <p className="mt-2 font-bold text-[var(--slot4-muted-text)]">{label}</p>
                </div>
              ))}
            </div>

            <div className="mt-16 grid gap-8 lg:grid-cols-[.9fr_1.1fr]">
              <div>
                <p className="text-xs font-black uppercase tracking-[.22em] text-[var(--slot4-accent)]">About {SITE_CONFIG.name}</p>
                <h2 className="mt-4 text-4xl font-black leading-tight">Built for teams that need announcements to travel clearly.</h2>
              </div>
              <div className="space-y-5 text-base leading-8 text-[var(--slot4-muted-text)]">
                {pagesContent.about.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </div>
            </div>

            <div className="mt-16 grid gap-8 md:grid-cols-3">
              {values.map((item) => (
                <div key={item.title} className="bg-[var(--slot4-panel-bg)] p-8 text-center">
                  <item.icon className="mx-auto h-11 w-11 text-[var(--slot4-accent)]" />
                  <h3 className="mt-5 text-2xl font-semibold">{item.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-[var(--slot4-muted-text)]">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[var(--slot4-dark-bg)] text-white">
          <div className="mx-auto flex max-w-[1260px] flex-col gap-6 px-4 py-16 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
            <div>
              <p className="text-xs font-black uppercase tracking-[.22em] text-[var(--slot4-accent)]"><BarChart3 className="mr-2 inline h-4 w-4" /> Distribution ready</p>
              <h2 className="mt-3 max-w-3xl text-4xl font-black leading-tight">Safe, structured, and complete media visibility.</h2>
            </div>
            <Link href="/contact" className="inline-flex w-fit bg-white px-7 py-3.5 text-xs font-black uppercase tracking-[.14em] text-[var(--slot4-dark-bg)]">Get started</Link>
          </div>
        </section>
      </main>
    </EditableSiteShell>
  )
}
