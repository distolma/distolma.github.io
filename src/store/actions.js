import api from '../api';
import setMainColor from '../utils/mainColor';
import * as types from './mutation-types';

export const fetchRandomPhoto = async ({ commit }) => {
  commit(types.FETCH_RANDOM_PHOTO);

  try {
    const data = await api();
    console.log(data);
    setMainColor(data.color);
    commit(types.RECEIVE_RANDOM_PHOTO, { data });
  } catch (error) {
    setMainColor();
    // commit(types.RECEIVE_RANDOM_PHOTO, {
    //   data: {
    //     urls: {
    //       full: 'https://unsplash.it/200/300',
    //       thumb: 'https://unsplash.it/200/300',
    //     },
    //   },
    // });
  }
};

export const toggleProfileVisibility = ({ commit }) => {
  commit(types.TOGGLE_PROFILE_VISIBILITY);
};
