<template>
  <div class="core-wrapper">
    <CoreLogo />
    <slot />
  </div>
</template>

<script>
import CoreLogo from '@Core/components/CoreLogo'
export default {
  name: 'CoreWrapper',
  components: {
    CoreLogo,
  },
}
</script>

<style>
.wrapper {
  margin: 0 auto;
  display: grid;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
