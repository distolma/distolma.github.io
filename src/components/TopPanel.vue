<template>
  <div class="top-panel">
    <div class="top-panel__box">
      <a class="top-panel__button" @click.prevent="toggleVisible">
        <Icon :name="isVisible ? 'eye-slash' : 'eye'" />
      </a>
      <a class="top-panel__button" @click.prevent="fetchPhoto">
        <Icon name="refresh" :spin="isLoading" />
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Getter, Action } from 'vuex-class';
import 'vue-awesome/icons/refresh';
import 'vue-awesome/icons/eye';
import 'vue-awesome/icons/eye-slash';

@Component
export default class TopPanel extends Vue {
  @Getter('profileVisibility') private isVisible: boolean;
  @Getter('imageLoading') private isLoading: boolean;
  @Action('toggleProfileVisibility') private actionToggleProfileVisibility: any;
  @Action('fetchRandomPhoto') private actionFetchRandomPhoto: any;

  toggleVisible() {
    // this.$ga.event("photo", "hide profile");
    this.actionToggleProfileVisibility();
  }
  fetchPhoto() {
    if (!this.isLoading) {
      // this.$ga.event("photo", "refresh photo");
      this.actionFetchRandomPhoto();
    }
  }
}
</script>

<style scoped lang="scss">
.top-panel {
  display: flex;
  justify-content: flex-end;
  user-select: none;

  &__box {
    padding: 0.2em;
    cursor: default;
    opacity: 0.3;
    transition: opacity 0.2s ease;

    &:hover {
      opacity: 1;
    }
  }

  &__button {
    cursor: pointer;
    transition: opacity 0.2s ease;

    &:hover {
      opacity: 0.5;
    }
  }
}
.fa-icon {
  width: auto;
  height: 1.3em;
  max-width: 100%;
  max-height: 100%;
  margin: 0 0.4em;
}
</style>
