import axios from "axios";
import { ActionTree } from "vuex";
import { RootState } from "../types";
import { JokesState } from "./types";

export const actions: ActionTree<JokesState, RootState> = {
  async fetchRandomJoke () {
    this.commit("SET_JOKE_IS_LOADING", true);

    const { data } = await axios.get("https://api.chucknorris.io/jokes/random");
    this.commit("SET_JOKE", data);
    this.commit("ADD_JOKE_NUMBER");

    this.commit("SET_JOKE_IS_LOADING", false);
  }
}