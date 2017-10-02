<template>
  <div class="top-panel">
    <div class="top-panel__box">
      <a class="top-panel__button" @click.prevent="toggleVisible">
        <icon :name="isVisible ? 'eye-slash' : 'eye'" />
      </a>
      <a class="top-panel__button" @click.prevent="fetchPhoto">
        <icon name="refresh" :spin="isLoading" />
      </a>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

import 'vue-awesome/icons/refresh';
import 'vue-awesome/icons/eye';
import 'vue-awesome/icons/eye-slash';

export default {
  name: 'top-panel',
  data() {
    return {

    };
  },
  computed: mapGetters({
    isVisible: 'profileVisibility',
    isLoading: 'imageLoading',
  }),
  methods: {
    toggleVisible() {
      this.$ga.event('photo', 'hide profile');
      this.$store.dispatch('toggleProfileVisibility');
    },
    fetchPhoto() {
      this.$ga.event('photo', 'refresh photo');
      if (!this.isLoading) {
        this.$store.dispatch('fetchRandomPhoto');
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.top-panel {
  display: flex;
  justify-content: flex-end;
  user-select: none;

  &__box {
    padding: 0.2em;
    cursor: default;
    opacity: .3;
    transition: opacity .2s ease;

    &:hover {
      opacity: 1;
    }
  }

  &__button {
    cursor: pointer;
    transition: opacity .2s ease;

    &:hover {
      opacity: .5;
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
