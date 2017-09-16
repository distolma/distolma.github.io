<template>
  <background :isStriped="isVisible">
    <top-panel></top-panel>
    <profile></profile>
    <bottom-panel></bottom-panel>
  </background>
</template>

<script>
import { mapGetters } from 'vuex';

import Background from './components/Background';
import Profile from './components/Profile';
import TopPanel from './components/TopPanel';
import BottomPanel from './components/BottomPanel';

export default {
  name: 'app',
  created() {
    this.$store.dispatch('fetchRandomPhoto');
  },
  components: {
    Background,
    Profile,
    TopPanel,
    BottomPanel,
  },
  computed: mapGetters({
    isVisible: 'profileVisibility',
  }),
};
</script>

<style>
</style>
