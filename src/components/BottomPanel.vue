<template>
  <div :class="['bottom-panel', author.name ? '' : 'bottom-panel--hide']">
    <div class="bottom-panel__box">
      <Icon name="angle-left" />
      <a class="bottom-panel__link" :href="author.links.html + utm" target="_blank">
        {{ author.name }}
      </a>
      &nbsp;/&nbsp;
      <a class="bottom-panel__link" :href="'https://unsplash.com/' + utm" rel="nofollow" target="_blank">
        Unsplash
      </a>
      <Icon name="angle-left" flip="horizontal" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Getter } from 'vuex-class';
import 'vue-awesome/icons/angle-left';

@Component
export default class BottomPanel extends Vue {
  @Getter('imageAuthor') private author: any;
  private utm = '?utm_source=Unpaper&utm_medium=referral';
}
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
    opacity: 0.3;
    transition: opacity 0.2s ease;

    &:hover {
      opacity: 1;
    }
  }

  &__link {
    color: #fff;

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
