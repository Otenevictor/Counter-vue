
<template>
  <div class="home">
    <h1 class="counter-head"> Counter App</h1>
    <p class="counter-p text-justify"> Counter app created with vue js to triggers an increment, decrement,
       reset and setValue with the use of composables and Vuex state managment
        that store function for global use</p>
  <h2> <button class="home-counter" > <RouterLink  class=" ml-auto ms-auto" to="/counter" style="text-decoration: none;
  ">counter</RouterLink></button> 
</h2>
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
body{
  background-color: turquoise;
}
.home {
  margin-top: 4rem;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
}
.counter-head{
  font-size: 3rem ;
  color: purple;
}
.counter-p{
  font-size: 1.5rem ;
  padding: 20px;
  text-justify: distribute-all-lines;

}
</style>