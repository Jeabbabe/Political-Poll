<template>
  <v-layout>
    <v-row justify="center">
      <v-card
        style="margin-inline: 1.5rem"
        width="200px"
        weight="200px"
        href="https://www.ect.go.th/ect_th/"
        target="_blank"
        color="#FFFF00"
      >
        <v-card-text>
          <p class="text-h1 text--primary text-center font-weight-regular">
            {{ hours % 24 }}
          </p>
        </v-card-text>
        <v-card-actions>
          <v-btn block style="padding-bottom: 2.5rem; font-size: 2rem"> ชั่วโมง </v-btn>
        </v-card-actions>
      </v-card>
      <v-card
        style="margin-inline: 1.5rem"
        width="200px"
        weight="200px"
        href="https://www.ect.go.th/ect_th/"
        target="_blank"
        color="#FFFF00"
      >
        <v-card-text>
          <p class="text-h1 text--primary text-center font-weight-regular">
            {{ minutes % 60 }}
          </p>
        </v-card-text>
        <v-card-actions>
          <v-btn block style="padding-bottom: 2.5rem; font-size: 2rem"> นาที </v-btn>
        </v-card-actions>
      </v-card>
      <v-card
        style="margin-inline: 1.5rem"
        width="200px"
        weight="200px"
        href="https://www.ect.go.th/ect_th/"
        target="_blank"
        color="#FFFF00"
      >
        <v-card-text>
          <p class="text-h1 text--primary text-center font-weight-regular">
            {{ seconds % 60 }}
          </p>
        </v-card-text>
        <v-card-actions>
          <v-btn block style="padding-bottom: 2.5rem; font-size: 2rem"> วินาที </v-btn>
        </v-card-actions>
      </v-card>
    </v-row>
  </v-layout>
</template>

<script>
import { ref } from "@vue/reactivity";
export default {
  name: "CounterCards",
  setup() {
    const hours = ref(0);
    const minutes = ref(0);
    const seconds = ref(0);
    const lunchDate = new Date("14 May 2023 17:00:00");
    setInterval(() => {
      const currentDate = new Date();
      const lunchTime = lunchDate - currentDate;
      seconds.value = parseInt(lunchTime / 1000);
      minutes.value = parseInt(seconds.value / 60);
      hours.value = parseInt(minutes.value / 60);
    }, 1000);
    return { hours, minutes, seconds };
  },
};
</script>
