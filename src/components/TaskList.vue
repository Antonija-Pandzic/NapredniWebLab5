<script setup>
defineProps({
  tasks: { type: Array, required: true },
})

const emit = defineEmits(['select', 'toggle'])
</script>

<template>
  <ul class="list">
    <li v-for="t in tasks" :key="t.id" class="row">
      <div class="left">
        <span class="title" @click="emit('select', t.id)">
          {{ t.title }}
        </span>
        <small class="meta">
          hitnost: {{ t.priority }} · {{ t.done ? 'završeno' : 'u tijeku' }}
        </small>
      </div>

      <button @click="emit('toggle', t.id)">
        {{ t.done ? 'Vrati u plan' : 'Završi' }}
      </button>
    </li>
  </ul>
</template>

<style scoped>
.list { padding: 0; list-style: none; margin: 12px 0; }
.row { display: flex; gap: 12px; justify-content: space-between; align-items: center; padding: 10px; border-bottom: 1px solid #ddd; }
.title { cursor: pointer; font-weight: 600; }
.meta { display: block; opacity: 0.75; }
.left { display: flex; flex-direction: column; gap: 2px; }
button { padding: 6px 10px; }
</style>
