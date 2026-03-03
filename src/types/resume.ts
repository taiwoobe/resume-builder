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
    fullName: 'James',
    headline:
      'Innovative self-taught software developer with a passion for problem solving and design.',
    location: 'Auckland, New Zealand',
    email: 'james@hyr.sh',
    website: 'www.hyr.sh',
    linkedin: 'hyr-sh',
    summary:
      'Specializes in full-stack development, solution architecture, project vision, JavaScript, Python, and other web technologies. Recognized for leadership abilities and successful project deliveries.',
  },
  experience: [
    {
      id: createId(),
      company: 'Hyr.sh',
      role: 'CEO & Founder',
      location: 'Auckland, NZ',
      startDate: 'Dec 2023',
      endDate: 'Present',
      highlights: [
        'Developed Hyr.sh, a lightweight AI resume builder trusted by over 1500+ users.',
        'Built a full-stack Next.js and TailwindCSS SaaS platform for resumes and cover letters.',
      ],
    },
  ],
  projects: [
    {
      id: createId(),
      name: 'Smoljames Education',
      subtitle: 'www.smoljames.com',
      link: 'https://www.smoljames.com',
      startDate: 'Dec 2021',
      endDate: 'Present',
      highlights: [
        'Created a roadmap in Next.js and TailwindCSS to help new programmers land software jobs.',
      ],
    },
  ],
  education: [
    {
      id: createId(),
      school: 'The University of Auckland',
      degree: 'BE(hons) in Civil and Environmental Engineering',
      location: 'Auckland, NZ',
      startDate: 'Mar 2015',
      endDate: 'May 2019',
      highlights: ['Recipient of the Concrete New Zealand - Precast Award.'],
    },
  ],
  skills: [
    {
      id: createId(),
      name: 'JavaScript',
      items: 'ReactJS, NextJS, React Native, SvelteKit, Node.js',
    },
    { id: createId(), name: 'Python', items: 'Data analysis, Django, Flask, Data visualization' },
    {
      id: createId(),
      name: 'Web',
      items: 'HTML, CSS, Sass, TailwindCSS, Firebase, PostgreSQL, Git, Docker, AWS',
    },
  ],
})
