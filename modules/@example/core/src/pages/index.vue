<template>
  <CoreWrapper>
    <h1 class="title">VueMS-demo</h1>
    <button @click="axiosTest">axiosTest</button>
    <p v-if="apiResponse">{{ apiResponse }}</p>
  </CoreWrapper>
</template>

<script>
import CoreWrapper from '@Core/components/CoreWrapper'

export default {
  name: 'IndexPage',
  components: {
    CoreWrapper,
  },
  data() {
    return {
      apiResponse: '',
    }
  },
  methods: {
    axiosTest() {
      this.$axios
        .get('https://jsonplaceholder.typicode.com/todos/1')
        .then((res) => {
          // eslint-disable-next-line no-console
          console.log(res)
          this.apiResponse = res.data.title
        })
        .catch((err) => {
          // eslint-disable-next-line no-console
          console.log(err)
        })
    },
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
