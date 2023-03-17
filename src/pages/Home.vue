<!-- <template>
  <div class="home">
    <h1>This is an home page</h1>
  </div>
</template> -->

<template>
  <div class="contact">
  <div>  counter : {{ counter }}</div> <br>
  <div>
    <button @click="increment">+</button>
    <button @click="reset">reset</button>
    <button>+</button>

  </div>
  </div>
</template>


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


</script>










<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>