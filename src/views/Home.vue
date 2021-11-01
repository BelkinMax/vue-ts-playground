<script lang="ts" setup>
import axios from 'axios';
import { reactive } from "@vue/reactivity";
import { onMounted, watchEffect } from '@vue/runtime-core';

import HelloWorld from "@/components/HelloWorld.vue";

const message = "Hello world";
const state = reactive({
  counter: 0,
  joke: null,
  avatarUrl: null
})

const resetCounter = () => {
  state.counter = 0;
};

const getChuckJoke = async () => {
  const { data } = await axios.get("https://api.chucknorris.io/jokes/random");

  if (data.id) {
    state.joke = data.value;
    state.avatarUrl ??= data.icon_url;
  }
}

const setCounter = () => {
  setInterval(() => state.counter++, 1000);
}

watchEffect(() => {
  console.log(state.counter);
})

onMounted(() => {
  setCounter();
  getChuckJoke()
})
</script>

<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <img v-if="state.avatarUrl" :src="state.avatarUrl" alt="Chuck" />
    <HelloWorld :counter="state.counter" />
    <p>{{ state.joke }}</p>
    <div class="flex-container">
      <button @click="resetCounter">Reset Counter</button>
      <button @click="getChuckJoke">Get new joke</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.flex-container {
  display: flex;
  gap: 1rem;
  width: 100%;
  justify-content: center;
}
</style>