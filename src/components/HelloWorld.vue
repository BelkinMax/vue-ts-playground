<script lang="ts" setup>
interface ICounter {
  counter?: number;
}

const props = withDefaults(defineProps<ICounter>(), {
  counter: 100,
});
</script>

<template>
  <div>
    <p>Joke number {{ counter }}</p>
  </div>
</template>