<template>
  <div id="app">
    <div class="left">
      <item :id="1"/>
      <item3 :id="2"/>
    </div>
    <div class="right">
      <item2 :id="1"/>
      <item4 :id="2"/>

    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'app',
  components: {
    Item: () => import('./components/Item'),
    Item2: () => import('./components/Item2'),
    Item3: () => import('./components/Item3'),
    Item4: () => import('./components/Item4'),
  },
  methods: {
    ...mapActions([
      'init',
    ]),
  },
  beforeMount() {
    this.init();
  },
};
</script>

<style lang="scss">
#app {
  margin-top: 60px;
  display: flex;
  justify-content: space-around;
}
</style>
