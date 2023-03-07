<template>
  <v-container> <Bar :data="data" :options="options" /></v-container>
  <v-row justify="center">
    <v-sheet class="pa-1">
      <v-btn color="#FF0000" class="text-white" @click="counter.increment"
        >พรรคเพื่อไทย</v-btn
      >
    </v-sheet>
    <v-sheet class="pa-1">
      <v-btn color="#FF6000" class="text-white" @click="counter.increment2"
        >พรรคก้าวไกล</v-btn
      >
    </v-sheet>
    <v-sheet class="pa-1">
      <v-btn color="#8000C0" class="text-white" @click="counter.increment3"
        >พรรคไทยสร้างไทย</v-btn
      >
    </v-sheet>
    <v-sheet class="pa-1">
      <v-btn color="#00C0FF" @click="counter.increment4">พรรคประชาธิปัตย์</v-btn>
    </v-sheet>
    <v-sheet class="pa-1">
      <v-btn color="#E0E0E0" @click="counter.increment5">พรรคพลังประชารัฐ</v-btn>
    </v-sheet>
    <v-sheet class="pa-1">
      <v-btn color="#00FF00" @click="counter.increment6">พรรคภูมิใจไทย</v-btn>
    </v-sheet>
    <v-sheet class="pa-1">
      <v-btn color="#3000C0" class="text-white" @click="counter.increment7"
        >พรรครวมไทยสร้างชาติ</v-btn
      >
    </v-sheet>
    <v-sheet class="pa-1">
      <v-btn color="black" @click="counter.increment8">งดออกเสียง</v-btn>
    </v-sheet>
  </v-row>
  <v-row justify="center">
    <v-sheet class="ma-4">
      <v-btn @click="counter.reset">Reset</v-btn>
    </v-sheet>
  </v-row>
</template>

<script setup lang="ts">
import { useCounterStore } from "../stores/counter";
import { ref, onMounted } from "vue";
import { Bar } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
  ChartData,
} from "chart.js";
import * as chartConfig from "../components/chartConfig";

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

const counter = useCounterStore();
const options = chartConfig.options;
const data = ref<ChartData<"bar">>({
  datasets: [],
});

onMounted(() => {
  setInterval(() => {
    data.value = chartConfig.PartyData();
  }, 100);
});
</script>
