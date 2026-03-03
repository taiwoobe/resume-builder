<script setup lang="ts">
import type { PersonalInfo } from '../../types/resume'

defineProps<{
  personal: PersonalInfo
}>()
</script>

<template>
  <section class="section-panel">
    <h3>Personal Details</h3>
    <div class="field-grid">
      <div class="field">
        <label>Full name</label>
        <input v-model="personal.fullName" placeholder="Jane Doe" />
      </div>
      <div class="field">
        <label>Headline</label>
        <input v-model="personal.headline" placeholder="Senior Software Engineer" />
      </div>
      <div class="field">
        <label>Location</label>
        <input v-model="personal.location" placeholder="Auckland, New Zealand" />
      </div>
      <div class="field">
        <label>Email</label>
        <input v-model="personal.email" type="email" placeholder="you@example.com" />
      </div>
      <div class="field">
        <label>Website</label>
        <input v-model="personal.website" placeholder="www.example.com" />
      </div>
      <div class="field">
        <label>LinkedIn</label>
        <input v-model="personal.linkedin" placeholder="linkedin.com/in/username" />
      </div>
    </div>
    <div class="field" style="margin-top: 10px">
      <label>Professional summary</label>
      <textarea
        v-model="personal.summary"
        placeholder="Briefly summarize your strengths, impact, and areas of expertise."
      />
    </div>
  </section>
</template>
