<script setup>
import { ref, onMounted } from 'vue'
import { apiService } from '@/services'
import SectionTitle from './SectionTitle.vue'
const skills = ref([])
onMounted(async () => {
  try {
    skills.value = await apiService.getSkills()
  } catch (error) {
    console.error(error)
  }
})
</script>
<template>
  <section id="skill" class="py-20 bg-keahlian">
    <div class="container mx-auto px-6">
      <SectionTitle title="Keahlian & Teknologi" />
      <div class="grid grid-cols-2 gap-8">
        <div
          v-for="skill in skills"
          :key="skill.id"
          class="bg-bgproyek p-6 rounded-lg shadow-lg text-center transform hover:-translate-y-2 transition-transform duration-300"
        >
          <img :src=skill.url class="object-cover shadow-lg text-center w-full h-80" />
          <h3 class="text-xl font-bold text-gray-800">{{ skill.name }}</h3>
          <p class="text-gray-500 mt-2">{{ skill.level }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
