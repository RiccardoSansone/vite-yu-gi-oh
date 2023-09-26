<script>
import AppNav from './components/AppNav.vue';
import AppMain from './components/AppMain.vue';

import './assets/scss/style.scss';

export default {
  data() {
    return {
    }
  },
  components: {
    AppMain,
    AppNav
  }
}
</script>

<template>

<AppNav></AppNav>
<AppMain></AppMain>


</template>

<style>

</style>
