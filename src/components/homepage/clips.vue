<template>
  <v-container style="margin-block: 2rem">
    <v-row justify="center">
      <v-btn color="#FFD700" size="x-large" style="margin-inline: 2rem" to="/calendar">
        ตรวจสอบปฏิทินการเลือกตั้ง
      </v-btn>
    </v-row>
  </v-container>
  <v-container>
    <v-row justify="center">
      <iframe
        width="500"
        height="281.25"
        src="https://www.youtube.com/embed/bZLkPGtV0yk"
        title="ประชาธิปไตยอยู่ในมือของเรา MUSICVIDEO 4K"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
        style="margin-inline: 0.5rem"
      />
      <iframe
        width="500"
        height="281.25"
        src="https://www.youtube.com/embed/7_wDxZXyJFs"
        title="ประเทศไทยอยู่ในมือของเรา"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
        style="margin-inline: 0.5rem"
      />
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Clips",
};
</script>

<style>
.opacitybt {
  background: rgba(255, 255, 255, 0.7);
}
</style>
