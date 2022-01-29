<template>
  <CoreWrapper>
    <h1 class="title">{{ $route.params.id }}</h1>
    <nuxt-link to="/shapes">Shapes</nuxt-link>
  </CoreWrapper>
</template>

<script>
import CoreWrapper from '@Core/components/CoreWrapper'

export default {
  name: 'Shape',
  components: {
    CoreWrapper,
  },
}
</script>

<style>
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
