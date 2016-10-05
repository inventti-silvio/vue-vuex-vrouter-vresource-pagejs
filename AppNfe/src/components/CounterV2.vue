<template lang="html">
<div>
  <p>Counter v2</p>
  <p>{{ count }}</p>
  <p>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="alert">alert</button>
    <button @click="incrementAsync">+ async</button>
    <button @click="decrementAsync">- async</button>
    <button @click="incrementOdd">+ if odd</button>
    <button @click="incrementEven">+ if even</button>
    <button @click="revert">revert</button>
  </p>
</div>
</template>

<script>
import store from '../stores/CounterStoreV2';

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
     store.dispatch('increment')
    },
    decrement () {
    	store.dispatch('decrement')
    },
    alert () {
    	store.dispatch('alert');
    },
    incrementAsync () {
    	store.dispatch('incrementAsync');
    },
    decrementAsync () {
    	store.dispatch('decrementAsync');
    },
    incrementOdd () {
      store.dispatch('incrementOdd')
    },
    incrementEven () {
      store.dispatch('incrementEven');
    },
    revert () {
      store.dispatch('revert');
    }
  },
  components: {}
};
</script>

<style lang="css">
</style>
