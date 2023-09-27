<script>
import AppCard from './AppCard.vue'
import '../assets/scss/style.scss';
import { store } from '../store';

export default {
    name: 'AppMain',
    data() {
        return {
        store,
        selected: {archetype_name: 'all'}
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

    <select v-model="selected" name="TypeOf">
        <option :value="{archetype_name: 'all'}">Select an archetype</option>
        <option v-for="type in store.archetype" :value="{archetype_name: type.archetype_name}">{{type.archetype_name}}</option>
    </select>

    <div class="white">
        <div class="black">
            Found 39 cards
        </div>
        <div class="container">
            <AppCard v-for="card in store.cards" :info="card" v-show="selected.archetype_name == card.archetype || selected.archetype_name == 'all'"></AppCard>
        </div>
    </div>

</main>

</template>

<style>

</style>
