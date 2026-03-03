export interface PersonalInfo {
  fullName: string
  headline: string
  location: string
  email: string
  website: string
  linkedin: string
  summary: string
}

export interface ExperienceItem {
  id: string
  company: string
  role: string
  location: string
  startDate: string
  endDate: string
  highlights: string[]
}

export interface ProjectItem {
  id: string
  name: string
  subtitle: string
  link: string
  startDate: string
  endDate: string
  highlights: string[]
}

export interface EducationItem {
  id: string
  school: string
  degree: string
  location: string
  startDate: string
  endDate: string
  highlights: string[]
}

export interface SkillCategory {
  id: string
  name: string
  items: string
}

export interface ResumeData {
  personal: PersonalInfo
  experience: ExperienceItem[]
  projects: ProjectItem[]
  education: EducationItem[]
  skills: SkillCategory[]
}

export const createId = (): string => {
  if (typeof crypto !== 'undefined' && 'randomUUID' in crypto) {
    return crypto.randomUUID()
  }

  return `id-${Math.random().toString(36).slice(2, 11)}`
}

export const createDefaultResume = (): ResumeData => ({
  personal: {
    fullName: 'Amina Rahman',
    headline:
      'Detail-oriented hospitality professional with a passion for guest experience and team leadership.',
    location: 'Wellington, New Zealand',
    email: 'amina.rahman@example.com',
    website: 'www.aminarahman.co.nz',
    linkedin: 'amina-rahman',
    summary:
      'Experienced in operations, event coordination, and service quality improvement across busy venues. Recognized for creating welcoming customer experiences, improving workflows, and mentoring high-performing teams.',
  },
  experience: [
    {
      id: createId(),
      company: 'Harbourview Hotel',
      role: 'Front Office Manager',
      location: 'Wellington, NZ',
      startDate: 'Jan 2022',
      endDate: 'Present',
      highlights: [
        'Led a team of 14 front-desk staff, improving guest satisfaction scores from 4.2 to 4.8/5.',
        'Redesigned check-in workflows, reducing average wait time by 35% during peak periods.',
        'Partnered with housekeeping and concierge teams to improve same-day request fulfillment.',
      ],
    },
    {
      id: createId(),
      company: 'Cityline Conference Centre',
      role: 'Events Coordinator',
      location: 'Wellington, NZ',
      startDate: 'Mar 2019',
      endDate: 'Dec 2021',
      highlights: [
        'Coordinated 120+ corporate and private events annually with budgets up to NZD 80,000.',
        'Implemented standardized run sheets that reduced last-minute event issues by 40%.',
        'Built vendor partnerships that lowered catering and logistics costs by 12%.',
      ],
    },
  ],
  projects: [
    {
      id: createId(),
      name: 'Community Food Drive Program',
      subtitle: 'Volunteer initiative',
      link: '',
      startDate: 'Apr 2023',
      endDate: 'Present',
      highlights: [
        'Organized monthly food collection drives with local businesses and neighborhood groups.',
        'Helped distribute over 2,500 meal packs to families across three Wellington suburbs.',
      ],
    },
    {
      id: createId(),
      name: 'Guest Welcome Playbook',
      subtitle: 'Internal operations program',
      link: '',
      startDate: 'Sep 2022',
      endDate: 'Jan 2023',
      highlights: [
        'Created a practical onboarding guide for new front-office hires and seasonal staff.',
        'Improved new-hire readiness and reduced training ramp-up time from 4 weeks to 2.5 weeks.',
      ],
    },
  ],
  education: [
    {
      id: createId(),
      school: 'Victoria University of Wellington',
      degree: 'Bachelor of Tourism Management',
      location: 'Wellington, NZ',
      startDate: 'Feb 2015',
      endDate: 'Nov 2018',
      highlights: [
        'Coursework focus on hospitality operations, customer psychology, and event planning.',
      ],
    },
  ],
  skills: [
    {
      id: createId(),
      name: 'Operations',
      items: 'Front office management, rostering, SOP design, service recovery',
    },
    {
      id: createId(),
      name: 'Events',
      items: 'Run sheets, vendor coordination, budgeting, client communication',
    },
    {
      id: createId(),
      name: 'Tools',
      items: 'Microsoft Excel, Google Workspace, Canva, POS systems, CRM software',
    },
  ],
})
