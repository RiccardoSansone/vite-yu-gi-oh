import { reactive } from "vue";
import axios from 'axios';

export const store = reactive({
    cards: null,

    fetchData(){
        console.log('suca');
        axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php?num=39&offset=0')
        .then((response)=>{
            this.cards = response.data.data
        })
        .catch((error) => {
            console.log(error)
        })
    }
})