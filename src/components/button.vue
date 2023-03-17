<template>
    <div class="home">
        <img alt="vuelogo" src="../assets/logo.png">
        <div :style="{color:$store.state.colorCode}" class="counter">
            {{ $store.state.counter }}
        </div>
        <div class="counter-squared">{{ $store.state.counter }}
        <sup>2</sup> = {{$store.getters.counterSquare}}
    </div>
    <div class="button">
        <button @click ="$store.dispatch ('decreaseCounter')">-</button>
        <button @click ="$store.dispatch ('increaseCounter')">-</button>
    </div>
    <div>
    <input v-model="colorCode" placeholder="enter color code"
    type="text">
  </div>
  </div>
  </template>
  
  <script>
  export default {
    name: 'HomeView',
    computed:{
        get(){
            return this.$store.state.colorCode
        },
        set(newValue){
            this.$store.dispatch ('setcolorCode', newValue)
        }
    }
  }
  </script>
  