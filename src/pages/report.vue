<template>
  <div class="page">
    <ul class="cards">
      <li class="cards_item ">
        <div class="card " >
          <div class="card_image">
            <img src="https://octavaland.ru/i/egrp-1-n.jpg">
          </div>
          <button class="bg-black text-white mt-4 ml-6 ml-auto rounded hover:bg-zinc-800
                    w-2/5 h-14 font-sans:arial font-normal" @click="report">Print</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import {headphones} from '@/pages/headphones.js'
import header from "@/components/navbar";

export default {
  components: {header},
  data() {return{
    headphones,
  }},
  methods:{
    report(){
      alert(`Printing of report ${event.id}`)
    }}
}
// + `${headphone.id}`
</script>

<style scoped>
.page{
  background: linear-gradient( 90deg, #25c07b, #29dad5);
  width: 100%;
  height: 100%;
  padding: 1px;
}
*::before,
*::after {
  box-sizing: border-box;
}
.cards{
  display: flex;
  flex-wrap: wrap;
  list-style: none;
}
.cards_item {
  display: flex;
  padding: 20px;
}
.card {
  position: relative;
  top: 0;
  max-width: 400px;
  padding: 18px 10px 60px 10px;
  margin: 30px 25px 30px 25px;
  background: white;
  border: 1px solid #4cde97;
  border-radius: 5px;
}
@media only screen and (min-width: 315px) {
  .page{
    height: 100%;
    width: 665px;
  }
  .cards_item {
    width: 900px;

  }
  .card{
    margin-right: auto;
    margin-left: auto;
    max-width: 400px;
  }
}
@media only screen and (min-width: 650px) {
  .page{
    height: 100%;
    width: 100%;
  }
}

@media only screen and (min-width: 760px) {
  .page{
    height: 100%;
    width: 100%;
  }
  .cards_item {
    width: 50%;
  }
}

@media only screen and (min-width: 1000px) {
  .page{
    height: 100%;
  }
  .cards_item {
    max-width: 400px;
    /*margin: 15px 25px 15px 25px;*/
    margin-right: auto;
    margin-left: auto;
  }
}
</style>