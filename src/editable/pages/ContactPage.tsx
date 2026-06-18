'use client'

import { FileText, LifeBuoy, Mail, Megaphone, Phone } from 'lucide-react'
import { pagesContent } from '@/editable/content/pages.content'
import { EditableContactLeadForm } from '@/editable/components/EditableContactLeadForm'
import { EditableSiteShell } from '@/editable/shell/EditableSiteShell'

const desks = [
  { icon: FileText, title: 'Release planning', body: 'Send press release drafts, announcement goals, category requests, and publication timing.' },
  { icon: Megaphone, title: 'Distribution support', body: 'Discuss brand campaigns, media coverage, syndication, and public visibility needs.' },
  { icon: LifeBuoy, title: 'Account help', body: 'Get help with login, submission flow, published content, or general site questions.' },
]

export default function ContactPage() {
  return (
    <EditableSiteShell>
      <main className="bg-white text-[var(--slot4-page-text)]">
        <section className="relative overflow-hidden bg-[var(--slot4-dark-bg)] text-white">
          
          <div className="mx-auto grid max-w-[1260px] gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[.9fr_1.1fr] lg:px-8 lg:py-24">
            <div>
              
              <p className="text-xs font-black uppercase tracking-[0.24em] text-[var(--slot4-accent)]">{pagesContent.contact.eyebrow}</p>
              <img src="/favicon.png?height=700&width=1600" alt="" className="absolute inset-30 opacity-20" />
              <h1 className="mt-5 text-5xl font-black leading-tight sm:text-6xl">{pagesContent.contact.title}</h1>
              <p className="mt-6 max-w-2xl text-base font-semibold leading-8 text-white/75">{pagesContent.contact.description}</p>
              
            </div>
            
          </div>
        </section>

        <section className="mx-auto grid max-w-[1260px] gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[.75fr_1.25fr] lg:px-8 lg:py-20">
          <aside className="grid gap-5">
            {desks.map((desk, index) => (
              <div key={desk.title} className="bg-[var(--slot4-panel-bg)] p-7">
                <div className="flex items-center justify-between"><desk.icon className="h-7 w-7 text-[var(--slot4-accent)]" /><span className="text-xs font-black text-black/35">0{index + 1}</span></div>
                <h2 className="mt-6 text-2xl font-black">{desk.title}</h2>
                <p className="mt-3 text-sm leading-7 text-[var(--slot4-muted-text)]">{desk.body}</p>
              </div>
            ))}
          </aside>
          <div className="bg-white p-0 lg:p-6">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-[var(--slot4-accent)]">Send a message</p>
            <h2 className="mt-3 text-4xl font-black">{pagesContent.contact.formTitle}</h2>
            <EditableContactLeadForm />
          </div>
        </section>
      </main>
    </EditableSiteShell>
  )
}
