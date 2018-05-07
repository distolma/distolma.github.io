import api from '../api';
import { setMainColor } from '../utils/mainColor';
import * as types from './mutation-types';

export const fetchRandomPhoto = async ({ commit }) => {
  commit(types.FETCH_RANDOM_PHOTO);

  try {
    const data = await api();
    setMainColor(data.color);
    commit(types.RECEIVE_RANDOM_PHOTO, {
      data,
    });
  } catch (error) {
    setMainColor();
  }
};

export const toggleProfileVisibility = ({ commit }) => {
  commit(types.TOGGLE_PROFILE_VISIBILITY);
};
