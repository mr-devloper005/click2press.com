import { slot4BrandConfig } from '@/editable/theme/brand.config'

export const globalContent = {
  site: {
    name: slot4BrandConfig.siteName,
    tagline: slot4BrandConfig.tagline || 'Independent reading platform',
    domain: slot4BrandConfig.domain,
    baseUrl: slot4BrandConfig.baseUrl,
  },
  nav: {
    tagline: 'Media distribution and newsroom visibility',
    primaryLinks: [
      { label: 'Home', href: '/' },
      { label: 'Media Distribution', href: '/updates' },
      { label: 'Search', href: '/search' },
      { label: 'About', href: '/about' },
      { label: 'Contact', href: '/contact' },
    ],
    actions: {
      primary: { label: 'Free Consultation', href: '/contact' },
      secondary: { label: 'Create Release', href: '/create' },
    },
  },
  footer: {
    tagline: 'Media distribution built for credible public discovery',
    description: 'A focused distribution surface for press releases, company announcements, campaign news, media coverage, and public updates.',
    columns: [
      {
        title: 'Explore',
        links: [
          { label: 'Media Distribution', href: '/updates' },
          { label: 'Press Releases', href: '/updates?category=press-release' },
          { label: 'Campaign News', href: '/updates?category=campaign' },
          { label: 'Brand Updates', href: '/updates?category=brand' },
        ],
      },
      {
        title: 'Site',
        links: [
          { label: 'About', href: '/about' },
          { label: 'Contact', href: '/contact' },
        ],
      },
    ],
    bottomNote: 'Built for fast, flexible, and category-led media distribution.',
  },
  commonLabels: {
    readMore: 'Read more',
    viewAll: 'View all',
    explore: 'Explore',
    latest: 'Latest',
    related: 'Related',
    published: 'Published',
  },
} as const
