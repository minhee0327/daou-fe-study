<template>
  <div>
    <div>
      <header>
        <nav>
          <NuxtLink to="/product">
            Nuxt Dojo Merch
          </NuxtLink>
        </nav>
      </header>

      <div>
        <slot />
      </div>

      <footer>
        <ul>
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

    <div>
      <slot />
    </div>
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
