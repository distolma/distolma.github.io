<template>
  <div :class="['bottom-panel', author.name ? '' : 'bottom-panel--hide']">
    <div class="bottom-panel__box">
      <icon name="angle-left" />
      <a class="bottom-panel__link" href="">
        {{ author.name }}
      </a>
      &nbsp;/&nbsp;
      <a class="bottom-panel__link" href="https://unsplash.com/" rel="nofollow" target="_black">
        Unsplash
      </a>
      <icon name="angle-left" flip="horizontal" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

import 'vue-awesome/icons/angle-left';

export default {
  name: 'bottom-panel',
  computed: mapGetters({
    author: 'imageAuthor',
  }),
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.bottom-panel {
  display: flex;
  justify-content: flex-end;
  user-select: none;

  &--hide {
    opacity: 0;
    visibility: hidden;
  }

  &__box {
    display: flex;
    align-items: center;
    white-space: nowrap;
    opacity: .3;
    transition: opacity .2s ease;

    &:hover {
      opacity: 1;
    }
  }

  &__link {
    color: #fff;
    text-decoration-skip: ink;

    &:hover {
      text-decoration: none;
    }
  }
}

.fa-icon {
  width: auto;
  height: 2em;
  max-width: 100%;
  max-height: 100%;
  margin: 0 0.4em;
}
</style>
