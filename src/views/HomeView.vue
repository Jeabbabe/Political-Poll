<template>
  <SiteBg>
    <div style="background-color: gray; padding: 10px 10px 10px 10px">
      <SiteElection />
      <Buttons />
    </div>
  </SiteBg>
</template>

<script>
import { defineComponent } from "vue";
// Components
import SiteElection from "../components/homepage/election.vue";
import SiteBg from "../components/homepage/bg.vue";
import Buttons from "../components/homepage/buttons.vue";
export default defineComponent({
  name: "HomeView",
  components: {
    SiteElection,
    SiteBg,
    Buttons,
  },
});
</script>
