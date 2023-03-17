<!-- <template>
  <div class="home">
    <h1>This is an home page</h1>
  </div>
</template> -->

<template>
  <div class="home">
    <h1 class="counter-head"> Counter App</h1>
    <p class="counter-p"> Counter app created with vue js triggers increment, decrement,
       reset and setValue with the use of composables and Vuex state managment
        that store function for global use</p>
  
  </div>
</template>
<!-- 

<script >
export default {
computed : {
  counter() {
    return this.$store.getters.counter
  }
},
method: {
    increment () {
      this.$store.dispatch ('increment')
    },
    reset() {
      this.$store.dispatch ('reset')
    }
  },
}


</script> -->










<style>
.home {
  margin-top: 4rem;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
}
.counter-head{
  font-size: 3rem ;
}
.counter-p{
  font-size: 1.5rem ;
  padding: 20px;

}
</style>