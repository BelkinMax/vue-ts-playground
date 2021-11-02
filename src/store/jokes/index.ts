import { Module } from "vuex";
import { RootState } from "../types";
import { getters } from "./getters";
import { JokesState } from "./types";

const state: JokesState = {
  value: "Some joke",
};

export const jokes: Module<JokesState, RootState> = {
  state,
  getters
};
