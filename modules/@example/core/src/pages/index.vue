<template>
  <CoreWrapper>
    <h1 class="title">VueMS-demo</h1>
  </CoreWrapper>
</template>

<script>
import CoreWrapper from '@Core/components/CoreWrapper'

export default {
  name: 'IndexPage',
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
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}
</style>
