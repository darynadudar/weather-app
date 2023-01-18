import { createStore } from 'vuex'
import baseModule from "./modules/baseModule";

const store = createStore({
  modules: {
    baseModule
  }
});

export default store;
