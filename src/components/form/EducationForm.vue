<script setup lang="ts">
import { createId, type EducationItem } from '../../types/resume'

const props = defineProps<{
  education: EducationItem[]
}>()

const addEducation = () => {
  props.education.push({
    id: createId(),
    school: '',
    degree: '',
    location: '',
    startDate: '',
    endDate: '',
    highlights: [''],
  })
}

const removeEducation = (id: string) => {
  if (props.education.length === 1) return
  const index = props.education.findIndex((item) => item.id === id)
  if (index >= 0) props.education.splice(index, 1)
}

const addHighlight = (item: EducationItem) => item.highlights.push('')
const removeHighlight = (item: EducationItem, index: number) => {
  if (item.highlights.length === 1) return
  item.highlights.splice(index, 1)
}
</script>

<template>
  <section class="section-panel">
    <div class="item-card-header">
      <h3>Education</h3>
      <button class="btn btn-muted" type="button" @click="addEducation">+ Add education</button>
    </div>

    <div v-for="(item, index) in education" :key="item.id" class="item-card">
      <div class="item-card-header">
        <span class="item-card-title">Education {{ index + 1 }}</span>
        <button class="btn btn-muted" type="button" @click="removeEducation(item.id)">Remove</button>
      </div>

      <div class="field-grid">
        <div class="field">
          <label>School</label>
          <input v-model="item.school" placeholder="University name" />
        </div>
        <div class="field">
          <label>Degree</label>
          <input v-model="item.degree" placeholder="BSc Computer Science" />
        </div>
        <div class="field">
          <label>Location</label>
          <input v-model="item.location" placeholder="City, Country" />
        </div>
        <div class="field">
          <label>Start date</label>
          <input v-model="item.startDate" placeholder="Mar 2018" />
        </div>
        <div class="field">
          <label>End date</label>
          <input v-model="item.endDate" placeholder="Nov 2021" />
        </div>
      </div>

      <p class="inline-note" style="margin: 10px 0">Highlights</p>
      <div v-for="(_, bulletIndex) in item.highlights" :key="`${item.id}-${bulletIndex}`" class="bullet-row">
        <input v-model="item.highlights[bulletIndex]" placeholder="Scholarship, award, coursework, etc." />
        <button class="btn btn-muted" type="button" @click="removeHighlight(item, bulletIndex)">-</button>
      </div>

      <button class="btn btn-muted" type="button" @click="addHighlight(item)">+ Add bullet</button>
    </div>
  </section>
</template>
