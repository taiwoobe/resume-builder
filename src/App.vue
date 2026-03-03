<script setup lang="ts">
import { computed, ref } from 'vue'
import BuilderInfoPanel from './components/layout/BuilderInfoPanel.vue'
import SplitScreenLayout from './components/layout/SplitScreenLayout.vue'
import EducationForm from './components/form/EducationForm.vue'
import ExperienceForm from './components/form/ExperienceForm.vue'
import PersonalInfoForm from './components/form/PersonalInfoForm.vue'
import ProjectsForm from './components/form/ProjectsForm.vue'
import SkillsForm from './components/form/SkillsForm.vue'
import ResumeTemplateClassic from './components/resume/ResumeTemplateClassic.vue'
import { clearResumeDraft, loadResumeDraft, useResumeDraft } from './composables/useResumeDraft'
import { exportElementToPdf } from './services/pdfExport'
import { createDefaultResume, type ResumeData } from './types/resume'

const createFreshResume = () => createDefaultResume()

const resume = ref<ResumeData>(loadResumeDraft() ?? createFreshResume())
const previewRef = ref<HTMLElement | null>(null)
const isExporting = ref(false)

useResumeDraft(resume)

const validationErrors = computed(() => {
  const errors: string[] = []
  if (!resume.value.personal.fullName.trim()) errors.push('Full name is required.')
  if (!resume.value.personal.email.trim()) errors.push('Email is required.')
  if (!resume.value.personal.summary.trim()) errors.push('Professional summary is required.')
  return errors
})

const hasValidationErrors = computed(() => validationErrors.value.length > 0)

const sanitizeFileName = (name: string) =>
  (name || 'resume')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')

const generatePdf = async () => {
  if (!previewRef.value || hasValidationErrors.value || isExporting.value) {
    return
  }

  try {
    isExporting.value = true
    const fileName = `${sanitizeFileName(resume.value.personal.fullName)}-resume.pdf`
    await exportElementToPdf(previewRef.value, fileName)
  } catch (error) {
    console.error('Failed to export PDF', error)
    alert('Could not generate PDF. Please try again.')
  } finally {
    isExporting.value = false
  }
}

const resetResume = () => {
  resume.value = createFreshResume()
  clearResumeDraft()
}
</script>

<template>
  <SplitScreenLayout>
    <template #info>
      <BuilderInfoPanel />
    </template>

    <div class="card-surface builder-card">
      <header class="builder-header">
        <div>
          <h2>Resume Builder</h2>
          <p class="inline-note" style="margin: 4px 0 0">
            Fill the form and generate a professional PDF instantly.
          </p>
        </div>
        <div class="action-row">
          <button class="btn btn-muted" type="button" @click="resetResume">Reset</button>
          <button
            class="btn btn-primary"
            type="button"
            :disabled="hasValidationErrors || isExporting"
            @click="generatePdf"
          >
            {{ isExporting ? 'Generating...' : 'Generate PDF' }}
          </button>
        </div>
      </header>

      <div v-if="hasValidationErrors" class="error-banner">
        {{ validationErrors[0] }}
      </div>

      <section>
        <PersonalInfoForm :personal="resume.personal" />
        <ExperienceForm :experience="resume.experience" />
        <ProjectsForm :projects="resume.projects" />
        <EducationForm :education="resume.education" />
        <SkillsForm :skills="resume.skills" />
      </section>
    </div>

    <div class="pdf-staging" aria-hidden="true">
      <div ref="previewRef">
        <ResumeTemplateClassic :resume="resume" />
      </div>
    </div>
  </SplitScreenLayout>
</template>
