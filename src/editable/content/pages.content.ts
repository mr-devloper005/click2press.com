import { slot4BrandConfig } from '@/editable/theme/brand.config'

export const pagesContent = {
  home: {
    metadata: {
      title: 'Media distribution, press release delivery, and newsroom visibility',
      description: 'Coordinate announcements, press releases, brand stories, and public updates through a professional media distribution experience.',
      openGraphTitle: 'Media distribution and newsroom visibility',
      openGraphDescription: 'Distribute announcements, publish updates, and help audiences discover verified media stories.',
      keywords: ['media distribution', 'press release distribution', 'newsroom visibility', 'brand announcements'],
    },
    hero: {
      badge: 'Media distribution for growing brands',
      title: ['Where announcements move', 'from draft to public discovery.'],
      description: 'Plan, publish, and distribute press releases, company updates, campaign news, and media-ready stories through one focused distribution hub.',
      primaryCta: { label: 'Browse distributions', href: '/updates' },
      secondaryCta: { label: 'Start a release', href: '/create' },
      searchPlaceholder: 'Search releases, companies, beats, and topics',
      focusLabel: 'Focus',
      featureCardBadge: 'latest cover rotation',
      featureCardTitle: 'Latest releases shape the public newsroom.',
      featureCardDescription: 'Recent announcements, media updates, and distribution-ready stories stay visible without changing platform logic.',
    },
    intro: {
      badge: 'Who we are',
      title: 'Distribution workflows built for visibility, credibility, and speed.',
      paragraphs: [
        'This site brings together press release publishing, media updates, campaign announcements, and structured discovery so audiences can move naturally through public information.',
        'Instead of scattering brand news across disconnected surfaces, the platform keeps every update connected with clear categories, strong visuals, and practical search.',
        'Whether a visitor starts with a release, a company announcement, or a media resource, they can keep discovering related distribution content without friction.',
      ],
      sideBadge: 'At a glance',
      sidePoints: [
        'Media-first homepage with strong announcement and campaign visibility.',
        'Connected sections for releases, articles, resources, listings, and visuals.',
        'Tighter browsing rhythm designed for scanning and discovery.',
        'Fast, readable surfaces for public updates and newsroom audiences.',
      ],
      primaryLink: { label: 'Browse releases', href: '/updates' },
      secondaryLink: { label: 'Contact distribution team', href: '/contact' },
    },
    cta: {
      badge: 'Ready to distribute',
      title: 'Move your next announcement into the channels where it can be found.',
      description: 'Share press releases, company news, campaign updates, and media resources through one professional distribution surface.',
      primaryCta: { label: 'Browse Media', href: '/updates' },
      secondaryCta: { label: 'Contact Team', href: '/contact' },
    },
    taskSection: {
      heading: 'Latest {label}',
      descriptionSuffix: 'Browse the newest posts in this section.',
    },
  },
  about: {
    badge: 'Our Story',
    title: 'A clearer way to distribute media updates.',
    description: `${slot4BrandConfig.siteName} helps teams publish announcements, package media stories, and make public updates easier to discover.`,
    paragraphs: [
      'Instead of splitting every release, article, and supporting resource into disconnected pages, the platform keeps distribution content easy to move through and easy to understand.',
      'Whether someone starts with a press release, media article, image-led update, or resource page, they can continue exploring without losing context.',
    ],
    values: [
      {
        title: 'Distribution-first experience',
        description: 'We prioritize visibility, structure, and fast scanning so announcements can be read, shared, and discovered without noise.',
      },
      {
        title: 'Connected media surfaces',
        description: 'Press releases, articles, visual posts, listings, resources, and profiles stay connected so discovery feels natural across the site.',
      },
      {
        title: 'Simple and trustworthy',
        description: 'We focus on clean navigation, precise content blocks, and credible page structure to help visitors find useful updates faster.',
      },
    ],
  },
  contact: {
    eyebrow: `Contact ${slot4BrandConfig.siteName}`,
    title: 'Talk to the team behind your next media release.',
    description: 'Tell us what you need to publish, distribute, correct, or promote. We will route the request toward the right media distribution workflow.',
    formTitle: 'Request distribution support',
  },

  search: {
    metadata: {
      title: 'Search',
      description: 'Search releases, media updates, topics, categories, and distribution content across the site.',
    },
    hero: {
      badge: 'Search media archive',
      title: 'Find releases, coverage, and distribution resources faster.',
      description: 'Use keywords, categories, and content types to discover media distribution posts from every active section of the site.',
      placeholder: 'Search by keyword, company, beat, category, or title',
    },
    resultsTitle: 'Latest searchable media',
  },
  create: {
    metadata: {
      title: 'Create',
      description: 'Create and submit media distribution content for the site.',
    },
    locked: {
      badge: 'Creator access',
      title: 'Login to create a media release.',
      description: 'Use your account to open the publishing workspace and prepare press releases, media updates, and public announcements.',
    },
    hero: {
      badge: 'Publishing workspace',
      title: 'Create media-ready content for every active section.',
      description: 'Choose the distribution type, add details, and prepare a clean post with images, links, summary, and release body content.',
    },
    formTitle: 'Content details',
    submitLabel: 'Submit content',
    successTitle: 'Content submitted successfully.',
  },
  auth: {
    login: {
      metadataDescription: 'Login page for this site.',
      badge: 'Member access',
      title: 'Welcome back to your distribution desk.',
      description: 'Login to continue managing submissions, drafting media updates, and preparing new announcements from your account.',
      formTitle: 'Login',
      submitLabel: 'Continue',
      noAccount: 'No account matched these details. Create an account first, then login.',
      success: 'Login successful. Redirecting...',
      createCta: 'Create an account',
    },
    signup: {
      metadataDescription: 'Signup page for this site.',
      badge: 'Site access',
      title: 'Create your account and start distributing media.',
      description: 'Create an account to access the publishing workspace, save details, and submit media distribution content through the site.',
      formTitle: 'Create account',
      submitLabel: 'Create account',
      passwordShort: 'Use at least 4 characters for the password.',
      success: 'Account created successfully. Redirecting...',
      loginCta: 'Login',
    },
  },
  detailPages: {
    article: {
      relatedTitle: 'Related articles',
      fallbackTitle: 'Article details',
    },
    listing: {
      relatedTitle: 'Related listings',
      fallbackTitle: 'Listing details',
    },
    image: {
      relatedTitle: 'Related visuals',
      fallbackTitle: 'Image details',
    },
    profile: {
      relatedTitle: 'Suggested articles',
      fallbackDescription: 'Profile details will appear here once available.',
      visitButton: 'Visit Official Site',
    },
  },
} as const
