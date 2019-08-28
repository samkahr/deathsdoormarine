<template>
<div id="pics">
<b-container class="container">
 <h1 class="text-center"> Completed Work </h1>
<b-row align-v="center">
<b-col sm="auto">
<b-card
    title="Marine Work"
    :img-src="require('../assets/ddm_pics/MarineConstruction/2015-06-17 12.09.24.jpg')"
    img-alt="Image"
    img-top
    style="max-width: 20rem;"
    class="mb-2"
  >
<b-button v-b-modal.marineconst >Examples</b-button>
 <b-modal id="marineconst" size="xl" hide-footer>
   <b-carousel
      id="carousel-1"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
      
    >
<b-carousel-slide v-for="image in mcimages" >
      <img
          slot="img"
          class="d-block img-fluid w-100"
          width="1024"
          height="480"
          v-lazy= "image.url"
        >
        </b-carousel-slide>

    </b-carousel>

 </b-modal>

 </b-card>
</b-col>

<b-col sm="auto">

 <b-card
    title="Stonework"
    :img-src="require('../assets/ddm_pics/Stonework/2015-04-20 14.28.52.jpg')"
    img-alt="Image"
    img-top
    style="max-width: 20rem;"
    class="mb-2"
  >

 <b-button v-b-modal.stonework >Examples</b-button>
 <b-modal id="stonework" size="xl" hide-footer>
   <b-carousel
      id="carousel-1"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
      
    >
<b-carousel-slide v-for="image in stonework" >
      <img
          slot="img"
          class="d-block img-fluid w-100"
          width="1024"
          height="480"
          v-lazy="image.url"
        >
        </b-carousel-slide>

    </b-carousel>

 </b-modal>
 </b-card>
 </b-col>

 <b-col sm="auto">

 <b-card
    title="Misc"
    :img-src="require('../assets/ddm_pics/Misc/2018-08-26 13.55.13.jpg')"
    img-alt="Image"
    img-top
    style="max-width: 20rem;"
    class="mb-2"
  >

 <b-button v-b-modal.misc >Examples</b-button>
 <b-modal id="misc" size="xl" hide-footer>
   <b-carousel
      id="carousel-1"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
      
    >
<b-carousel-slide v-for="image in misc" >
      <img
          slot="img"
          class="d-block img-fluid w-100"
          width="1024"
          height="480"
          v-lazy= "image.url"
        >
        </b-carousel-slide>

    </b-carousel>

 </b-modal>
 </b-card>
 </b-col>
 </b-row>
</b-container>


</div>

</template>

<script>

import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'


export default {
  name: 'Pics',
  data () {
        return {
            mcimages: [
                { url: require("../assets/ddm_pics/MarineConstruction/pic1.jpg") },
                { url: require("../assets/ddm_pics/MarineConstruction/pic2.jpg") },
                { url: require("../assets/ddm_pics/MarineConstruction/2013-02-19 14.14.19.jpg") },
                { url: require("../assets/ddm_pics/MarineConstruction/2013-03-07 10.42.12.jpg") },
                { url: require("../assets/ddm_pics/MarineConstruction/2013-06-21 12.55.42.jpg") },
                { url: require("../assets/ddm_pics/MarineConstruction/2013-07-11 07.22.39.jpg") },
                { url: require("../assets/ddm_pics/MarineConstruction/2013-07-11 10.34.35.jpg") },
                { url: require("../assets/ddm_pics/MarineConstruction/2014-03-06 13.37.24.jpg") },
                { url: require("../assets/ddm_pics/MarineConstruction/2014-04-21 23.33.49.jpg") },
                { url: require("../assets/ddm_pics/MarineConstruction/2015-02-11 16.57.39.jpg") },
                { url: require("../assets/ddm_pics/MarineConstruction/2015-06-17 12.09.24.jpg") },
                { url: require("../assets/ddm_pics/MarineConstruction/2016-04-04 13.34.19.jpg") },
                { url: require("../assets/ddm_pics/MarineConstruction/2017-07-11 17.27.44.jpg") },
                { url: require("../assets/ddm_pics/MarineConstruction/2017-08-18 10.48.45.jpg") },
                { url: require("../assets/ddm_pics/MarineConstruction/2018-06-21 10.45.18.jpg") },
                { url: require("../assets/ddm_pics/MarineConstruction/2018-07-02 11.09.36.jpg") },
                { url: require("../assets/ddm_pics/MarineConstruction/2018-07-07 09.53.38.jpg") },
                { url: require("../assets/ddm_pics/MarineConstruction/2018-10-17 14.22.03.jpg") },
                { url: require("../assets/ddm_pics/MarineConstruction/2018-12-06 16.14.46.jpg") },
            ], 
             stonework: [
                { url: require("../assets/ddm_pics/Stonework/2014-07-23 15.22.13.jpg") },
                { url: require("../assets/ddm_pics/Stonework/2015-04-20 14.28.52.jpg") },
                { url: require("../assets/ddm_pics/Stonework/2015-11-06 09.41.20.jpg") },
                { url: require("../assets/ddm_pics/Stonework/2015-11-09 14.13.32.jpg") },
                { url: require("../assets/ddm_pics/Stonework/2016-11-04 16.14.31.jpg") },
                { url: require("../assets/ddm_pics/Stonework/2018-05-15 15.06.53.jpg") },
                { url: require("../assets/ddm_pics/Stonework/2018-05-16 09.48.31.jpg") },
                { url: require("../assets/ddm_pics/Stonework/2018-08-31 16.20.14.jpg") },
                { url: require("../assets/ddm_pics/Stonework/IMG_1177.jpg") },
                { url: require("../assets/ddm_pics/Stonework/IMG_1172001.jpg") },
                { url: require("../assets/ddm_pics/2014-03-16 14.51.41.jpg") },
            ], 
            misc: [
                { url: require("../assets/ddm_pics/Misc/2013-01-04 09.34.35.jpg") },
                { url: require("../assets/ddm_pics/Misc/2013-07-24 18.40.34.jpg") },
                { url: require("../assets/ddm_pics/Misc/2015-04-08 15.08.35.jpg") },
                { url: require("../assets/ddm_pics/Misc/2016-08-15 12.29.04.jpg") },
                { url: require("../assets/ddm_pics/Misc/2018-07-07 21.33.30.jpg") },
                { url: require("../assets/ddm_pics/Misc/2018-08-26 13.55.13.jpg") },
                { url: require("../assets/ddm_pics/Misc/2018-10-01 09.31.03.jpg") },
                { url: require("../assets/ddm_pics/Misc/2018-11-09 11.28.34-1.jpg") },
            ]
        }
      }, 
 
}

</script>

<style>
#pics {
  margin: 15px;
  height: 100%;
}
</style>
