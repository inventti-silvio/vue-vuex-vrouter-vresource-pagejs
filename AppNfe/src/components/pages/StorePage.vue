<template lang="html">
<div id="body">
  <counter></counter>
  <counter></counter>
  <counter-foo></counter-foo>
</div>
</template>

<script>
import Counter from '../CounterV1';
import CounterFoo from '../CounterV2';

export default {
  data() {
    return {
    };
  },
  computed: {},
  ready() {},
  attached() {},
  methods: {},
  components: {
    Counter,
    CounterFoo
  }
};
</script>

<style lang="css">
</style>
