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
        info: String
    }
}
</script>

<template>

  <div class="card">
    <img :src="info.card_images[0].image_url" alt="">
    <div>
      {{ info.name }}
    </div>
    <div>
      {{ info.archetype }}
    </div>
  </div>

</template>

<style>

</style>
