<template>
  <CoreWrapper>
    <h1 class="title">About</h1>
    <About />
  </CoreWrapper>
</template>

<script>
import CoreWrapper from '@Core/components/CoreWrapper'
import About from '@About/components/About'

export default {
  name: 'AboutPage',
  components: {
    CoreWrapper,
    About,
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
