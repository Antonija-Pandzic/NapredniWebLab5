<template>
  <header class="nav">
    <RouterLink to="/" class="brand">Study Planner</RouterLink>
    <nav class="links">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/tasks">Plan učenja</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </nav>
  </header>

  <main class="wrap">
    <RouterView />
  </main>
</template>

<style scoped>
.nav{
  display:flex;
  justify-content:space-between;
  align-items:center;
  gap:12px;
  padding:12px 16px;
  border-bottom:1px solid #ffffffaa;
  background: linear-gradient(90deg, #ffffffcc, #ffffff88);
  backdrop-filter: blur(8px);
}

.brand{
  font-weight:800;
  letter-spacing: .2px;
  padding: 6px 10px;
  border-radius: 14px;
  background: linear-gradient(90deg, #ffd2e6, #cfe7ff);
}

.links{ display:flex; gap:12px; }
.links a{
  padding:6px 10px;
  border-radius: 12px;
  border: 1px solid transparent;
}
.links a:hover{
  border-color: #e6d9f5;
  background: #ffffff99;
}

.wrap{ padding:16px; max-width:900px; margin:0 auto; }
</style>

