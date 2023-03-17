<template>
  <div class="error">
    <h1 class="">Page Not Found 404!!!</h1>
    <p>sorry!!! we couldn't process your request as the path can not be found</p>
    <p>Try again</p>
    <div class="home-counter" ><RouterLink to="/">back to Home</RouterLink></div> 
  </div>
  </template>
  
  <script>
  import { RouterLink, RouterView } from 'vue-router'

  export default {};
  </script>
  
  <style>
  .error{
    margin-top: 4rem;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;

  }
  h1{
    color: purple;
  }
  @media  only screen and (max-width: 800px) {
    body{
    background-color: turquoise;
    height: 50vh;
}
.error {
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
padding: 20px;
}
  }
</style>