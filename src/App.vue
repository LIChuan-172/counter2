<script setup lang="ts">
import { provide } from "vue";
import Counter2 from "./lib/Counter2.vue"

provide("message", "Hello from lib");
</script>

<template>
  <div id="app">
    <Counter2 />
  </div>
</template>
