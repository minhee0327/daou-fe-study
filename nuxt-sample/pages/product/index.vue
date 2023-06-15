<template>
  <div>
    <div class="grid grid-cols-4 gap-5">
      <div v-for="(p, index) in products" :key="index">
        <ProductCard :product="p"></ProductCard>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'products'
})

const { data: products } = await useFetch('https://fakestoreapi.com/products')

useHead({
  title: 'Nuxt Dojo | Merch',
  meta: [
    { name: 'description', content: 'Nuxt3 Merch' }
  ]
})

</script>

<style scoped>

</style>
