<script setup lang="ts">
import { computed } from 'vue'
import type { ResumeData } from '../../types/resume'

const props = defineProps<{
  resume: ResumeData
}>()

const contactLine = computed(() =>
  [
    props.resume.personal.location,
    props.resume.personal.email,
    props.resume.personal.website,
    props.resume.personal.linkedin,
  ].filter(Boolean),
)

const cleanBullets = (bullets: string[]) => bullets.filter((bullet) => bullet.trim().length > 0)
</script>

<template>
  <article class="resume-page">
    <header class="resume-header">
      <h1 class="resume-name">{{ resume.personal.fullName || 'Your Name' }}</h1>
      <div class="resume-contact">
        <span v-for="(item, index) in contactLine" :key="`${item}-${index}`">{{ item }}</span>
      </div>
    </header>

    <p class="resume-summary">
      {{ resume.personal.headline }}
      {{ resume.personal.summary }}
    </p>

    <section class="resume-section">
      <h2>Professional Experience</h2>
      <article v-for="item in resume.experience" :key="item.id" class="resume-item">
        <div class="resume-item-head">
          <div>
            <p class="resume-item-title">{{ item.company }}</p>
            <p class="resume-item-subtitle">
              {{ item.role }}
            </p>
          </div>
          <p class="resume-item-time">{{ item.startDate }} - {{ item.endDate }}<br />{{ item.location }}</p>
        </div>
        <ul class="resume-bullets">
          <li v-for="(bullet, index) in cleanBullets(item.highlights)" :key="`${item.id}-${index}`">{{ bullet }}</li>
        </ul>
      </article>
    </section>

    <section class="resume-section">
      <h2>Projects</h2>
      <article v-for="item in resume.projects" :key="item.id" class="resume-item">
        <div class="resume-item-head">
          <div>
            <p class="resume-item-title">{{ item.name }}</p>
            <p class="resume-item-subtitle">{{ item.subtitle }}</p>
          </div>
          <p class="resume-item-time">{{ item.startDate }} - {{ item.endDate }}</p>
        </div>
        <ul class="resume-bullets">
          <li v-for="(bullet, index) in cleanBullets(item.highlights)" :key="`${item.id}-${index}`">{{ bullet }}</li>
        </ul>
      </article>
    </section>

    <section class="resume-section">
      <h2>Education</h2>
      <article v-for="item in resume.education" :key="item.id" class="resume-item">
        <div class="resume-item-head">
          <div>
            <p class="resume-item-title">{{ item.school }}</p>
            <p class="resume-item-subtitle">{{ item.degree }}</p>
          </div>
          <p class="resume-item-time">{{ item.startDate }} - {{ item.endDate }}<br />{{ item.location }}</p>
        </div>
        <ul class="resume-bullets">
          <li v-for="(bullet, index) in cleanBullets(item.highlights)" :key="`${item.id}-${index}`">{{ bullet }}</li>
        </ul>
      </article>
    </section>

    <section class="resume-section">
      <h2>Skills</h2>
      <div class="skills-grid">
        <div v-for="item in resume.skills" :key="item.id" class="skills-row">
          <strong>{{ item.name }}</strong>
          <span>{{ item.items }}</span>
        </div>
      </div>
    </section>
  </article>
</template>
