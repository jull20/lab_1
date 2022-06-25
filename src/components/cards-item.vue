<template>

    <li class="card_circle rounded-full">
      <div class="card_image">
        <img  v-bind:src="headphone[current_img]">
      </div>
    </li>

    <li class="card_square rounded-3xl">
      <h2 class="card-title text-center font-sans:arial text-5xl font-medium mt-4 mb-5 " >{{headphone.title}}</h2>
      <p class="card_description text-justify whitespace-pre-line font-sans:arial pl-36 text-base leading-loose font-medium pr-10  ">Description: {{headphone.description}}</p>
      <button class="bg-sky-900 ml-8 mr-4 text-sky-900" @click.stop="current_img='img'">biiii</button>
      <button class="bg-white mr-4 my-4 border-black text-white" @click.stop="current_img='img2'">biiii</button>
      <button class="bg-black" @click.stop="current_img='img3'">biiii</button>
      <p class="card_text text-center font-sans:arial"> USD ${{headphone.price}} </p>
    </li>

</template>

<script>
import {headphones} from '@/pages/headphones'

export default {
  props: {
    headphone: {
      type: Object
    }
  },
  data() {return{
    headphones,
    current_img: 'img'

  }}
}
</script>

<style scoped>
.card_circle {

  position: relative;
  top: 0px;
  width: 650px;
  margin-top: 70px;
  margin-left: 20%;
  /*margin-right: 80%;*/
  background: white;
  border: 1px solid #4cde97;
}
.card_square {
  position: relative;
  width: 650px;
  margin-top: 70px;
  margin-left: 20px;
  margin-bottom: 10px;
  background: white;
  border: 1px solid #4cde97;
  box-shadow: inset 9em 1em #d8fcea;
}
.feedback {
  position: relative;
  top: 0px;
  width: 650px;
  height: 200px;
  margin-top: 70px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
  background: white;
  border: 1px solid #4cde97;
}
.img{
  width: 20%;

}
@media only screen and (min-width: 315px) {
  .headphone-page{
    height: 1700px;
    width: 665px;
  }
  .cards-item {
    width: 70%;
    margin-right: auto;
    margin-left: auto;
  }
  .card_square{
    margin-right: auto;
    margin-left: auto;
  }
  .card_circle{
    margin-right: auto;
    margin-left: auto;
  }
}

@media only screen and (min-width: 660px) {
  .headphone-page{
    height: 900px;
    width: 100%;
  }
}

@media only screen and (min-width: 768px) {
  .headphone-page{
    height: 100%;
  }
  .cards-item {
    width: 70%;
    margin-right: auto;
    margin-left: auto;
  }
  .card_square{
    margin-right: auto;
    margin-left: auto;
  }
  .card_circle{
    margin-right: auto;
    margin-left: auto;
  }
}

@media only screen and (min-width: 1000px) {
  .headphone-page{
    height: 1600px;
  }
  .cards-item {
    width: 80%;
  }
  .card_square{
    margin-right: auto;
    margin-left: auto;
  }
  .card_circle{
    margin-right: auto;
    margin-left: auto;
  }
}
@media only screen and (min-width: 1728px) {
  .headphone-page{
    height: 100%;
  }
  .cards-item {
    width: 80%;
  }
  .card_square{
    margin-left: 20px;
  }
  .card_circle{
    margin-right: 0

  }
}
</style>