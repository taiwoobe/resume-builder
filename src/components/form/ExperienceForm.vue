<script setup lang="ts">
import { createId, type ExperienceItem } from '../../types/resume'

const props = defineProps<{
  experience: ExperienceItem[]
}>()

const addExperience = () => {
  props.experience.push({
    id: createId(),
    company: '',
    role: '',
    location: '',
    startDate: '',
    endDate: '',
    highlights: [''],
  })
}

const removeExperience = (id: string) => {
  if (props.experience.length === 1) {
    return
  }

  const index = props.experience.findIndex((item) => item.id === id)
  if (index >= 0) props.experience.splice(index, 1)
}

const addHighlight = (item: ExperienceItem) => {
  item.highlights.push('')
}

const removeHighlight = (item: ExperienceItem, index: number) => {
  if (item.highlights.length === 1) {
    return
  }
  item.highlights.splice(index, 1)
}
</script>

<template>
  <section class="section-panel">
    <div class="item-card-header">
      <h3>Professional Experience</h3>
      <button class="btn btn-muted" type="button" @click="addExperience">+ Add role</button>
    </div>

    <div v-for="(item, index) in experience" :key="item.id" class="item-card">
      <div class="item-card-header">
        <span class="item-card-title">Role {{ index + 1 }}</span>
        <button class="btn btn-muted" type="button" @click="removeExperience(item.id)">Remove</button>
      </div>

      <div class="field-grid">
        <div class="field">
          <label>Company</label>
          <input v-model="item.company" placeholder="Company" />
        </div>
        <div class="field">
          <label>Role</label>
          <input v-model="item.role" placeholder="Software Developer" />
        </div>
        <div class="field">
          <label>Location</label>
          <input v-model="item.location" placeholder="City, Country" />
        </div>
        <div class="field">
          <label>Start date</label>
          <input v-model="item.startDate" placeholder="Jan 2022" />
        </div>
        <div class="field">
          <label>End date</label>
          <input v-model="item.endDate" placeholder="Present" />
        </div>
      </div>

      <p class="inline-note" style="margin: 10px 0">Key Achievements</p>
      <div v-for="(_, bulletIndex) in item.highlights" :key="`${item.id}-${bulletIndex}`" class="bullet-row">
        <input v-model="item.highlights[bulletIndex]" placeholder="Built feature X that improved Y by Z%" />
        <button class="btn btn-muted" type="button" @click="removeHighlight(item, bulletIndex)">-</button>
      </div>

      <button class="btn btn-muted" type="button" @click="addHighlight(item)">+ Add bullet</button>
    </div>
  </section>
</template>
