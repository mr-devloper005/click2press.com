import Link from 'next/link'
import { ArrowRight, BarChart3, CheckCircle2, FileText, Globe2, LifeBuoy, Megaphone, PackageCheck, Search, Send, ShieldCheck, Truck } from 'lucide-react'
import type { SitePost } from '@/lib/site-connector'
import type { HomeTimeSection } from '@/lib/task-data'
import type { TaskKey } from '@/lib/site-config'
import { SITE_CONFIG } from '@/lib/site-config'
import { pagesContent } from '@/editable/content/pages.content'
import { editableDesignContract as dc } from '@/editable/layouts/design-contract'
import { getEditableExcerpt, getEditablePostImage, postHref, RailPostCard } from '@/editable/cards/PostCards'

type HomeSectionProps = {
  primaryTask: TaskKey
  primaryRoute: string
  posts: SitePost[]
  timeSections: HomeTimeSection[]
}

const fallbackHero = '/placeholder.svg?height=900&width=1600'

function brandHeroImage() {
  const brand = SITE_CONFIG.name.replace(/[<>&"]/g, '')
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900">
      <defs>
        <linearGradient id="bg" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0" stop-color="#052f3a"/>
          <stop offset="0.55" stop-color="#064653"/>
          <stop offset="1" stop-color="#08b3a5"/>
        </linearGradient>
        <linearGradient id="panel" x1="0" x2="1">
          <stop offset="0" stop-color="#ffffff" stop-opacity="0.96"/>
          <stop offset="1" stop-color="#d9f5f2" stop-opacity="0.88"/>
        </linearGradient>
        <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="24" stdDeviation="28" flood-color="#02161c" flood-opacity="0.25"/>
        </filter>
      </defs>
      <rect width="1600" height="900" fill="url(#bg)"/>
      <path d="M0 650 C260 560 430 690 690 600 C930 516 1070 330 1600 390 L1600 900 L0 900 Z" fill="#ffffff" opacity="0.08"/>
      <path d="M0 170 C260 260 460 90 710 170 C940 244 1120 270 1600 110 L1600 0 L0 0 Z" fill="#ffffff" opacity="0.06"/>
      <g filter="url(#shadow)">
        <rect x="855" y="170" width="520" height="360" rx="0" fill="url(#panel)"/>
        <rect x="905" y="230" width="190" height="26" fill="#08b3a5"/>
        <rect x="905" y="286" width="375" height="18" fill="#183035" opacity="0.25"/>
        <rect x="905" y="326" width="320" height="18" fill="#183035" opacity="0.18"/>
        <rect x="905" y="390" width="145" height="92" fill="#064653"/>
        <rect x="1080" y="390" width="245" height="92" fill="#08b3a5"/>
      </g>
      <g filter="url(#shadow)">
        <rect x="980" y="500" width="380" height="190" fill="#ffffff" opacity="0.94"/>
        <circle cx="1035" cy="555" r="26" fill="#08b3a5"/>
        <rect x="1085" y="535" width="190" height="18" fill="#183035" opacity="0.7"/>
        <rect x="1085" y="570" width="230" height="14" fill="#183035" opacity="0.22"/>
        <rect x="1020" y="620" width="290" height="16" fill="#08b3a5" opacity="0.42"/>
      </g>
      <g transform="translate(250 230)">
        <rect x="0" y="0" width="300" height="240" fill="#ffffff" opacity="0.12"/>
        <rect x="38" y="58" width="224" height="126" fill="none" stroke="#d9f5f2" stroke-width="10"/>
        <path d="M38 58 L150 0 L262 58" fill="none" stroke="#08b3a5" stroke-width="12" stroke-linejoin="round"/>
        <path d="M78 95 H222 M78 132 H222 M78 169 H222" stroke="#d9f5f2" stroke-width="10"/>
      </g>
      <text x="250" y="585" fill="#ffffff" font-family="Arial, Helvetica, sans-serif" font-size="86" font-weight="800">${brand}</text>
      <text x="254" y="640" fill="#d9f5f2" font-family="Arial, Helvetica, sans-serif" font-size="30" font-weight="700" letter-spacing="5">MEDIA DISTRIBUTION DESK</text>
      <g stroke="#ffffff" stroke-opacity="0.2" stroke-width="2">
        <path d="M690 250 H790 V610 H930"/>
        <path d="M690 320 H760 V700 H960"/>
        <path d="M690 390 H820 V520 H905"/>
      </g>
      <circle cx="690" cy="250" r="9" fill="#08b3a5"/>
      <circle cx="690" cy="320" r="9" fill="#08b3a5"/>
      <circle cx="690" cy="390" r="9" fill="#08b3a5"/>
    </svg>
  `
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`
}

const features = [
  { icon: Globe2, title: 'Wide media reach', body: 'Distribute announcements across searchable categories and public-facing newsroom sections.' },
  { icon: ShieldCheck, title: 'Trusted release flow', body: 'Structure updates with clear titles, summaries, images, and supporting source links.' },
  { icon: Send, title: 'Professional publishing', body: 'Prepare release-ready posts for campaigns, company news, and brand communications.' },
  { icon: LifeBuoy, title: 'Help any time', body: 'Give teams a simple path to request distribution support and publishing assistance.' },
]

const serviceCards = [
  { icon: FileText, title: 'Press Release Distribution', body: 'Publish official announcements with media-ready summaries, links, and coverage context.' },
  { icon: Megaphone, title: 'Campaign Announcements', body: 'Give product launches, events, partnerships, and milestones a focused discovery path.' },
  { icon: PackageCheck, title: 'Media Asset Coordination', body: 'Keep articles, visuals, documents, and related resources connected around each update.' },
  { icon: Truck, title: 'Newswire Routing', body: 'Organize releases by category, audience, and topic so visitors can scan them quickly.' },
  { icon: BarChart3, title: 'Visibility Planning', body: 'Shape distribution pages around trust cues, search, and strong calls to action.' },
  { icon: ShieldCheck, title: 'Brand Control', body: 'Keep content consistent while the backend, routes, and submission logic stay intact.' },
]

function leadImage(posts: SitePost[]) {
  const image = getEditablePostImage(posts[0])
  return !image || image.includes('/placeholder.svg') ? brandHeroImage() : image
}

function taskLabel(task: TaskKey) {
  return SITE_CONFIG.tasks.find((item) => item.key === task)?.label || 'Media Distribution'
}

export function EditableHomeHero({ primaryRoute, posts }: HomeSectionProps) {
  const lead = posts[0]
  return (
    <section className="bg-white">
      <div className="relative min-h-[560px] overflow-hidden">
        <img src={leadImage(posts)} alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(4,18,27,.9),rgba(6,70,83,.72),rgba(4,18,27,.28))]" />
        <div className={`${dc.shell.section} relative flex min-h-[560px] items-center`}>
          <div className="max-w-3xl py-20 text-white">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-[var(--slot4-accent)]">{pagesContent.home.hero.badge}</p>
            <h1 className="mt-5 text-5xl font-black leading-[1.02] sm:text-6xl lg:text-7xl">{pagesContent.home.hero.title.join(' ')}</h1>
            <p className="mt-6 max-w-2xl text-base font-semibold leading-8 text-white/82">{lead ? getEditableExcerpt(lead, 150) || pagesContent.home.hero.description : pagesContent.home.hero.description}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href={primaryRoute} className={dc.button.primary}>{pagesContent.home.hero.primaryCta.label} <ArrowRight className="h-4 w-4" /></Link>
              <Link href={pagesContent.home.hero.secondaryCta.href} className="bg-white px-7 py-3.5 text-xs font-black uppercase tracking-[0.12em] text-[var(--slot4-dark-bg)] transition hover:bg-[var(--slot4-accent)] hover:text-white">{pagesContent.home.hero.secondaryCta.label}</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="border-b border-black/10 bg-white">
        <div className={`${dc.shell.section} grid gap-6 py-7 sm:grid-cols-2 lg:grid-cols-4`}>
          {features.map((item) => (
            <div key={item.title} className="flex items-center gap-4">
              <item.icon className="h-9 w-9 shrink-0 text-[var(--slot4-accent)]" />
              <div>
                <h2 className="text-lg font-black">{item.title}</h2>
                <p className="mt-1 text-sm leading-6 text-[var(--slot4-muted-text)]">{item.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function EditableStoryRail({ primaryTask, primaryRoute, posts }: HomeSectionProps) {
  const railPosts = posts.slice(0, 8)
  return (
    <section className="bg-white">
      <div className={`${dc.shell.section} ${dc.shell.sectionY}`}>
        <div className="grid gap-10 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
          <div>
            <p className={dc.type.eyebrow + ' text-[var(--slot4-accent)]'}>{pagesContent.home.intro.badge}</p>
            <h2 className="mt-4 max-w-xl text-4xl font-black leading-tight sm:text-5xl">{pagesContent.home.intro.title}</h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-[var(--slot4-muted-text)]">{pagesContent.home.intro.paragraphs[0]}</p>
            <div className="mt-7 flex items-start gap-4">
              <CheckCircle2 className="mt-1 h-8 w-8 shrink-0 text-[var(--slot4-accent)]" />
              <div>
                <h3 className="text-xl font-black">Quality distribution services for media teams.</h3>
                <p className="mt-2 text-sm leading-7 text-[var(--slot4-muted-text)]">{pagesContent.home.intro.paragraphs[1]}</p>
              </div>
            </div>
            <Link href="/about" className={`${dc.button.primary} mt-8`}>Discover more <ArrowRight className="h-4 w-4" /></Link>
          </div>
          <div className="relative">
            <div className="relative aspect-[4/3] overflow-hidden bg-[var(--slot4-media-bg)] shadow-[0_28px_80px_rgba(6,70,83,.16)]">
              <img src={leadImage(posts)} alt="" className="h-full w-full object-cover" />
            </div>
            <Link href={primaryRoute} className="absolute left-1/2 top-1/2 grid h-24 w-24 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white text-[var(--slot4-dark-bg)] shadow-xl">
              <ArrowRight className="h-8 w-8" />
            </Link>
          </div>
        </div>

        <div className="relative z-10 mx-auto mt-16 grid max-w-5xl gap-8 bg-white p-8 shadow-[0_24px_70px_rgba(15,23,42,.12)] md:grid-cols-[1.4fr_1fr_1fr_1fr] md:items-center">
          <div className="flex items-center gap-8 border-[var(--slot4-accent)] md:border-r">
            <span className="text-6xl font-black text-[var(--slot4-page-text)]">25+</span>
            <p className="text-xl font-semibold leading-8">Years of media coordination experience.</p>
          </div>
          {[
            ['87K+', 'Distributed Updates'],
            ['24+', 'Media Categories'],
            ['4.7', 'Client Reviews'],
          ].map(([value, label]) => (
            <div key={label} className="text-center">
              <p className="text-4xl font-black">{value}</p>
              <p className="mt-2 text-sm font-bold text-[var(--slot4-muted-text)]">{label}</p>
            </div>
          ))}
        </div>

        {railPosts.length ? (
          <div className="mt-14">
            <div className="mb-5 flex items-end justify-between gap-5">
              <div>
                <p className={dc.type.eyebrow + ' text-[var(--slot4-accent)]'}>Latest {taskLabel(primaryTask)}</p>
                <h2 className="mt-2 text-4xl font-black">Recent distribution updates</h2>
              </div>
              <Link href={primaryRoute} className="hidden text-xs font-black uppercase tracking-[.14em] hover:text-[var(--slot4-accent)] sm:inline-flex">View all <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </div>
            <div className={dc.layout.rail}>
              {railPosts.map((post, index) => <RailPostCard key={post.id || post.slug} post={post} href={postHref(primaryTask, post, primaryRoute)} index={index} />)}
            </div>
          </div>
        ) : null}
      </div>
    </section>
  )
}

export function EditableMagazineSplit({ primaryRoute, posts }: HomeSectionProps) {
  return (
    <section className="bg-[var(--slot4-panel-bg)]">
      <div className={`${dc.shell.section} ${dc.shell.sectionY}`}>
        <div className="text-center">
          <p className={dc.type.eyebrow + ' text-[var(--slot4-accent)]'}>What we do</p>
          <h2 className="mx-auto mt-4 max-w-3xl text-4xl font-black leading-tight sm:text-5xl">Your announcement is safer with a structured media distribution company</h2>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {serviceCards.map((item, index) => (
            <Link key={item.title} href={index === 0 ? primaryRoute : '/contact'} className="group relative bg-white p-8 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(6,70,83,.12)]">
              {index === 0 ? <span className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--slot4-accent)] px-5 py-1 text-xs font-bold text-white">Most Popular</span> : null}
              <div className="mx-auto grid h-16 w-16 place-items-center bg-[var(--slot4-accent)] text-white"><item.icon className="h-8 w-8" /></div>
              <h3 className="mt-5 text-2xl font-semibold">{item.title}</h3>
              <p className="mt-4 text-sm leading-7 text-[var(--slot4-muted-text)]">{item.body}</p>
              <span className="mt-7 inline-flex items-center gap-2 border-b border-[var(--slot4-dark-bg)] pb-2 text-xs font-black uppercase tracking-[.18em] text-[var(--slot4-dark-bg)]">Learn more <ArrowRight className="h-4 w-4" /></span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export function EditableTimeCollections({ posts }: HomeSectionProps) {
  return (
    <section className="bg-white">
      <div className={`${dc.shell.section} ${dc.shell.sectionY}`}>
        <div className="grid gap-10 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
          <div>
            <p className={dc.type.eyebrow + ' text-[var(--slot4-accent)]'}>Why choose us</p>
            <h2 className="mt-4 max-w-xl text-4xl font-black leading-tight sm:text-5xl">We offer distribution that meets your expectations</h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-[var(--slot4-muted-text)]">{pagesContent.home.intro.paragraphs[2]}</p>
            <div className="mt-9 grid gap-6 sm:grid-cols-2">
              {[
                ['60%', 'Faster Release Setup', 'Reusable content structure for launch teams.'],
                ['71%', 'Better Discovery', 'Clear categories and search paths for audiences.'],
              ].map(([value, title, body]) => (
                <div key={title}>
                  <p className="text-6xl font-black text-[var(--slot4-accent)]">{value}</p>
                  <h3 className="mt-4 text-xl font-black">{title}</h3>
                  <p className="mt-2 text-sm leading-7 text-[var(--slot4-muted-text)]">{body}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="aspect-[4/3] overflow-hidden bg-[var(--slot4-media-bg)]">
            <img src={getEditablePostImage(posts[1] || posts[0]) || fallbackHero} alt="" className="h-full w-full object-cover" />
          </div>
        </div>

        <form action="/search" className="mt-14 grid gap-4 bg-[var(--slot4-panel-bg)] p-6 sm:grid-cols-[1fr_auto] sm:items-center sm:p-8">
          <div>
            <h3 className="text-3xl font-black">Search the media archive</h3>
            <p className="mt-2 text-sm text-[var(--slot4-muted-text)]">Find press releases, announcements, categories, and distribution resources.</p>
          </div>
          <label className="flex bg-white sm:min-w-[420px]">
            <Search className="ml-4 mt-4 h-4 w-4 text-black/45" />
            <input name="q" placeholder={pagesContent.home.hero.searchPlaceholder} className="min-w-0 flex-1 bg-transparent px-3 py-3 text-sm outline-none" />
            <button className="bg-[var(--slot4-dark-bg)] px-5 text-xs font-black uppercase tracking-[.14em] text-white">Search</button>
          </label>
        </form>
      </div>
    </section>
  )
}

export function EditableHomeCta() {
  return (
    <section className="relative overflow-hidden bg-[var(--slot4-dark-bg)] text-white">
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(4,18,27,.92),rgba(6,70,83,.72))]" />
      <div className={`${dc.shell.section} relative py-20 lg:py-28`}>
        <p className={dc.type.eyebrow + ' text-[var(--slot4-accent)]'}>{pagesContent.home.cta.badge}</p>
        <h2 className="mt-4 max-w-3xl text-4xl font-black leading-tight sm:text-5xl">{pagesContent.home.cta.title}</h2>
        <p className="mt-5 max-w-2xl text-base leading-8 text-white/72">{pagesContent.home.cta.description}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href={pagesContent.home.cta.primaryCta.href} className="bg-white px-7 py-3.5 text-xs font-black uppercase tracking-[.12em] text-[var(--slot4-dark-bg)]">{pagesContent.home.cta.primaryCta.label}</Link>
          <Link href={pagesContent.home.cta.secondaryCta.href} className={dc.button.accent}>{pagesContent.home.cta.secondaryCta.label}</Link>
        </div>
      </div>
    </section>
  )
}
