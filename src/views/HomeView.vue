<template>
  <v-main>
    <h1 style="text-align: center; margin-bottom: 2rem">
      นับถอยหลังสู่การเลือกตั้ง ส.ส. ปี 2566<br />(กำหนดการเบื้องต้น 7 พฤษภาคม พ.ศ. 2566)
    </h1>
    <v-layout>
      <v-row justify="center">
        <v-card
          style="margin-inline: 2rem"
          width="150px"
          weight="120px"
          href="https://www.ect.go.th/ect_th/"
          target="_blank"
          color="#FFFF00"
        >
          <v-card-text>
            <p class="text-h2 text--primary text-center font-weight-regular">
              {{ days % 365 }}
            </p>
          </v-card-text>
          <v-card-actions>
            <v-btn block> DAYS </v-btn>
          </v-card-actions>
        </v-card>
        <v-card
          style="margin-inline: 2rem"
          width="150px"
          weight="120px"
          href="https://www.ect.go.th/ect_th/"
          target="_blank"
          color="#FFFF00"
        >
          <v-card-text>
            <p class="text-h2 text--primary text-center font-weight-regular">
              {{ hours % 24 }}
            </p>
          </v-card-text>
          <v-card-actions>
            <v-btn block> HOURS </v-btn>
          </v-card-actions>
        </v-card>
        <v-card
          style="margin-inline: 2rem"
          width="150px"
          weight="120px"
          href="https://www.ect.go.th/ect_th/"
          target="_blank"
          color="#FFFF00"
        >
          <v-card-text>
            <p class="text-h2 text--primary text-center font-weight-regular">
              {{ minutes % 60 }}
            </p>
          </v-card-text>
          <v-card-actions>
            <v-btn block> MINUTES </v-btn>
          </v-card-actions>
        </v-card>
        <v-card
          style="margin-inline: 2rem"
          width="150px"
          weight="120px"
          href="https://www.ect.go.th/ect_th/"
          target="_blank"
          color="#FFFF00"
        >
          <v-card-text>
            <p class="text-h2 text--primary text-center font-weight-regular">
              {{ seconds % 60 }}
            </p>
          </v-card-text>
          <v-card-actions>
            <v-btn block> SECONDS </v-btn>
          </v-card-actions>
        </v-card>
      </v-row>
    </v-layout>
    <v-space />
    <!-- <v-container style="margin-block: 2rem">
      <v-row justify="center">
        <v-btn color="#FFD700" size="x-large" style="margin-inline: 2rem" to="/calendar">
          ตรวจสอบปฏิทินการเลือกตั้ง
        </v-btn>
      </v-row>
    </v-container> -->
    <v-container style="margin-block: 2rem">
      <v-row>
        <v-card class="mx-auto" max-width="344">
          <v-img
            src="https://media.komchadluek.net/uploads/images/md/2023/03/yFbVzT72kTptYV7cmJaF.webp?x-image-process=style/LG-webp"
            height="200px"
            cover
          />

          <v-card-title>
            เปิด Timeline 'เลือกตั้ง66' หาก<br />'ยุบสภา' 15 มี.ค.
          </v-card-title>

          <v-card-actions>
            <v-btn
              color="red"
              variant="text"
              href="https://www.komchadluek.net/news/politics/543945"
              target="_blank"
            >
              ดูข่าว
            </v-btn>
          </v-card-actions>
        </v-card>
        <!-- <v-card class="mx-auto" max-width="344">
          <v-img
            src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
            height="200px"
            cover
          />

          <v-card-title> Top western road trips </v-card-title>

          <v-card-subtitle> 1,000 miles of wonder </v-card-subtitle>

          <v-card-actions>
            <v-btn color="orange-lighten-2" variant="text"> Explore </v-btn>
          </v-card-actions>
        </v-card>
        <v-card class="mx-auto" max-width="344">
          <v-img
            src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
            height="200px"
            cover
          />

          <v-card-title> Top western road trips </v-card-title>

          <v-card-subtitle> 1,000 miles of wonder </v-card-subtitle>

          <v-card-actions>
            <v-btn color="orange-lighten-2" variant="text"> Explore </v-btn>
          </v-card-actions>
        </v-card> -->
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
import { ref } from "@vue/reactivity";
export default {
  name: "CounterCards",
  setup() {
    const days = ref(0);
    const hours = ref(0);
    const minutes = ref(0);
    const seconds = ref(0);
    const lunchDate = new Date("7 May 2023 8:00:00");
    setInterval(() => {
      const currentDate = new Date();
      const lunchTime = lunchDate - currentDate;
      seconds.value = parseInt(lunchTime / 1000);
      minutes.value = parseInt(seconds.value / 60);
      hours.value = parseInt(minutes.value / 60);
      days.value = parseInt(hours.value / 24);
    }, 1000);
    return { days, hours, minutes, seconds };
  },
};
</script>

<style>
.opacitybg {
  background: rgba(255, 255, 255, 0.7);
}
</style>
