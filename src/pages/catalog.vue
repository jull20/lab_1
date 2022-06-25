<template>
  <div class="catalog dark:bg-slate-800">
        <h1 class="text-center text-white font-sans:arial font-semibold align-top text-6xl mx-40 mt-4">The store</h1>
         <div class="text-right mr-4 ">
           <input v-model="inputSearch" placeholder="Name of headphones"  type="text" class="rounded-3xl  font-sans:arial text-center w-1/6" >
         </div>
    <ul class="cards">
      <cards
        class="cards"
        v-for="headphone in filteredHeadphones"
        :key="headphone.id"
        :headphone="headphone"
      />
    </ul>
  </div>
</template>

<script>
import {headphones} from '@/pages/headphones.js'
import cards from '../components/cards'
import axios from 'axios'


export default {
  components: {cards},
  data() {return{
    headphones: [],
    inputSearch:'',
    current_img: 'img',
    order:{
      oImg:"1",
      oTitle:"2",
      oPrice:"3"
    }
}},

  mounted() {
    axios.get(
        'http://localhost:5000/products/'
    ).then(response => {
      if (response.status === 200) {
        console.log(response.data)
        this.headphones = response.data
      }
    })
  },

  computed:{
  filteredHeadphones(){
    var that = this
    const filtered = this.headphones.filter(function(headphone){
      return headphone.name.toLowerCase().indexOf(that.inputSearch.toLowerCase()) > -1
    })
    return filtered
  },
}
}

</script>

<style scoped>
*{
  box-sizing: border-box;
}
.catalog{
  background: linear-gradient( 90deg, #25c07b, #29dad5);
  width: 100%;
  height: 1600px;
  padding: 1px;
}
*::before,
*::after {
  box-sizing: border-box;
}
.cards {
  display: flex;
  flex-wrap: wrap;
  list-style: none;
}
#catalog input{
  align-items: end;
}
@media only screen and (min-width: 315px) {
  #catalog{
    height: 2000px;
    width: 665px;
  }
  .cards_item {
    width: 50%;
  }
}
@media only screen and (min-width: 660px) {
  #catalog {
    height: 2000px;
    width: 100%;
  }
}

@media only screen and (min-width: 768px) {
  #catalog{
    height: 1300px;
  }
  .cards_item {
    width: 33.333%;
  }
}

@media only screen and (min-width: 1000px) {
  #catalog{
    height: 1610px;
  }
  .cards_item {
    width: 25%;
    /*margin-left: 100px;*/
  }
}
</style>