<template>
  <div :class="['profile', isVisible ?  '' : 'profile--hide']">
    <div class="profile__img-wrapper">
      <img src="../assets/avatar.jpg" :alt="name" class="profile__img" />
    </div>
    <h1 class="profile__name">
      {{ name }}
    </h1>
    <h3 class="profile__position">
      {{ position }}
    </h3>
    <ul class="profile__social">
      <li class="profile__social-item" v-for="social in socials" :key="social.type">
        <a :href="social.url" class="profile__social-link" target="_black" rel="nofollow" :title="social.title">
          <icon :name="social.type" :label="social.title" />
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

import 'vue-awesome/icons/envelope-o';
import 'vue-awesome/icons/github';
import 'vue-awesome/icons/linkedin-square';

export default {
  name: 'profile',
  data() {
    return {
      name: 'Dmitry Mostovoy',
      position: 'JavaScript Developer',
      socials: [
        {
          type: 'envelope-o',
          url: 'mailto:djmakaron2009@gmail.com',
          title: 'E-mail',
        }, {
          type: 'github',
          url: 'https://github.com/distolma',
          title: 'Github',
        }, {
          type: 'linkedin-square',
          url: 'https://www.linkedin.com/in/dmytromostovyi/',
          title: 'Linkedin',
        },
      ],
    };
  },
  computed: {
    ...mapGetters({
      isVisible: 'profileVisibility',
    }),
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.profile {
  padding: 5em 0;
  display: flex;
  flex-grow: 1;
  align-self: center;
  justify-content: center;
  transition: opacity .2s ease;
  align-items: center;
  flex-direction: column;
  transition: all .2s ease;
  opacity: 1;
  visibility: visible;;

  &--hide {
    opacity: 0;
    visibility: hidden;
  }

  &__img {
    width: 200px;
    height: auto;
    display: block;
    user-select: none;
    -webkit-user-drag: none;
    &-wrapper {
      overflow: hidden;
      border-radius: 50%;
      display: inline-block;
      border: 5px solid hsla(0, 0%, 100%, .5);
    }
  }

  &__social {
    padding: 0;
    display: flex;

    &-item {
      margin: 0 1em;
      list-style-type: none;
    }

    &-link {
      color: #fff;
      transition: opacity .2s ease;
      display: flex;
      align-items: center;
      margin: 0 0.4em;

      &:hover {
        opacity: .5;
      }
    }
  }
}

.fa-icon {
  width: auto;
  height: 1.3em;
  max-width: 100%;
  max-height: 100%;
}
</style>
