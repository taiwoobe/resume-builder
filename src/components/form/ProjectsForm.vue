<script setup lang="ts">
import { createId, type ProjectItem } from '../../types/resume'

const props = defineProps<{
  projects: ProjectItem[]
}>()

const addProject = () => {
  props.projects.push({
    id: createId(),
    name: '',
    subtitle: '',
    link: '',
    startDate: '',
    endDate: '',
    highlights: [''],
  })
}

const removeProject = (id: string) => {
  if (props.projects.length === 1) return
  const index = props.projects.findIndex((item) => item.id === id)
  if (index >= 0) props.projects.splice(index, 1)
}

const addHighlight = (item: ProjectItem) => item.highlights.push('')
const removeHighlight = (item: ProjectItem, index: number) => {
  if (item.highlights.length === 1) return
  item.highlights.splice(index, 1)
}
</script>

<template>
  <section class="section-panel">
    <div class="item-card-header">
      <h3>Projects</h3>
      <button class="btn btn-muted" type="button" @click="addProject">+ Add project</button>
    </div>

    <div v-for="(item, index) in projects" :key="item.id" class="item-card">
      <div class="item-card-header">
        <span class="item-card-title">Project {{ index + 1 }}</span>
        <button class="btn btn-muted" type="button" @click="removeProject(item.id)">Remove</button>
      </div>

      <div class="field-grid">
        <div class="field">
          <label>Name</label>
          <input v-model="item.name" placeholder="Project name" />
        </div>
        <div class="field">
          <label>Subtitle</label>
          <input v-model="item.subtitle" placeholder="www.project.com or short context" />
        </div>
        <div class="field">
          <label>Link</label>
          <input v-model="item.link" placeholder="https://project.com" />
        </div>
        <div class="field">
          <label>Start date</label>
          <input v-model="item.startDate" placeholder="Jan 2021" />
        </div>
        <div class="field">
          <label>End date</label>
          <input v-model="item.endDate" placeholder="Present" />
        </div>
      </div>

      <p class="inline-note" style="margin: 10px 0">Project bullets</p>
      <div v-for="(_, bulletIndex) in item.highlights" :key="`${item.id}-${bulletIndex}`" class="bullet-row">
        <input
          v-model="item.highlights[bulletIndex]"
          placeholder="Created/optimized feature with measurable outcome."
        />
        <button class="btn btn-muted" type="button" @click="removeHighlight(item, bulletIndex)">-</button>
      </div>

      <button class="btn btn-muted" type="button" @click="addHighlight(item)">+ Add bullet</button>
    </div>
  </section>
</template>
