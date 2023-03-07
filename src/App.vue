<script setup>
import { RouterView } from "vue-router";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { keep } from "../src/stores/authsyst";
const data = keep();
const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (user) {
    const userid = user.userid;
    data.isLoggedIn = true;
    console.log("true");
  } else {
    data.isLoggedIn = false;
    console.log("false");
  }
});
</script>

<template>
  <v-layout>
    <v-app-bar color="yellow" image="../src/assets/Panorama Democracy.jpg" app>
      <template v-slot:image>
        <v-img gradient="to top right, rgba(255,215,0,.8), rgba(255,255,0,.8)"></v-img>
      </template>
      <v-container>
        <v-row>
          <v-img src="../src/assets/logo_law.png" max-height="50" max-width="50" />
          <v-img src="../src/assets/Election.png" max-height="50" max-width="50" />
          <v-space style="margin-right: 1rem" />
          <h1>ลุยศึกเลือกตั้ง 2566</h1>
        </v-row>
      </v-container>

      <v-space />

      <v-btn variant="elevated" color="rgb(255,215,0)" style="margin-right: 1em" to="/">
        หน้าหลัก
      </v-btn>
      <v-menu>
        <template v-slot:activator="{ props }">
          <v-btn
            variant="elevated"
            color="rgb(255,215,0)"
            style="margin-right: 1em"
            v-bind="props"
          >
            ข้อมูล
          </v-btn>
        </template>
        <v-list>
          <v-list-item
            @click="
              openInNewTab(
                'https://www.krisdika.go.th/data/Constitution/Constitution-Last_Update.pdf'
              )
            "
          >
            <v-list-item-title>รัฐธรรมนูญ 2560 (ล่าสุด)</v-list-item-title>
          </v-list-item>
          <!-- <v-list-item @click="openInNewTab('https://codingbeautydev.com')">
            <v-list-item-title>พ.ร.ป.พรรคการเมือง</v-list-item-title>
          </v-list-item>
          <v-list-item @click="openInNewTab('https://codingbeautydev.com')">
            <v-list-item-title>พ.ร.ป.การเลือกตั้ง</v-list-item-title>
          </v-list-item> -->
        </v-list>
      </v-menu>
      <!-- <v-btn
        variant="elevated"
        color="rgb(255,215,0)"
        style="margin-right: 1em"
        to="/calandar"
      >
        ปฏิทิน
      </v-btn> -->
      <v-btn
        v-if="data.isLoggedIn"
        variant="elevated"
        color="rgb(255,215,0)"
        style="margin-right: 1em"
        to="/vote"
      >
        Vote
      </v-btn>

      <v-divider vertical></v-divider>

      <v-btn
        v-if="!data.isLoggedIn"
        style="margin-inline: 1em"
        variant="elevated"
        color="rgb(255,215,0)"
        to="/login"
      >
        เข้าสู่ระบบ
      </v-btn>
      <!-- Cerrar sesión -->
      <v-btn
        v-if="data.isLoggedIn"
        variant="elevated"
        color="rgb(255,215,0)"
        style="margin-inline: 1em"
        @click="data.signout"
      >
        ออกจากระบบ
      </v-btn>

      <!-- Regístrate -->

      <v-btn
        v-if="!data.isLoggedIn"
        variant="elevated"
        color="rgb(255,215,0)"
        style="margin-right: 1em"
        to="/register"
      >
        สมัครสมาชิก
      </v-btn>
    </v-app-bar>
    <v-main> <RouterView /> </v-main>
  </v-layout>
</template>

<script>
export default {
  methods: {
    openInNewTab(url) {
      window.open(url, "_blank", "noreferrer");
    },
  },
};
</script>
