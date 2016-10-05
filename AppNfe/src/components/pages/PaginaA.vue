<template lang="html">
  <div id="body">
    <h1>{{teste}}</h1>
    <a href="b">Page B</a>
    |
    <a href="/AppNfe">Home</a>
    |
    <a href="/App/dashboard">Dashboard</a>
    <input type="text" name="name" v-model='teste'>
  </div>
</template>

<script>
export default {
  replace: false,
  data() {
    return {
      teste: 'A'
    };
  },
  computed: {},
  ready() {
  },
  attached() {},
  methods: {},
  components: {}
};
</script>

<style lang="css">
</style>
