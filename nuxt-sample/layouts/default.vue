<template>
  <div>
    <div>
      <header class="shadow-sm bg-white">
        <nav class="container mx-auto p-4 flex justify-between">
          <NuxtLink to="/" class="font-bold">
            Nuxt Dojo
          </NuxtLink>
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
              <NuxtLink to="/product" class="btn">
                Product
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/product/abc" class="btn">
                ABC
              </NuxtLink>
            </li>
          </ul>
        </nav>
      </header>
    </div>

    <div class="container mx-auto p-4">
      <slot />
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped>
.router-link-exact-active{
  color: #12b488;
}
</style>
