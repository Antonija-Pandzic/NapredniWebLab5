<script setup>
defineProps({
  tasks: { type: Array, required: true },
});
const emit = defineEmits(["select", "toggle"]);
</script>

<template>
  <ul class="list">
    <li v-for="t in tasks" :key="t.id" class="row"> <!-- props-->
      <span @click="emit('select', t.id)" class="title">
        {{ t.title }}
        <!-- interpolation / one-way -->
      </span>

      <button @click="emit('toggle', t.id)">
        {{ t.done ? "Vrati" : "Gotovo" }}
      </button>
    </li>
  </ul>
</template>

<style scoped>
.list {
  padding: 0;
  list-style: none;
}
.row {
  display: flex;
  gap: 12px;
  justify-content: space-between;
  padding: 10px;
  border-bottom: 1px solid #ddd;
}
.title {
  cursor: pointer;
}
</style>
