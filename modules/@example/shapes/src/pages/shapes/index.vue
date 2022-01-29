<template>
  <CoreWrapper>
    <div class="shapes">
      <h1 class="title">Shapes</h1>
      <ul>
        <li>
          <nuxt-link to="/shapes/shape/circle">Circle</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/shapes/shape/square">Square</nuxt-link>
        </li>
      </ul>
    </div>
  </CoreWrapper>
</template>

<script>
import CoreWrapper from '@Core/components/CoreWrapper'

export default {
  name: 'Shapes',
  components: {
    CoreWrapper,
  },
}
</script>

<style scoped>
.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 60px;
  color: #35495e;
  letter-spacing: 1px;
}
</style>
