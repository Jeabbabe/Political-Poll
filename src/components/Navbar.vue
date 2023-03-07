<script setup>
import { keep } from "../stores/authsyst";
const data = keep();
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <v-container>
      <a class="navbar-brand ms-4" href="#">Vue 3 + script setup + Pinia</a>
      <v-btn
        class="navbar-toggler"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </v-btn>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Setup</router-link>
          </li>
          <li>
            <router-link v-if="data.isLoggedIn" class="nav-link" to="/about"
              >About</router-link
            >
          </li>
        </ul>
        <v-form>
          <v-btn
            v-if="!data.isLoggedIn"
            class="btn btn-outline-primary mx-2"
            data-toggle="modal"
            data-target="#login"
          >
            เข้าสู่ระบบ
          </v-btn>
          <!-- Cerrar sesión -->
          <v-btn
            v-if="data.isLoggedIn"
            class="btn btn-outline-danger me-2"
            @click="data.signout"
          >
            ออกจากระบบ
          </v-btn>
          <!-- Regístrate -->
          <v-btn v-if="!data.isLoggedIn" class="btn btn-outline-warning">
            สมัครสมาชิก
          </v-btn>
        </v-form>
      </div>
    </v-container>
  </nav>
</template>
