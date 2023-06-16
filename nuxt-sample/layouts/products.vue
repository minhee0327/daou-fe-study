<template>
  <div>
    <div>
      <header class="shadow-sm bg-white">
        <nav class="container mx-auto p-4">
          <NuxtLink to="/product" class="font-bold">
            Nuxt Dojo Merch
          </NuxtLink>
        </nav>
      </header>

      <div class="container mx-auto p-4">
        <slot />
      </div>

      <footer class="container mx-auto p-4 flex justify-between border-t-2">
        <ul class="flex gap-4">
          <li>
            <NuxtLink to="/">
              Home
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/about">
              About
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/product">
              Product
            </NuxtLink>
          </li>
        </ul>
      </footer>
    </div>

    <!--    <div>-->
    <!--      <slot />-->
    <!--    </div>-->
  </div>
</template>

<script>
export default {
  name: 'Products'
}
</script>

<style scoped>
  .router-link-exact-active{
  color: #12b488;
  }
</style>
