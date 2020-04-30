<template>
<div id="nav">
  <b-navbar class='navbar bg-light' toggleable="lg" type="light">
     <b-navbar-brand href="#">
       <img src="../assets/deathsDoor_transparent.png" class="img-fluid" alt="Responsive image" width="150 vh" height="150 vh">
     </b-navbar-brand>
     <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
     <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item><router-link to="/" v-scroll-to="'#about'">About</router-link></b-nav-item>
            <b-nav-item><router-link to="/" v-scroll-to="'#about'">Services</router-link></b-nav-item>
            <b-nav-item><router-link to="/pics">Pictures of Past Projects</router-link></b-nav-item>
          </b-navbar-nav>
 </b-collapse>
 </b-navbar>

</div>

</template>

<script>
export default {
  name: 'NavBar',
}

</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Merriweather+Sans|Montserrat|Volkhov');
#nav {
  font-family: 'Montserrat', sans-serif;
}
</style>


<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style> -->
