 <template>
    <div class="counter">
        <div class="counternum"> Counter:
            {{ $store.state.counter }}
        </div>
        <div class="cube-root  "> Cube root: {{ $store.state.counter }}<sup class="text-danger">3</sup> = {{ $store.getters.counterSquared }}
    </div>
    <div class="setvalue-container">
      <input type="number" v-model="value" />
      <button class="set-value text-primary" @click="setValue(value)">SET VALUE</button>    </div>
    <div class="btn">
        <button class="btn-click text-primary" @click ="$store.dispatch ('decreaseCounter')">-</button>
        <button class="btn-click  red" @click ="$store.dispatch ('reset')">reset</button>
        <button class="btn-click text-primary" @click ="$store.dispatch ('increaseCounter')">+</button>
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
    background-color: turquoise;
    height: 50vh;
}
.counter {
display: flex;
margin-top: 4rem;
align-items: center;
justify-content: center;
flex-direction: column;
background-color: gray;
}
.counternum{
    font-size: 3em;
    color: purple;

}
.cube-root{
    font-size: 2rem;
    color: purple;

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
    border-radius: 10px;
    width: 120px;
    margin-left: 20px;   

}
.red{
    color: red;
}
input{
    border-radius: 10px;
    width: 120px;
}


@media  only screen and (max-width: 800px) {
    body{
    background-color: turquoise;
    height: 50vh;
}
.counter {
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
}
.counternum{
    font-size: 2em;
    color: purple;

}
.cube-root{
    font-size: 1.5em;
    color: purple;

}

  .btn{
    display: flex;
    flex-direction: row;
align-items: center;
justify-content: center;
/* flex-direction: column; */
    width: 50%;
    color: cadetblue;
    margin-top: 2rem;
    font-size: 2rem;
    border-radius: 10px;
}
.btn-click :hover{
    background-color: blueviolet;
}
.btn-click{
    width: 100%;
    color: cadetblue;
    margin-left: 2rem;
    font-size: 2rem;
    border-radius: 10px;
}

   
   
} 
</style>