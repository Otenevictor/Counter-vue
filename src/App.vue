<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <RouterLink to="/" class="navbar-brand" >Altschool-Counter-App</RouterLink>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" 
    data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" 
    aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse " id="navbarNav">
      <div class="navbar-nav  me-auto my-2 my-lg-0 navbar-nav-scroll me-2 mb-2 mb-sm-0 ml-auto ms-auto ">
      <div class="home-counter" ><RouterLink to="/" style="text-decoration: none;">Home</RouterLink></div> 
       <div class="home-counter" > <RouterLink  class=" ml-auto ms-auto" to="/counter" style="text-decoration: none;">Counter</RouterLink></div> 
       <div class="home-counter" > <RouterLink  class=" ml-auto ms-auto" to="/notfound" style="text-decoration: none;">404page</RouterLink></div> 
       
      </div>
    </div>
  </div>
</nav>
  
<RouterView/>
<hr class="text-outline-light">
   <div class="container-fluid w-100">
  <div class="row  p-2 mx-auto justify-content-between   mt-5 fixed-bt">
      <div class="col-md-12  w-100 text-bg-primary ml-2 ">
          <p class="text-center"> copyright Counter || <span id="year">2023</span>. <RouterLink to="/counter" style="text-decoration: none; color: azure;">contact us.</RouterLink></p>
      </div>
  </div>
  </div>
  <!-- </section> -->


</template>

<style scoped>
body{
  background-color: cadetblue;
  color: antiquewhite;
}
.home-counter {
  color: cadetblue;
  margin-left: 20px;
  font-size: 2rem;
  text-decoration: none;
}
.fixed-bt{
  position: relative;
}
@media  only screen and (max-width: 320px) {
    body{
    background-color: turquoise;
    height: 50vh;
}
}
</style>
