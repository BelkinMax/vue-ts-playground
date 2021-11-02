import { GetterTree } from "vuex";
import { RootState } from "../types";
import { JokesState } from "./types";

export const getters: GetterTree<JokesState, RootState> = {
  getJoke(state): string {
    return state.value;
  },
};
