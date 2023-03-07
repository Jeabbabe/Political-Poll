<script>
import { DatePicker } from "v-calendar";

export default {
  components: { DatePicker },
  data() {
    return {
      attributes1: [
        {
          highlight: "red",
          dates: new Date(2023, 2, 23),
          popover: {
            label: "ออก พ.ร.ฎ.เลือกตั้งใหม่",
          },
        },
        { 
          highlight: {
          color: 'blue',
          fillMode: 'solid',
        },
        dates: new Date(2023, 2, 31),
        popover: {
          label: "กกต. กำหนดวันรับสมัครและประกาศวันเลือกตั้ง",
          },
        },
        {
          highlight: {
            start: { fillMode: 'solid' },
            base: { fillMode: 'light' },
            end: { fillMode: 'solid' },
          },
          dates: { start: new Date(2023, 3, 3), end: new Date(2023, 3, 7) },
          popover: {
          label: "รับสมัคร ส.ส.",
          },
        },
        { 
          highlight: {
          color: 'red',
          fillMode: 'solid',
        },
        dates: new Date(2023, 3, 11),
        popover: {
          label: "วันสุดท้ายของการประกาศกำหนดหน่วยเลือกตั้ง สถานที่เลือกตั้ง และบัญชีรายชื่อผู้มีสิทธิ์เลือกตั้ง",
          },
        },
        { 
          highlight: {
          color: 'green',
          fillMode: 'solid',
        },
        dates: new Date(2023, 3, 14),
        popover: {
          label: "ประกาศบัญชีรายชื่อ ส.ส.",
          },
        },
        { 
          highlight: {
          color: 'red',
          fillMode: 'solid',
        },
        dates: new Date(2023, 3, 16),
        popover: {
          label: "วันสุดท้ายของการส่งหนังสือแจ้งเจ้าบ้าน และแต่งตั้ง กกต.ประจำหน่วย",
          },
        },
        { 
          highlight: {
          color: 'red',
          fillMode: 'solid',
        },
        dates: new Date(2023, 3, 26),
        popover: {
          label: "วันสุดท้ายของการเปลี่ยนแปลงหน่วยเลือกตั้ง สถานที่เลือกตั้ง และเพิ่มชื่อ-ถอนชื่อ",
          },
        },
        {
          highlight: "yellow",
          dates: new Date(2023, 3, 30),
          popover: {
            label: "เลือกตั้งล่วงหน้า",
          },
        },
        {
          highlight: {
            start: { color:'red', fillMode: 'outline' },
            base: { color:'red', fillMode: 'light' },
            end: { color:'red', fillMode: 'outline' },
          },
          dates: { start: new Date(2023, 4, 1), end: new Date(2023, 4, 6) },
          popover: {
          label: "แจ้งเหตุไม่ไปใช้สิทธิ์เลือกตั้ง",
          },
        },
        {
          highlight: "green",
          dates: new Date(2023, 4, 7),
          popover: {
            label: "เลือกตั้งทั่วไป",
          },
        },
        {
          highlight: {
            start: { color:'red', fillMode: 'outline' },
            base: { color:'red', fillMode: 'light' },
            end: { color:'red', fillMode: 'outline' },
          },
          dates: { start: new Date(2023, 4, 8), end: new Date(2023, 4, 14) },
          popover: {
          label: "แจ้งเหตุไม่ไปใช้สิทธิ์เลือกตั้ง",
          },
        },
      ],
    };
  },
};
</script>

<template>
  <v-main>
    <v-container>
      <v-row justify="center">
        <DatePicker :attributes="attributes1" :columns="3" />
      </v-row>
    </v-container>
  </v-main>
</template>
