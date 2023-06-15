<template>
  <div>
    <Head>
      <Title>성호&민희 | {{ product.title }}</Title>
      <Meta name="description" :content="product.description"></Meta>
      <Meta property="og:image" :content="product.image"></Meta>
    </Head>
    <ProductDetails :product="product"></ProductDetails>
  </div>
</template>

<script setup>
const { id } = useRoute().params
const uri = 'https://fakestoreapi.com/products/' + id

const { data: product } = await useFetch(uri)
if (!product.value) {
  throw createError({ statusCode: 404, statusMessage: 'Product not found', fatal: true })
}

definePageMeta({
  layout: 'products'
})
</script>

<style scoped>

</style>
