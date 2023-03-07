<template>
  <v-layout>
    <v-main>
      <h1 style="text-align: center">
        {{ count }}
      </h1>
      <v-row justify="center">
        <v-btn @click="increment">Add</v-btn>
        <v-btn @click="reset">Reset</v-btn>
      </v-row>
    </v-main>
  </v-layout>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useCounterStore } from "../stores/counter";

const { count } = storeToRefs(useCounterStore());
const { increment, reset } = useCounterStore();
</script>
