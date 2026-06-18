'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Mail, Menu, Phone, Search, UserRound, X } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/site-config'
import { globalContent } from '@/editable/content/global.content'
import { useEditableLocalAuthSession } from '@/editable/components/EditableLocalAuthForms'

export function EditableNavbar() {
  const [open, setOpen] = useState(false)
  const { session, logout } = useEditableLocalAuthSession()

  return (
    <header className="sticky top-0 z-50 bg-[var(--slot4-surface-bg)] text-[var(--slot4-page-text)] shadow-[0_1px_0_rgba(0,0,0,.08)]">
      <div className="bg-[var(--slot4-accent-fill)] text-white">
        <div className="mx-auto flex min-h-11 max-w-[1260px] flex-wrap items-center justify-between gap-3 px-4 text-xs font-bold sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-5">
            
          </div>
          <div className="hidden items-center gap-3 md:flex">
            <span className="h-6 w-6 rounded-full bg-white text-center text-[11px] font-black leading-6 text-[var(--slot4-accent)]"></span>
            <span className="h-6 w-6 rounded-full bg-white text-center text-[11px] font-black leading-6 text-[var(--slot4-accent)]"></span>
            <span className="h-6 w-6 rounded-full bg-white text-center text-[11px] font-black leading-6 text-[var(--slot4-accent)]"></span>
          </div>
        </div>
      </div>

      <div className="mx-auto grid min-h-[80px] max-w-[1260px] grid-cols-[auto_1fr_auto] items-center gap-4 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <button type="button" onClick={() => setOpen((value) => !value)} className="inline-flex h-10 w-10 items-center justify-center border border-black/25 lg:hidden" aria-label="Toggle navigation">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
          <Link href="/" className="flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center border-4 border-[var(--slot4-accent)] text-[var(--slot4-accent)]">
              <img src="/favicon.ico" alt="Logo" className="h-9 w-9" />
            </span>
            <span className="max-w-[32vw] truncate text-2xl font-black tracking-[-0.03em] sm:text-3xl">{SITE_CONFIG.name}</span>
          </Link>
        </div>

        <nav className="hidden items-center justify-center gap-7 lg:flex">
          {globalContent.nav.primaryLinks.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm font-black hover:text-[var(--slot4-accent)]">{item.label}</Link>
          ))}
        </nav>

        <div className="flex items-center justify-end gap-3">
          {session ? (
            <>
              <span className="hidden max-w-32 items-center gap-2 truncate text-xs font-black uppercase tracking-[.08em] sm:inline-flex"><UserRound className="h-4 w-4" /> {session.name}</span>
              <button type="button" onClick={logout} className="hidden text-xs font-black uppercase tracking-[.12em] sm:block">Logout</button>
            </>
          ) : (
            <>
              <Link href="/login" className="hidden text-xs font-black uppercase tracking-[.12em] sm:block">Login</Link>
              <Link href="/signup" className="hidden text-xs font-black uppercase tracking-[.12em] sm:block">Sign up</Link>
            </>
          )}
          <Link href={session ? '/create' : globalContent.nav.actions.primary.href} className="bg-[var(--slot4-dark-bg)] px-4 py-3 text-[10px] font-black uppercase tracking-[.14em] text-white sm:px-6">
            {session ? 'Create' : globalContent.nav.actions.primary.label}
          </Link>
        </div>
      </div>

      <div className="border-t border-black/10 bg-white">
        <div className="mx-auto flex min-h-[50px] max-w-[1260px] items-center px-4 sm:px-6 lg:px-8">
          <p className="hidden text-xs font-black uppercase tracking-[.18em] text-[var(--slot4-accent)] md:block">{globalContent.nav.tagline}</p>
          <form action="/search" className="ml-auto flex min-w-0 flex-1 items-center border-l border-black/10 md:max-w-[310px] md:flex-none">
            <Search className="ml-4 h-4 w-4 text-black/45" />
            <input name="q" type="search" placeholder="Search media archive" className="min-w-0 flex-1 bg-transparent px-3 py-4 text-xs font-bold outline-none placeholder:text-black/35" />
          </form>
        </div>
      </div>

      {open ? (
        <div className="border-t border-black/15 bg-[var(--slot4-surface-bg)] px-4 py-4 lg:hidden">
          <div className="grid gap-px bg-black/15">
            {[...globalContent.nav.primaryLinks, ...(session ? [{ label: `Account: ${session.name}`, href: '/create' }] : [{ label: 'Login', href: '/login' }, { label: 'Sign up', href: '/signup' }])].map((item) => (
              <Link key={`${item.label}-${item.href}`} href={item.href} onClick={() => setOpen(false)} className="bg-white px-4 py-3 text-sm font-black uppercase tracking-[.1em]">{item.label}</Link>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  )
}
