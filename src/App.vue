<template>
  <Background>
    <TopPanel />
    <Profile />
    <BottomPanel />
  </Background>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Action } from 'vuex-class';

import Background from './components/Background.vue';
import Profile from './components/Profile.vue';
import BottomPanel from './components/BottomPanel.vue';
import TopPanel from './components/TopPanel.vue';

@Component({
  components: {
    Background,
    Profile,
    BottomPanel,
    TopPanel,
  },
})
export default class App extends Vue {
  @Action('fetchRandomPhoto') private actionFetchRandomPhoto: any;

  created() {
    this.actionFetchRandomPhoto();
  }
}
</script>
