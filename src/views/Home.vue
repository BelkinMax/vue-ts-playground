<script setup lang="ts">
import axios from 'axios';
import { onMounted } from '@vue/runtime-core';
import HelloWorld from "@/components/HelloWorld.vue";
import { computed, ref } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const { getters, dispatch } = store;

const joke = ref(null);
const avatarUrl = ref(null);

const message = computed(() => {
  return getters.getJokeIsLoading ? "Loading..." : "Ha Ha Ha"
});
const jokeCounter = computed(() => getters.getJokeNumber);

onMounted(() => {
  setJoke();
})

const setJoke = async () => {
  await dispatch("fetchRandomJoke");

  joke.value = getters.getJokeValue;
  avatarUrl.value ??= getters.getJokeIconUrl;
}

</script>

<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <img v-if="avatarUrl" :src="avatarUrl" alt="Chuck" />
    <HelloWorld :counter="jokeCounter" />
    <p>{{ joke }}</p>
    <div class="flex-container">
      <button @click="setJoke">Get new joke</button>
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