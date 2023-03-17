<template>
    <div class="home">
        <div :style="{color:$store.state.colorCode}" class="counter"> counter:
            {{ $store.state.counter }}
        </div>
        <div class="counter-squared"> {{ $store.state.counter }}
        <sup>2</sup> = {{ $store.getters.counterSquared }}
    </div>
    <div class="button">
        <button @click ="$store.dispatch ('decreaseCounter')">-</button>
        <button @click ="$store.dispatch ('reset')">reset</button>
        <button @click ="$store.dispatch ('increaseCounter')">+</button>
    </div>
    <div class="setvalue-container">
      <input type="number" v-model="value" />
      <button class="set-value" @click="$store.dispatch('value')">SET VALUE</button>
    </div>
    <div>
    <input v-model="colorCode" placeholder="enter color code"
    type="text">
  </div>
  </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  export default {
    name: 'Counter',
    computed:{
        get(){
            const value = ref(0);
            return this.$store.state.value
        },
        set(value){
            this.$store.dispatch ('setValue', value)
        }
    }
  }
  </script>
  