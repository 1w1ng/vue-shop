import { USER_INFO } from './mutations-type';

export default {
  // 1. 同步用户信息
  syncUserInfo({ commit }, userInfo) {
    commit(USER_INFO, { userInfo });
  }
};
