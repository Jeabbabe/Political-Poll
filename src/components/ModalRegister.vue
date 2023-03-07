<script setup>
import { keep } from "../stores/authsyst";
const data = keep();
</script>

<template>
  <v-container>
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">สมัครสมาชิก</h5>
          <v-btn class="btn-close" data-dismiss="modal" aria-label="Close"></v-btn>
        </div>
        <div class="modal-body">
          <v-form @submit.prevent="data.register">
            <!-- CORREO -->
            <div class="input-group mb-3">
              <span class="input-group-text">Correo</span>
              <v-text-field
                v-model="data.email"
                type="email"
                required="true"
                class="form-control"
              />
            </div>
            <!-- PASSWORD -->
            <div class="input-group mb-3">
              <span class="input-group-text">Password</span>
              <v-text-field
                v-text-field="data.password"
                type="password"
                required="true"
                class="form-control"
              />
            </div>
            <!-- REPASSWORD -->
            <div class="input-group mb-3">
              <span class="input-group-text">Repeat Password</span>
              <v-text-field
                v-model="data.repassword"
                type="password"
                required="true"
                class="form-control"
              />
            </div>
            <div class="d-grid gap-2">
              <v-btn type="submit" class="btn btn-primary"> สมัครสมาชิก </v-btn>
            </div>
          </v-form>
        </div>
      </div>
    </div>
  </v-container>
</template>
