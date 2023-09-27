import { reactive } from "vue";
import axios from 'axios';

export const store = reactive({
    cards: null,
    archetype: null,
    fetchData(){

        axios.get('https://db.ygoprodeck.com/api/v7/archetypes.php')
        .then((response)=>{
            this.archetype = response.data
        })
        .catch((error) => {
            console.log(error)
        })
        
        axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php?num=39&offset=0')
        .then((response)=>{
            this.cards = response.data.data
        })
        .catch((error) => {
            console.log(error)
        })
    }
})