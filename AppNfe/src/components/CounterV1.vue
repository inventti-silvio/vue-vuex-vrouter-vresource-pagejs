<template lang="html">
<div>
  <p>SharedCounter</p>
  <p>{{ count }}</p>
  <p>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="alert">alert</button>
    <button @click="incrementAsync">+ async</button>
    <button @click="decrementAsync">- async</button>
  </p>
</div>
</template>

<script>
import store from '../stores/CounterStoreV1';

export default {
  data() {
    return {
    };
  },
  computed: {
    count: {
      get () {
        return store.state.count;
      }
    }
  },
  ready() {},
  attached() {},
  methods: {
    increment () {
     store.commit('increment')
    },
    decrement () {
    	store.commit('decrement')
    },
    alert () {
    	store.dispatch('alert');
    },
    incrementAsync () {
    	store.dispatch('increment');
    },
    decrementAsync() {
    	store.dispatch('decrement');
    }
  },
  components: {}
};
</script>

<style lang="css">
</style>
