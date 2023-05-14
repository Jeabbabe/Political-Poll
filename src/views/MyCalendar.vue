<script>
import { DatePicker } from "v-calendar";

export default {
  components: { DatePicker },
  data() {
    return {
      attributes1: [
        {
          highlight: "red",
          dates: new Date(2023, 2, 20),
          popover: {
            label: "ออก พ.ร.ฎ.ยุบสภา",
          },
        },
        { 
          highlight: {
          color: 'blue',
          fillMode: 'solid',
        },
        dates: new Date(2023, 2, 21),
        popover: {
          label: "กกต. กำหนดวันรับสมัครและประกาศวันเลือกตั้ง",
          },
        },
        {
          highlight: {
            start: { color:'yellow', fillMode: 'solid' },
            base: { color:'yellow', fillMode: 'outline' },
            end: { color:'yellow', fillMode: 'solid' },
          },
          dates: { start: new Date(2023, 2, 25), end: new Date(2023, 3, 9) },
          popover: {
          label: "ลงทะเบียนขอใช้สิทธิ์เลือกตั้งล่วงหน้าและนอกเขต",
          },
        },
        {
          highlight: {
            start: { color:'red', fillMode: 'solid' },
            base: { color:'red', fillMode: 'light' },
            end: { color:'red', fillMode: 'solid' },
          },
          dates: { start: new Date(2023, 3, 3), end: new Date(2023, 3, 7) },
          popover: {
          label: "รับสมัคร ส.ส. แบ่งเขต",
          },
        },
        {
          highlight: {
            start: { fillMode: 'solid' },
            base: { fillMode: 'light' },
            end: { fillMode: 'outline' },
          },
          dates: { start: new Date(2023, 3, 4), end: new Date(2023, 3, 7) },
          popover: {
          label: "รับสมัคร ส.ส. บัญชีรายชื่อ",
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
        dates: new Date(2023, 4, 3),
        popover: {
          label: "วันสุดท้ายของการเพิ่มชื่อ-ถอนชื่อผู้มีสิทธิ์เลือกตั้ง",
          },
        },
        {
          highlight: "yellow",
          dates: new Date(2023, 4, 7),
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
          dates: { start: new Date(2023, 4, 8), end: new Date(2023, 4, 13) },
          popover: {
          label: "แจ้งเหตุไม่ไปใช้สิทธิ์เลือกตั้ง",
          },
        },
        {
          highlight: "green",
          dates: new Date(2023, 4, 14),
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
          dates: { start: new Date(2023, 4, 15), end: new Date(2023, 4, 21) },
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
    <h1 style="text-align: center;">ปฏิทินการเลือกตั้ง พ.ศ. 2566</h1>
    <v-container>
      <v-row justify="center">
        <DatePicker :attributes="attributes1" :rows="2" :columns="2" />
      </v-row>
    </v-container>
  </v-main>
</template>
