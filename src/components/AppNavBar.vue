<script setup lang="ts">
import router from '../router';
console.log(router)
</script>

<template>
    <nav class="navbar navbar-dark bg-dark fixed-top bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">qqMelon PORTAL</a>
        <p class="h3 text-white">{{ $route.meta.title }}</p>
      </div>
    </nav>
</template>