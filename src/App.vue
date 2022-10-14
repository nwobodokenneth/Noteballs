
<template>
  <div>
    <Navbar/>
    <div class="container is-max-desktop px-2 py-4">
      <RouterView/>
    </div>
  </div>
</template>
<script setup>
import Navbar from '../src/components/layout/Navbar.vue';
</script>
<style>
  @import 'bulma/css/bulma.min.css';
</style>
