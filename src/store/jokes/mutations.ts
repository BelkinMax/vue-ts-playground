import { MutationTree } from "vuex";
import { JokePayload, JokesState } from "./types";

export const mutations: MutationTree<JokesState> = {
  SET_JOKE(state, payload: JokePayload) {
    const { id, created_at, icon_url, updated_at, url, value } = payload;

    state.id = id;
    state.created_at = created_at;
    state.icon_url = icon_url;
    state.updated_at = updated_at;
    state.url = url;
    state.value = value;
  },
  SET_JOKE_IS_LOADING(state, payload: boolean) {
    state.isLoading = payload;
  },
  ADD_JOKE_NUMBER(state) {
    state.jokeNumber++;
  },
};
