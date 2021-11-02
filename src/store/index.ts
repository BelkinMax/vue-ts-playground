import { createStore, StoreOptions } from 'vuex'
import { jokes } from './jokes';
import { RootState } from './types';

const store: StoreOptions<RootState> = {
  state: {
    message: 'Hello from Vuex!'
  },
  modules: {
    jokes
  }
}

export default createStore(store);
