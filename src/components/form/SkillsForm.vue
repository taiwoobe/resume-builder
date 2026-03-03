<script setup lang="ts">
import { createId, type SkillCategory } from '../../types/resume'

const props = defineProps<{
  skills: SkillCategory[]
}>()

const addSkillCategory = () => {
  props.skills.push({
    id: createId(),
    name: '',
    items: '',
  })
}

const removeSkillCategory = (id: string) => {
  if (props.skills.length === 1) return
  const index = props.skills.findIndex((item) => item.id === id)
  if (index >= 0) props.skills.splice(index, 1)
}
</script>

<template>
  <section class="section-panel">
    <div class="item-card-header">
      <h3>Skills</h3>
      <button class="btn btn-muted" type="button" @click="addSkillCategory">+ Add category</button>
    </div>

    <div v-for="(item, index) in skills" :key="item.id" class="item-card">
      <div class="item-card-header">
        <span class="item-card-title">Skill group {{ index + 1 }}</span>
        <button class="btn btn-muted" type="button" @click="removeSkillCategory(item.id)">Remove</button>
      </div>

      <div class="field-grid">
        <div class="field">
          <label>Category</label>
          <input v-model="item.name" placeholder="JavaScript" />
        </div>
        <div class="field">
          <label>Items (comma-separated)</label>
          <input v-model="item.items" placeholder="Vue, React, Node.js" />
        </div>
      </div>
    </div>
  </section>
</template>
