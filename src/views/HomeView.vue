<script setup>
const appTitle = 'Study Planner'
</script>

<template>
  <section>
    <h1>{{ appTitle }}</h1>
    <p>SPA aplikacija za planiranje učenja: dodavanje lekcija, filtriranje i prikaz detalja.</p>
    <p>Idi na <RouterLink to="/tasks">Plan učenja</RouterLink> za popis lekcija.</p>
  </section>
</template>
