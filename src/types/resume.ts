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

export const createEmptyResume = (): ResumeData => ({
  personal: {
    fullName: '',
    headline: '',
    location: '',
    email: '',
    website: '',
    linkedin: '',
    summary: '',
  },
  experience: [
    {
      id: createId(),
      company: '',
      role: '',
      location: '',
      startDate: '',
      endDate: '',
      highlights: [''],
    },
  ],
  projects: [],
  education: [],
  skills: [
    {
      id: createId(),
      name: '',
      items: '',
    },
  ],
})
