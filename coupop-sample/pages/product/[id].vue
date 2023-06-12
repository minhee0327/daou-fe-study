<template>
  <div>
    <p>Product details for {{ id }}</p>
  </div>
</template>

<script setup>
  import { useRoute } from "nuxt/app";

  const {id} = useRoute().params
</script>

<style scoped>

</style>

