<template>
  <header class="nav">
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/tasks">Tasks</RouterLink>
    <RouterLink to="/about">About</RouterLink>
  </header>

  <main class="wrap">
    <RouterView />
  </main>
</template>

<style scoped>
.nav {
  display: flex;
  gap: 12px;
  padding: 12px;
  border-bottom: 1px solid #ddd;
}
.wrap {
  padding: 16px;
  max-width: 900px;
  margin: 0 auto;
}
</style>
