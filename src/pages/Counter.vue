 <template>
    <div class="counter">
        <div :style="{color:blue}" class="counternum"> Counter:
            {{ $store.state.counter }}
        </div>
        <div class="cube-root"> Cube root: {{ $store.state.counter }}
        <sup>3</sup> = {{ $store.getters.counterSquared }}
    </div>
    <div class="setvalue-container">
      <input type="number" v-model="value" />
      <button class="set-value" @click="setValue(value)">SET VALUE</button>    </div>
    <div class="btn">
        <button class="btn-click" @click ="$store.dispatch ('decreaseCounter')">-</button>
        <button class="btn-click" @click ="$store.dispatch ('reset')">reset</button>
        <button class="btn-click" @click ="$store.dispatch ('increaseCounter')">+</button>
    </div>
     

  </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  import useCounter from "@/composable/useCounter";

  export default {
    name: 'Counter',
    setup() {
    const { counter, increment, decrement, reset, setValue } = useCounter();
    const value = ref('');
    return {
      counter,
      increment,
      decrement,
      reset,
      setValue,
      value,
    };
  },
    // computed:{
    //     get(){
    //         const value = ref(0);
    //         return this.$store.state.value
    //     },
    //     set(value){
    //         this.$store.dispatch ('setValue', value)
    //     }
    // }
  }
  </script>


<style>
body{
    background-color: darkcyan;
    height: 50vh;
}
.counter {
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
}
.counternum{
    font-size: 3em;
}
.cube-root{
    font-size: 2rem;

}

.setvalue-container{
    margin-top: 2rem;
    margin-bottom: 2rem;
}
.btn-click{
    width: 5rem;
    color: cadetblue;
    margin-left: 2rem;
    font-size: 2rem;
    border-radius: 10px;
}
.set-value{
    color: cadetblue;
}
</style>