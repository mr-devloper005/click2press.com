'use client'

import Link from 'next/link'
import { Mail } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/site-config'
import { globalContent } from '@/editable/content/global.content'
import { useEditableLocalAuthSession } from '@/editable/components/EditableLocalAuthForms'

export function EditableFooter() {
  const year = new Date().getFullYear()
  const { session, logout } = useEditableLocalAuthSession()

  return (
    <footer className="bg-[#064653] text-white">
      <div className="mx-auto max-w-[1260px] px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_.55fr_.55fr_1.1fr]">
          <div>
            <Link href="/" className="flex items-center gap-3 text-3xl font-black">
              <span className="grid h-11 w-11 place-items-center border-4 border-[var(--slot4-accent)] text-[var(--slot4-accent)]">
                <img src="/favicon.png" alt="Logo" className="h-9 w-9" />
              </span>
              {SITE_CONFIG.name}
            </Link>
            <p className="mt-6 max-w-sm text-sm leading-7 text-white/72">{globalContent.footer?.description || SITE_CONFIG.description}</p>
           
          </div>

          <div>
            <h3 className="text-xl font-black">Quick Links</h3>
            <div className="mt-4 grid gap-3">
              {globalContent.footer.columns[0].links.map((item) => <Link key={item.href} href={item.href} className="border-b border-white/15 pb-2 text-sm hover:text-[var(--slot4-accent)]">{item.label}</Link>)}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-black">Support</h3>
            <div className="mt-4 grid gap-3">
              <Link href="/contact" className="border-b border-white/15 pb-2 text-sm hover:text-[var(--slot4-accent)]">Contact Us</Link>
              <Link href="/search" className="border-b border-white/15 pb-2 text-sm hover:text-[var(--slot4-accent)]">Help Center</Link>
              <Link href="/create" className="border-b border-white/15 pb-2 text-sm hover:text-[var(--slot4-accent)]">Create Release</Link>
              {session ? <button onClick={logout} className="border-b border-white/15 pb-2 text-left text-sm hover:text-[var(--slot4-accent)]">Logout {session.name}</button> : <Link href="/login" className="border-b border-white/15 pb-2 text-sm hover:text-[var(--slot4-accent)]">Login</Link>}
            </div>
          </div>

          <div>
            <h3 className="max-w-sm text-xl font-black leading-8">Get media distribution tips and release resources in your inbox</h3>
            <form action="/signup" className="mt-5 flex max-w-md">
              <input name="email" type="email" placeholder="Email" className="min-w-0 flex-1 bg-white px-4 py-3 text-sm text-[var(--slot4-page-text)] outline-none placeholder:text-black/40" />
              <button className="inline-flex items-center gap-2 bg-[var(--slot4-accent)] px-5 text-xs font-black uppercase tracking-[.14em]"><Mail className="h-4 w-4" /> Sign up</button>
            </form>
          </div>
        </div>
      </div>
      <div className="border-t border-white/15 px-4 py-5 text-center text-[11px] font-bold text-white/65">Copyright &copy; {year} {SITE_CONFIG.name}. All rights reserved. {globalContent.footer.bottomNote}</div>
    </footer>
  )
}
