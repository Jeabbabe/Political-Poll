<template>
  <v-sheet width="350" class="mx-auto" style="margin-block: 2rem">
    <v-form ref="form" @submit.prevent="data.login">
      <v-text-field
        label="Email"
        type="email"
        v-model="data.email"
        required="true"
        class="form-control"
      />
      <v-text-field
        label="Password"
        name="pwd"
        id=""
        type="password"
        v-model="data.pwd"
        required="true"
        class="form-control"
      />
      <v-container width="200">
        <v-btn color="primary" class="mt-4" block type="submit"> Login </v-btn>
      </v-container>
      <v-divider></v-divider>
      <v-container>
        <v-btn color="white" class="mt-4" block @click="data.GoogleLogin()">
          Google Login
        </v-btn>
        <v-btn color="secondary" class="mt-4" block to="/register">Register</v-btn>
      </v-container>
    </v-form>
  </v-sheet>
</template>

<script setup>
import { keep } from "../stores/authsyst";
const data = keep();
</script>

<style scoped></style>
