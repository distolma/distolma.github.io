<template>
  <div class="background">
    <progressive-background
      :src="images.custom"
      :placeholder="images.thumb"
    >
      <div :class="[isStriped ? '' : 'background__striped--hide', 'background__striped']">
        <div class="background__container">
          <slot></slot>
        </div>
      </div>
    </progressive-background>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Getter } from "vuex-class";

@Component
export default class Background extends Vue {
  @Getter("profileVisibility") private isStriped: boolean;
  @Getter("imageURLs") private images: any;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.background {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 100vh;
  overflow: hidden;
  position: relative;

  &__container {
    display: flex;
    flex-direction: column;
    height: 100%;
    padding: 1.5em;
  }

  &__striped {
    height: 100vh;
    background-repeat: repeat;
    background-image: repeating-linear-gradient(
      135deg,
      rgba(0, 0, 0, 0.4),
      rgba(0, 0, 0, 0.4) 1px,
      transparent 2px,
      transparent 0,
      rgba(0, 0, 0, 0.4) 3px
    );
    background-size: 4px 4px;
    transition: background 0.2s ease;

    &--hide {
      background: 0;
    }
  }
}
</style>
