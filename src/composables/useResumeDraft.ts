import { watch, type Ref } from 'vue'
import type { ResumeData } from '../types/resume'

const STORAGE_KEY = 'resume-builder-draft'

export const loadResumeDraft = (): ResumeData | null => {
  const rawValue = localStorage.getItem(STORAGE_KEY)
  if (!rawValue) {
    return null
  }

  try {
    return JSON.parse(rawValue) as ResumeData
  } catch (error) {
    console.warn('Failed to parse saved draft. Clearing invalid data.', error)
    localStorage.removeItem(STORAGE_KEY)
    return null
  }
}

export const useResumeDraft = (resumeRef: Ref<ResumeData>) => {
  watch(
    resumeRef,
    (value) => {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(value))
    },
    { deep: true },
  )
}

export const clearResumeDraft = () => {
  localStorage.removeItem(STORAGE_KEY)
}
