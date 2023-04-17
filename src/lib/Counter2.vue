<script setup lang="ts">
// @ts-ignore
import { ref, inject } from "vue"
const count = ref(0)
const message = inject("message", "default message")
const increment = () => {
  count.value++
}
</script>

<template>
  <div class="counter" @click="increment">
    <p>{{ message }}</p>
    Count2: {{ count }}
  </div>
</template>

<style scoped>
.counter {
  width: 200px;
  height: 100px;
  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  line-height: 1.5;
  text-align: center;
  font-weight: 400;
  color: blueviolet;
  padding: 0.5em;
  will-change: filter;
  transition: filter 300ms;
  border: 1px solid blueviolet;
  border-radius: 0.5em;
  cursor: pointer;
  background-color: aquamarine;
  user-select: none;
}
.counter:hover {
  filter: drop-shadow(0 0 2em blueviolet);
}
</style>
