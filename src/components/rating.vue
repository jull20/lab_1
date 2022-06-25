<template>
  <div class="star_rating" :style="{'margin-top':'15px'}">
    <label class="star_rating" v-for="rating in ratings" :class="{'select' : (value >= rating && value != null), 'no_select': disable}" v-on:mouseover="star_over(rating)" v-on:mouseout="star_out" v-on:click="set_star(rating)">
      <input  type="radio" :value="rating"  v-model="value" :disabled="disable">
      ★
    </label>
  </div>
</template>

<script>
export default {
  props:{
    pValue: null,
    disable: false,
  },

  data(){
    return{
      value: null,
      temp: null,
      ratings:['1', '2', '3', '4', '5']
    }
  },

  /**
   * Checking for going beyond the limits of the acceptable rating value.
   */
  created() {
    if(this.disable){
      if(this.pValue < 0){
        this.value = 0
      }
      else{
        if(this.pValue > 5){
          this.value = 5
        }
        else{
          this.value = this.pValue;
        }
      }
    }
  },

  methods:{
    /**
     * Selecting a rating.
     * @param {number} index Index of the selected rating.
     */
    star_over(index) {
      if(!this.disable){
        this.temp = this.value;
        this.value = index;
      }
    },

    /**
     * Return the initial rating value.
     */
    star_out() {
      if(!this.disable) {
        this.value = this.temp;
      }
    },

    /**
     * Setting the rating value.
     * @param {number} temp Rating value.
     */
    set_star(temp) {
      if(!this.disable) {
        this.temp = temp;
        this.value = temp;
      }
    }
  },
}
</script>

<style>
.star_rating {
  display: inline-block;
  padding: 1px;
  line-height: 1;
  font-size: 1.5em;
  color: #ABABAB;
  transition: color .2s ease-out;
  order: 5;
}

.star_rating input{
  visibility: hidden;
}

.star_rating:hover {
  cursor: pointer;
}

.select {
  color: goldenrod;
}

.no_select:hover{
  cursor: default;
}
</style>