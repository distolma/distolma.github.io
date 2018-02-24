import * as types from './mutation-types';

export default {
  [types.TOGGLE_PROFILE_VISIBILITY](state) {
    state.isProfileVisible = !state.isProfileVisible;
  },

  [types.FETCH_RANDOM_PHOTO](state) {
    state.isImageLoading = true;
  },

  [types.RECEIVE_RANDOM_PHOTO](state, { data }) {
    state.unsplash = data;
    state.isImageLoading = false;
  },
};
