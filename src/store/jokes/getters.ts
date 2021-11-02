import { GetterTree } from "vuex";
import { RootState } from "../types";
import { JokesState } from "./types";

export const getters: GetterTree<JokesState, RootState> = {
  getJokeId(state): string {
    return state.id;
  },
  getJokeCreatedDate(state): string {
    return state.created_at;
  },
  getJokeIconUrl(state): string {
    return state.icon_url;
  },
  getJokeUpdateDate(state): string {
    return state.updated_at;
  },
  getJokeUrl(state): string {
    return state.url;
  },
  getJokeValue(state): string {
    return state.value;
  },
  getJokeNumber(state): number {
    return state.jokeNumber;
  },
  getJokeIsLoading(state): boolean {
    return state.isLoading;
  },
};
