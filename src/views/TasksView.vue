<script setup>
import { onMounted } from "vue";
import { useRouter } from "vue-router";
import { useTasksStore } from "../stores/tasks";
import TaskList from "../components/TaskList.vue";
import AddTaskForm from "../components/AddTaskForm.vue";

const store = useTasksStore();
const router = useRouter();

onMounted(() => {
  // lifecycle hook
  if (!store.tasks.length) store.load();
});

function onAdd(payload) {
  store.addTask(payload.title, payload.priority);
}

function onSelect(id) {
  router.push(`/task/${id}`);
}
</script>

<template>
  <section>
    <h1>Zadatci</h1>

    <AddTaskForm @add="onAdd" />

    <div class="filters">
      <input
        :value="store.filterText"
        @input="store.setFilterText($event.target.value)"
        placeholder="Filter..."
      />
      <label>
        <input
          type="checkbox"
          :checked="store.showDone"
          @change="store.setShowDone($event.target.checked)"
        />
        Prikaži gotove
      </label>
      <span>Gotovo: {{ store.doneCount }}/{{ store.tasks.length }}</span>
    </div>

    <p v-if="store.loading">Učitavanje...</p>
    <p v-else-if="store.error">{{ store.error }}</p>

    <TaskList
      v-else
      :tasks="store.filteredTasks"
      @select="onSelect"
      @toggle="store.toggleDone"
    />
  </section>
</template>

<style scoped>
.filters {
  display: flex;
  gap: 12px;
  align-items: center;
  margin: 12px 0;
  flex-wrap: wrap;
}
</style>
