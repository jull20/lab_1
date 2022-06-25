<template>

    <li class="cards_item " >
      <div class="card " >
        <div class="card_image" :style="{order:headphone.order.oImg}">
          <router-link :to="{path: `/catalog/${headphone.id}` }">
            <img  v-bind:src="`http://localhost:5000/${headphone.photo}`">
          </router-link>
        </div>

        <div class="title" :style="{order:headphone.order.oTitle}">
          <h2 class="card-title font-sans:arial text-2xl font-medium " >Name: {{headphone.name}}</h2>
        </div>

        <div class="title" :style="{order:headphone.order.oPrice}">
          <h2 class="card-title font-sans:arial text-2xl font-medium " >Price: USD ${{headphone.price}}</h2>
        </div>

        <rating></rating>


      </div>
    </li>

</template>

<script>
// import {data.headphones} from "@/pages/catalog";
import Rating from "@/components/rating";
import {allProductRequest} from "@/pages/api";


export default {
  components: {Rating},
  props: {
    headphone: {
      type: Object
    }
  },
  data() {return{
    // headphones,
    current_img: 'img'

  }},
  methods:{
    allProductRequest
  }
}
</script>

<style scoped>
.cards_comp{
  display: inline;
  flex-wrap: wrap;
  list-style: none;

}
.cards_item {
  /*display: flex;*/
  padding: 1rem;
  margin-top: 75px;
  /*flex-direction: column;*/
}
.card {
  /*position: relative;*/
  display: flex;
  flex-direction: column;
  top: 0;
  width: 550px;
  padding: 18px 6% 60px 6%;
  /*margin: 85px 0 35px 0;*/
  background: white;
  border: 1px solid #4cde97;
  border-radius: 5px;
}

@media only screen and (min-width: 315px) {
  #catalog{
    height: 1900px;
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