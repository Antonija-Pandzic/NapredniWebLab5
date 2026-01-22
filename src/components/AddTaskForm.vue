<script setup>
import { ref, computed } from "vue";

const emit = defineEmits(["add"]);

const title = ref("");
const priority = ref("mid");

const canSubmit = computed(() => title.value.trim().length >= 3);

function submit() {
  if (!canSubmit.value) return;
  emit("add", { title: title.value, priority: priority.value });
  title.value = "";
  priority.value = "mid";
}
</script>

<template>
  <div class="box">
    <input v-model="title" placeholder="Novi zadatak (min 3 znaka)" />
    <!-- two-way -->
    <select v-model="priority">
      <option value="low">low</option>
      <option value="mid">mid</option>
      <option value="high">high</option>
    </select>

    <button :disabled="!canSubmit" @click="submit">Dodaj</button>
    <small v-if="!canSubmit">Unesi barem 3 znaka.</small>
  </div>
</template>

<style scoped>
.box {
  display: flex;
  gap: 8px;
  align-items: center;
  flex-wrap: wrap;
}
input {
  padding: 8px;
}
</style>
