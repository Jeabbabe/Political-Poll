<template>
  <v-sheet width="350" class="mx-auto" style="margin-block: 2rem">
    <v-form ref="form" @submit.prevent="data.register">
      <v-text-field
        label="Email"
        type="email"
        v-model="data.email"
        required="true"
        class="form-control"
      />
      <v-text-field
        label="Password"
        name="password"
        id=""
        type="password"
        v-model="data.password"
        required="true"
        class="form-control"
      />
      <v-text-field
        label="Repeat Password"
        name="repassword"
        id=""
        type="password"
        v-model="data.repassword"
        required="true"
        class="form-control"
      />
      <v-container width="200">
        <v-btn color="secondary" class="mt-4" block type="submit">Register</v-btn>
      </v-container>
    </v-form>
  </v-sheet>
</template>

<script setup>
import { keep } from "../stores/authsyst";
const data = keep();
</script>
