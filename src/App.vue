<template>
<div id="root">
  <header> 
    <title>Door County's Premier Marine Contractor and Dock Builder</title>
    <meta name="description" content="Death's Door Marine provides a wide range of marine contstruction 
    services from raising and lowering piers to concrete work to marine landscaping " >
    </header>
  <div id="wrapper">
    <NavBar />
      <div id="content">
          <router-view />
      </div>
      <div id="footer">
        <Footer/>
      </div>
  </div>
</div>

</template>


<script>
import Home from './views/Home.vue'
import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'app',
  components: {
    Home, 
    NavBar, 
    Footer
  }
}
</script>

<style>

html, body, #content {
  position: relative;
  min-height: calc(100vh - 150px);
  margin: 0px; 
  padding: 0;
}

#footer {
  position: relative;
  bottom: 0;
  height: 50px;
  width: 100%;
  color: black;
  background-color: white;
  margin: 0px
}
          


</style>
