<script setup>
import { computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useTasksStore } from "../stores/tasks";

const route = useRoute();
const router = useRouter();
const store = useTasksStore();

const id = computed(() => Number(route.params.id));
const task = computed(() => store.tasks.find((t) => t.id === id.value));
</script>

<template>
  <section>
    <button @click="router.push('/tasks')">← Nazad</button>

    <div v-if="task">
      <h2>{{ task.title }}</h2>
      <p>
        Status: <b>{{ task.done ? "gotovo" : "u tijeku" }}</b>
      </p>
      <p>Prioritet: {{ task.priority }}</p>
    </div>

    <p v-else>Ne postoji zadatak s ID={{ id }}.</p>
  </section>
</template>
