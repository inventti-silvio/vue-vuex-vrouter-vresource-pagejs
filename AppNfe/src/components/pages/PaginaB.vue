<template>
  <div id="body">
    <h1>{{teste}}</h1>
    <a href="a">Page A</a>
    |
    <a href="/AppNfe">Home</a>
    |
    <a href="/App/dashboard">Dashboard</a>
  </div>
</template>

<script>
export default {
  replace: false,
  data() {
    return {
      teste: 'B'
    };
  },
  computed: {},
  ready() {},
  attached() {},
  methods: {},
  components: {}
};
</script>

<style>
</style>
