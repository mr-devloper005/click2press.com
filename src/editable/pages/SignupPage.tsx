import type { Metadata } from 'next'
import Link from 'next/link'
import { FileText, Send } from 'lucide-react'
import { buildPageMetadata } from '@/lib/seo'
import { EditableSiteShell } from '@/editable/shell/EditableSiteShell'
import { EditableLocalSignupForm } from '@/editable/components/EditableLocalAuthForms'
import { pagesContent } from '@/editable/content/pages.content'

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata({ path: '/signup', title: 'Sign up', description: pagesContent.auth.signup.metadataDescription })
}

export default function SignupPage() {
  return (
    <EditableSiteShell>
      <main className="bg-[var(--slot4-panel-bg)] text-[var(--slot4-page-text)]">
        <section className="mx-auto grid min-h-[calc(100vh-13rem)] max-w-[1120px] px-4 py-12 sm:px-6 lg:grid-cols-[.95fr_1.05fr] lg:px-8 lg:py-16">
          <div className="flex flex-col justify-center bg-white p-7 shadow-[0_24px_70px_rgba(6,70,83,.12)] sm:p-12 lg:p-16">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-[var(--slot4-accent)]">Create account</p>
            <h1 className="mt-3 text-4xl font-black">{pagesContent.auth.signup.formTitle}</h1>
            <EditableLocalSignupForm />
            <p className="mt-5 border-t border-black/10 pt-5 text-sm text-black/65">Already have an account? <Link href="/login" className="font-black text-[var(--slot4-accent)] underline-offset-4 hover:underline">{pagesContent.auth.signup.loginCta}</Link></p>
          </div>
          <div className="flex flex-col justify-center bg-[var(--slot4-dark-bg)] p-8 text-white sm:p-12 lg:p-16">
            <p className="text-xs font-black uppercase tracking-[0.24em] text-[var(--slot4-accent)]">{pagesContent.auth.signup.badge}</p>
            <h2 className="mt-5 max-w-xl text-5xl font-black leading-tight sm:text-6xl">{pagesContent.auth.signup.title}</h2>
            <p className="mt-6 max-w-lg text-sm font-semibold leading-8 text-white/68">{pagesContent.auth.signup.description}</p>
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              <div className="bg-white/10 p-5"><FileText className="h-7 w-7 text-[var(--slot4-accent)]" /><p className="mt-4 text-sm font-bold">Draft releases and media updates.</p></div>
              <div className="bg-white/10 p-5"><Send className="h-7 w-7 text-[var(--slot4-accent)]" /><p className="mt-4 text-sm font-bold">Submit distribution-ready content.</p></div>
            </div>
          </div>
        </section>
      </main>
    </EditableSiteShell>
  )
}
