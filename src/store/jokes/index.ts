import { Module } from "vuex";
import { RootState } from "../types";
import { actions } from "./actions";
import { getters } from "./getters";
import { mutations } from "./mutations";
import { JokesState } from "./types";

const state: JokesState = {
  id: "",
  created_at: "",
  icon_url: "",
  updated_at: "",
  url: "",
  value: "",

  jokeNumber: 0,
  isLoading: false,
};

export const jokes: Module<JokesState, RootState> = {
  state,
  getters,
  mutations,
  actions
};
