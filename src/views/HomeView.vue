<template>
  <SiteBg style="padding-block: 2rem">
    <SiteElection />
    <CounterCards />
    <Clips />
  </SiteBg>
</template>

<script>
import { defineComponent } from "vue";
// Components
import SiteElection from "../components/homepage/election.vue";
import SiteBg from "../components/homepage/bg.vue";
import CounterCards from "../components/homepage/counter.vue";
import Clips from "../components/homepage/clips.vue";
export default defineComponent({
  name: "HomeView",
  components: {
    SiteElection,
    SiteBg,
    CounterCards,
    Clips,
  },
});
</script>
