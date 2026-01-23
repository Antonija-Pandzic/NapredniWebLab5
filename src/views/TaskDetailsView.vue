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
      <p>Status: <b>{{ task.done ? 'završeno' : 'u tijeku' }}</b></p>
      <p>Hitnost: <b>{{ task.priority }}</b></p>

      <button @click="store.toggleDone(task.id)">
        {{ task.done ? 'Označi kao u tijeku' : 'Označi kao završeno' }}
      </button>
    </div>

    <div v-else class="card">
      <h2>Nema lekcije</h2>
      <p>Ne postoji lekcija s ID={{ id }}.</p>
    </div>
  </section>
</template>

<style scoped>
.card{
  margin-top: 12px;
  border: 1px solid #e6d9f5;
  padding: 12px;
  border-radius: 16px;
  background: #ffffffcc;
  backdrop-filter: blur(6px);
  box-shadow: 0 10px 30px #00000010;
}
button{ margin-top: 10px; }
</style>

