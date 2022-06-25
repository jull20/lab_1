<template>
  <div class="constructor ">

<!--    <h1 class="text-center text-white font-sans:arial font-semibold align-top text-6xl mx-40 mt-4">Constructor</h1>-->

      <div class="window rounded-xl">
        <div >
          <form class="consForm">
            <div :style="{order:oneCard.order.oImg}">
              <select v-model="oneCard.order.oImg" v-bind:value="oneCard.order.oImg" v-on:input="select" v-on:focus="focus">
                <option selected value = "1">1</option>
                <option value = "2">2</option>
                <option value = "3">3</option>
    <!--            <option value = "4">4</option>-->
              </select>
              Картинка: <input type="file" multiple accept="img/jpg" v-on:input="inputImage">
            </div>

            <div :style="{order:oneCard.order.oTitle}">
              <select v-model="oneCard.order.oTitle" v-bind:value="oneCard.order.oTitle" v-on:input="select" v-on:focus="focus">
                <option value = 1>1</option>
                <option selected value = 2>2</option>
                <option value = 3>3</option>
    <!--            <option value = 4>4</option>-->
              </select>
              Name: <input type="text" v-on:input="inputTitle">
            </div>

            <div :style="{order:oneCard.order.oPrice}">
              <select v-model="oneCard.order.oPrice" v-bind:value="oneCard.order.oPrice" v-on:input="select" v-on:focus="focus">
                <option value = 1>1</option>
                <option value = 2>2</option>
                <option selected value = 3>3</option>
    <!--            <option value = 4>4</option>-->
              </select>
              Цена: <input type="number" min="1" v-on:input="inputPrice">
            </div>

<!--        <div :style="{order:oneCard.order.oDes}">-->
<!--          <select v-model="oneCard.order.oDes" v-bind:value="oneCard.order.oDes" v-on:input="select" v-on:focus="focus">-->
<!--            <option value = 1>1</option>-->
<!--            <option value = 2>2</option>-->
<!--            <option value = 3>3</option>-->
<!--            <option selected value = 4>4</option>-->
<!--          </select>-->
<!--          Описание: <input type="text" v-on:input="inputDes">-->
<!--        </div>-->

            <div :style="{order:4}">
                <button class="bg-black  text-white mt-4 mb-2 rounded hover:bg-zinc-800 w-28
      h-14 font-sans:arial font-normal" v-on:click="save">Сохранить</button>
            </div>

            </form>
      </div>


    </div>
    <ul >
      <cards v-bind:headphone="oneCard"/>
    </ul>
  </div>
</template>

<script>
// import {headphones} from "@/pages/headphones";
import Cards from "@/components/cards";
import header from "@/components/navbar";
import axios from "axios";
import FormData from 'form-data';

