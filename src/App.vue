<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/sigma.svg" width="50" height="50" />

    <nav>
      <RouterLink to="/domain">Domains</RouterLink>
    </nav>
    <button>Logout</button>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 20px 10%;
  background-color: var(--vt-c-black-soft);
  color: var(--color-text);
}

.logo {
  cursor: pointer;
  margin-right: auto;
}

nav a {
  list-style: none;
  display: inline-block;
  padding: 0px 20px;
  transition: all 0.3s ease 0s;
  text-decoration: none;
  color: inherit;
}

nav a:hover {
  color: var(--brown-pure);
}

nav a.router-link-active {
  color: var(--brown-pure);
}
</style>
