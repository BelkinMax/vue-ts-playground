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
    <p>Counter {{ counter }}</p>
  </div>
</template>