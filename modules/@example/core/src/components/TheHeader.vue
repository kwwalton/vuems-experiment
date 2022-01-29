<template>
  <header>
    <div class="logo-wrapper">
      <nuxt-link to="/">
        <NuxtLogo />
        <span>VueMS Experiment</span>
      </nuxt-link>
    </div>
  </header>
</template>

<script>
export default {
  name: 'TheHeader',
}
</script>

<style scoped>
header {
  display: flex;
  padding: 10px;
  border-bottom: 2px solid #ccc;
}

header div {
  display: flex;
  align-items: center;
}

header div a {
  display: flex;
  align-items: center;
  color: blue;
}

header div a:hover {
  color: purple;
}

header div:first-child svg {
  height: 30px;
  margin-right: 10px;
}
</style>