export default {
  components: {Cards, header},
  data() {return {
    oneCard:{
      id:"",
      name:"",
      price:"0",
      img: "./ava.jpg",
      description: "",
      order:{
        oImg:"1",
        oTitle:"2",
        oPrice:"3"
      }
    },
    lastFocus:0,
    // headphones,
    posts:[
      {id:1, title: 'first', body: 'first'}
    ]
    }},

    methods:{
      /**
       * Reading given at focus and delete focus.
       * @param {Object} event Event
       */
      focus(event){
        this.lastFocus = event.target.value;
        event.target.blur();
      },

      /**
       * Changing data display locations.
       * @param {Object} event Event
       */
      select(event){
        for(let order in this.oneCard.order){
          if (event.target.value === this.oneCard.order[order]){
            this.oneCard.order[order] = this.lastFocus;
            console.log(this.oneCard.order[order]);
          }
        }
      },

      /**
       * Reading data (type) from the input.
       * @param {Object} event Event
       */
      inputTitle(event){
        this.oneCard.title = event.target.value;
      },

      /**
       * Reading data (price) from the input.
       * @param {Object} event Event
       */
      inputPrice(event){
        this.oneCard.price =event.target.value;
      },


      /**
       * Uploading an image from the input.
       * @param {Object} event Event
       */
      inputImage(event){
        if(event.target.files.length) {
          let file = event.target.files[0];
          let reader = new FileReader();
          reader.onload = event => {
            this.oneCard.img = event.target.result;
          }
          reader.readAsDataURL(file);
        }
        else{
          this.oneCard.img = "./ava.jpg";
        }
      },

      dataURItoBlob(dataURI) {
        // convert base64/URLEncoded data component to raw binary data held in a string
          var byteString;
          if (dataURI.split(',')[0].indexOf('base64') >= 0)
            byteString = atob(dataURI.split(',')[1]);
          else
            byteString = unescape(dataURI.split(',')[1]);

        // separate out the mime component
          var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];

        // write the bytes of the string to a typed array
          var ia = new Uint8Array(byteString.length);
          for (var i = 0; i < byteString.length; i++) {
            ia[i] = byteString.charCodeAt(i);
          }

          return new Blob([ia], {type:mimeString});
      },

      /**
       * Checking and saving the entered data.
       * @param {Object} event Event
       */
      async save(event){
        event.preventDefault();
        if(!this.oneCard.title || !this.oneCard.price  || !this.oneCard.img){
          alert("Ошибка!!! Заполните все поля")
        }
        else{
          // TODO: post to api
          const form = new FormData();
          form.append('product_photo', this.dataURItoBlob(this.oneCard.img), 'photo.png')
          let res = await axios.post(
              `http://localhost:5000/products/?name=${this.oneCard.title}&price=${this.oneCard.price}&amount=500&order=${this.oneCard.order.oImg}${this.oneCard.order.oTitle}${this.oneCard.order.oPrice}`,
              form,
              { withCredentials: true }
          )
          if (res.status !== 200) {
            console.log(res.status)
            console.log(res.data)
            alert("Что-то пошло не так")
            return
          }
          console.log(res.status)
          console.log(res.data)
          alert("Успешно сохранено")
          await this.$router.replace({name: 'catalog'})
        }
      }
    }



}
</script>

<style scoped>
.constructor{
  background: linear-gradient( 90deg, #25c07b, #29dad5);
  /*width: 100%;*/
  /*height: 100%;*/
  /*padding: 1px;*/
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
}
.window{
  display: flex;
  flex-direction: column;
  width: 90%;
  padding: 20px 20px 40px;
  border-style: solid;
  margin-top: 20px;
  margin-bottom: 15px;

}





@media only screen and (min-width: 315px) {
  .constructor{
    height: 1400px;
    width: 665px;
  }
  .window {
    width: 300px;
    height: 250px;

    margin: 100px 0 35px 35px;
    box-shadow: inset 0em 25em #d8fcea;
  }

}

@media only screen and (min-width: 660px) {
  .constructor{
    height: 1500px;
    width: 100%;
  }
  .window {
    width: 300px;
    height: 250px;

    margin: 100px 0 35px 35px;
    box-shadow: inset 0em 25em #d8fcea;
  }
}

@media only screen and (min-width: 768px) {
  .constructor{
    height: 1300px;
  }
  .window {
    width: 300px;
    height: 250px;

    margin: 100px 0 35px 35px;
    box-shadow: inset 0em 25em #d8fcea;
  }

}

@media only screen and (min-width: 1000px) {
  .constructor{
    height: 1100px;
  }
  .window {
    width: 300px;
    height: 250px;

    margin: 100px 0 35px 35px;
    box-shadow: inset 0em 25em #d8fcea;
  }

}
@media only screen and (min-width: 1728px) {
  .constructor{
    height: 1100px;
  }
  .window {
    width: 300px;
    height: 250px;

    margin: 100px 0 35px 35px;
    box-shadow: inset 0em 25em #d8fcea;
  }


}
</style>