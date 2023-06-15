<template>
  <div class="card">
    <div class="grid grid-cols-2 gap-10">
      <div class="p-7">
        <img :src="props.product.image" alt="product img" class="mx-auto my-7">
      </div>
      <div class="p-7">
        <h2 class="text-4xl my-7">
          {{ props.product.title }}
        </h2>
        <p class="text-xl my-7">
          Price - ${{ props.product.price }}
        </p>
        <h3 class="font-bold border-b-2 mb-4 pb-2">
          Product description:
        </h3>
        <p class="mb-7">
          {{ product.description }}
        </p>
        <button class="btn flex">
          <i class="material-icons mr-2">add_shopping_cart</i>
          <span>Add to cart</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Product } from '~/interface/product/Product'

// defineProps()를 사용하여 프로퍼티를 정의할 때에는 구조 분해(destructuring)를 사용하지 않는 것이 좋습니다.
// 구조 분해를 사용하면 프로퍼티가 반응성(reactivity)을 잃을 수 있음
const props = defineProps<{ product: Product }>()

</script>

<style scoped>
img{
  max-width: 400px;
}
</style>
