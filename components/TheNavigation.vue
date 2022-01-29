<template>
  <nav class="global-navigation">
    <ul>
      <li><nuxt-link to="/">Home</nuxt-link></li>
      <li><nuxt-link to="/pierre">Pierre</nuxt-link></li>
      <li><nuxt-link to="/jared">Jared</nuxt-link></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'TheNavigation',
}
</script>

<style scoped>
nav {
  padding: 10px;
  border-bottom: 2px solid #ccc;
}

nav ul {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
}

nav ul li {
  margin-right: 10px;
}

nav ul li a {
  color: blue;
}

nav ul li a:hover {
  color: purple;
}
</style>
