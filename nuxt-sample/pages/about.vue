<template>
  <div>
    <h2>About</h2>
    <div>{{ data }}</div>
  </div>
</template>

<script setup>
// const { data } = await useFetch('/api/ninja?name=mini', {
//   method: 'post',
//   body: {
//     age: 30
//   }
// })

const { data } = await useFetch('/api/ninja')
</script>

<style scoped></style>
