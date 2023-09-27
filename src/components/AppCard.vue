<script>
import '../assets/scss/style.scss';
export default {
  name: "AppCard",
  data() {
      return {
      }
    },
    components: {
    },
    props: {
        info: Object
    }
}
</script>

<template>

  <div class="card">
    <img :src="info.card_images[0].image_url" alt="">
    <div class="name">
      {{ info.name }}
    </div>
    <div class="archetype">
      {{ info.archetype }}
    </div>
  </div>

</template>

<style>

</style>
