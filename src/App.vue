<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HeaderSection from './components/HeaderSection.vue'
</script>

<template>
  <header>
    <HeaderSection />
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>
