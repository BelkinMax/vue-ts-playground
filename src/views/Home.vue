<script setup lang="ts">
import axios from 'axios';
import { onMounted } from '@vue/runtime-core';
import HelloWorld from "@/components/HelloWorld.vue";
import { computed, ref } from 'vue';
import { useStore } from 'vuex';

const { getters } = useStore();

const counter = ref(0);
const joke = ref(null);
const avatarUrl = ref(null);

const message = computed(() => getters.getJoke);

onMounted(() => {
  setCounter();
  getChuckJoke();
})

const resetCounter = () => {
  counter.value = 0;
};

const getChuckJoke = async () => {
  const { data } = await axios.get("https://api.chucknorris.io/jokes/random");

  if (data.id) {
    joke.value = data.value;
    avatarUrl.value ??= data.icon_url;
  }
}

const setCounter = () => {
  setInterval(() => counter.value++, 1000);
}
</script>

<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <img v-if="avatarUrl" :src="avatarUrl" alt="Chuck" />
    <HelloWorld :counter="counter" />
    <p>{{ joke }}</p>
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