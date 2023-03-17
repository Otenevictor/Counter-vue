import {createStore} from "vuex"
// import axios from 'axios'

export default createStore({
    state: {
        counter: 0,
        // colorCode: 'blue'
    },
    mutations: {
        decreaseCounter(state){
        state.counter--
    },
    increaseCounter (state){
        state.counter++
    },
    reset (state){
        state.counter = 0
    },
    setValue(state, value) {
      state.counter = value
    },
},
    actions: {
        decreaseCounter({commit}) {
            // axios ('https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new')
            // .then (response => {
commit ('decreaseCounter') 
            },
        increaseCounter({commit}) {
            // axios ('https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new')
            // .then(response => {
commit ('increaseCounter') 
            
        },
reset({commit}){
    commit ('reset')
},
setValue(value) {
commit ('setValue', value)},
    },

getters: {
    counterSquared (state){
        return state.counter * state.counter
    }
},
modules: {

}

})










// import { createStore } from "vuex";

// const store = createStore({
//   state:{
//     count: 0
//   },

//   getters:{
//     counter(state) {
//         return state.count
//     },
// },

//   mutations:{
//     increment(state) {
//       state.count++;
//     },
//     reset(state){
//         state.count = 0;
//     },
// },
//     actions:{
//         increment ({commit}){
//             commit ('increment')
//         },
//         reset ({commit}){
//             commit ('reset')
//         }
//     }

    
 
// });

// export default store;