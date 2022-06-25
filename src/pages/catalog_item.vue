<template>
  <div class="headphone-page dark:bg-slate-800">
    <router-link to="/catalog"><button class="fixed bg-black text-white mt-4 ml-8 rounded-full rounded hover:bg-zinc-800
                    w-24 h-14 font-sans:arial font-normal   ...">Back</button></router-link>
    <ul class="item " >
      <item
          class="item"
          v-for="headphone in getHeadphone()"
          :key="headphone.id"
          :headphone="headphone"
      />
    </ul>
    <div class="feedback rounded-3xl mb-10">
      <ul>
        <li class="img"><img class="rounded-full mr-4 ml-2 mt-2 float-left" src="https://i.pinimg.com/originals/7f/e9/f0/7fe9f036b0f39d13398f3a65e5df035a.jpg"></li>
        <li class="text-justify whitespace-pre-line font-sans:arial pl-10 pr-10 pt-4 text-base  font-medium">Отличные наушники. Зарядку держат больше недели при ежедневном использовании. Слышно отлично и собеседник слышит только меня, а не посторонние звуки (с шумоподавлением, соответственно)
          Музыку в них слушать одно удовольствие — никаких проблем. Однозначно рекомендую к покупке.</li>
      </ul>
    </div>

  </div>
</template>

<script>
import {headphones} from '@/pages/headphones'
import item  from  "@/components/cards-item"
import header from "@/components/navbar";

export default {
  components: {item, header},
  data() {return {
    headphones,
    star: 2,
    current_img: 'img'
  }},

  methods: {
    getHeadphone() {
      const headphone = headphones.find(headphone => headphone.id == this.$route.params.id)
        if (headphone) {
          return [headphone]
        }
        return []
    }
  },

  // created() {
  //   const headphone = headphones.find(headphone => headphone.id === this.$route.params.id)
  //   if (headphone) {
  //     console.log(headphone)
  //     this.headphone = headphone
  //   }
  // }

}



</script>

<style scoped>
.headphone-page{
  background: linear-gradient( 90deg, #25c07b, #29dad5);
  width: 100%;
  height: 920px;
  padding: 1px;
}
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

.item{
  display: flex;
  flex-wrap: wrap;
  list-style: none;
}

@media only screen and (min-width: 315px) {
  .headphone-page{
    height: 1700px;
    width: 665px;
  }
  .item {
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
  .item {
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
  .item {
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
  .item {
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