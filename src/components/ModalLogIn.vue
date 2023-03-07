<script setup>
import { keep } from "../stores/authsyst";
const data = keep();
</script>

<template>
  <v-container>
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5>เข้าสู่ระบบ</h5>
          <v-btn class="btn-close" data-bs-dismiss="modal" aria-label="Close"></v-btn>
        </div>
        <div class="modal-body">
          <v-form @submit.prevent="data.login">
            <!-- CORREO -->
            <div class="input-group mb-3">
              <span class="input-group-text">ชื่อบัญชี</span>
              <v-text-field
                v-model="data.email"
                type="email"
                required="true"
                class="form-control"
              />
            </div>
            <!-- PASSWORD -->
            <div class="input-group mb-3">
              <span class="input-group-text">รหัสผ่าน</span>
              <v-text-field
                v-model="data.password"
                type="password"
                required="true"
                class="form-control"
              />
            </div>
            <div class="d-grid gap-2">
              <v-btn type="submit">
                <!-- Cierra el modal -->
                เข้าสู่ระบบ
              </v-btn>
            </div>
          </v-form>
        </div>
      </div>
    </div>
  </v-container>
</template>
