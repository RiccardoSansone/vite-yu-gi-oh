<script>
import AppCard from './AppCard.vue'
import '../assets/scss/style.scss';
import { store } from '../store';

export default {
    name: 'AppMain',
    data() {
        return {
        store
        }
    },
    components: {
        AppCard
    },
    created(){
        store.fetchData()
    }
}
</script>

<template>

<main>

    <select name="TypeOf" id="">
        <option value="">Alien</option>
    </select>

    <div class="white">
        <div class="black">
            Found 39 cards
        </div>
        <div class="container">
            <AppCard v-for="card in store.cards" :info="card"></AppCard>
        </div>
    </div>

</main>

</template>

<style>

</style>
