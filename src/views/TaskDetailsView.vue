<script setup>
import { computed, onMounted, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useTasksStore } from '../stores/tasks'

const route = useRoute()
const router = useRouter()
const store = useTasksStore()

const id = computed(() => Number(route.params.id))
const task = computed(() => store.tasks.find(t => t.id === id.value))

async function ensureLoaded() {
  if (!store.tasks.length && !store.loading) {
    await store.load()
  }
}

onMounted(async () => {
  await ensureLoaded()
})


watch(
  () => store.tasks.length,
  async () => {
    await ensureLoaded()
  }
)
</script>

<template>
  <section>
    <button @click="router.push('/tasks')">← Nazad</button>

    <div v-if="store.loading">Učitavanje...</div>

    <div v-else-if="task" class="card">
      <h2>{{ task.title }}</h2>
      <p>Status: <b>{{ task.done ? 'gotovo' : 'u tijeku' }}</b></p>
      <p>Prioritet: <b>{{ task.priority }}</b></p>

      <button @click="store.toggleDone(task.id)">
        {{ task.done ? 'Označi kao nije gotovo' : 'Označi kao gotovo' }}
      </button>
    </div>

    <div v-else class="card">
      <h2>Nema zadatka</h2>
      <p>Ne postoji zadatak s ID={{ id }}.</p>
    </div>
  </section>
</template>
