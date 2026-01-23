<script setup>
import { ref, computed } from 'vue'

const emit = defineEmits(['add'])

const title = ref('')
const priority = ref('mid')

const canSubmit = computed(() => title.value.trim().length >= 3)

function submit() {
  if (!canSubmit.value) return
  emit('add', { title: title.value, priority: priority.value })
  title.value = ''
  priority.value = 'mid'
}
</script>

<template>
  <div class="box">
    <input v-model="title" placeholder="Nova lekcija (min 3 znaka)" />
    <select v-model="priority">
      <option value="low">nisko</option>
      <option value="mid">srednje</option>
      <option value="high">visoko</option>
    </select>

    <button :disabled="!canSubmit" @click="submit">Dodaj lekciju</button>
    <small v-if="!canSubmit">Unesi barem 3 znaka.</small>
  </div>
</template>

<style scoped>
.box { display: flex; gap: 8px; align-items: center; flex-wrap: wrap; }
input, select { padding: 8px; }
button { padding: 8px 12px; }
small { opacity: 0.8; }
</style>
