<template>
  <div>
    <div class="container-fluid">
      <div class="row flash align-items-center">
      <div data-aos="fade-down"
           data-aos-duration="1000"
           data-aos-once="true"
           class="col-sm-12 col-md-6 d-flex justify-content-around">
    <div class="info-mobile">
      <h4 class="text-center">Contact us at:</h4> 
   <ul  class="text-center" style="padding-left: 0; list-style: none;"> 
  <li> <h4>(920) 421-1001 </h4></li>
<li><h4><a href="mailto:mikekahr@gmail.com" target="_blank" style="color: black">mikekahr@gmail.com</a></h4></li>
    </ul>
    <img src="../assets/ddm_pics/MarineConstruction/pic1.jpg" id="dockimage" class="img-fluid" alt="Responsive image" style="height:120px, width:60px, border-radius:25px">

    </div>

    <div class="info-desktop">
    <img src="../assets/ddm_pics/MarineConstruction/pic1.jpg" id="dockimage" class="img-fluid" alt="Responsive image" style="height:120px, width:60px, border-radius:25px">
    </div>
 </div>


<div data-aos="fade-up"
     data-aos-duration="1000" data-aos-anchor-placement="bottom-bottom" data-aos-once="true"
     class="col-sm-12 col-md-6 text-center justify-content-around">
     <h1>Door County's Premier Marine Contractor </h1>
     <br></br>
     <p> We specialize in constructing and maintaining safe harbors local boaters can depend on. We provide services ranging from installation of our
       patented dock designs to dredging to custom marine stone work. </p>
<br></br>
<div class="info-desktop">
<h2 class="text-center">Contact us at:</h2> 
  <ul  class="text-center" style="padding-left: 0; list-style: none;"> 
  <li> <h2>(920) 421-1001 </h2></li>
<li><h2><a href="mailto:mikekahr@gmail.com" target="_blank" style="color: black">mikekahr@gmail.com</a></h2></li>
    </ul>
    </div>
     </div>
</div>

  <div id="about" class="row timeline" data-color="dark" data-aos="fade-up"
            data-aos-duration="1000" data-aos-once="true">
            <div class="parallax">
       <div id="abouttext" class="col-12 align-items-center" >
           <h1 class="section-header text-uppercase" > About </h1>
           <p> Death's Door Marine is uniquely capable to handle every aspect of your marine construction needs.
             We professionally engineer solutions for marine environments AND build what we design.
             Owner Mike Kahr is a professional civil engineer who has been building and designing docks in Door County for over 30 years. 
             Mike is considered a statewide expert in marine contstruction and the permiting process for marine structures on Lake Michigan.  
             An example of his experitise can be seen in the multiple patents he holds for his innovative dock designs, 
             which are designed to be raised, lowered, and fully withstanding of winter ice. Give us a call today for a free consultation.</p>
           </div>

           <div id= "captext">
             <h1 class="section-header text-uppercase" > Services Offered </h1>
             <ul style="padding-left: 10px;">
               <li><h4>Pier Installation and Repair </h4></li>
               <li><h4>Dredging</h4></li>
               <li><h4>Stone Work</h4></li>
               <li><h4>Salvage Work</h4></li>
               <li><h4>Barge Work</h4></li>
               <li><h4>Patented Pier Design and Installation</h4></li>
               <li><h4>Historic Pier Preservation</h4></li>
               <li><h4>Beach Landscaping and Construction</h4></li>
               <li><h4>Steel Sheeting Installation</h4></li>
               <li><h4>Concrete Pouring</h4></li>
               <li><h4>Equipment Hauling To and From Local Islands</h4></li>
               <li><h4>Professional Engineering Services</h4></li>
               <li><h4>Permitting Consultation</h4></li>
               <li><h4>Fully bonded and insured.</h4></li>
             </ul>
           </div>
        </div>
     </div>

  </div>
</div>
</template>

<script>
// @ is an alias to /src
import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Home',
  components: {
    NavBar,
    Footer

  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Merriweather+Sans|Montserrat|Volkhov');
.container-fluid {
  margin-top: 30px;
}
#dockimage {
  width: 80vh;
  height: 90vh;
  margin-bottom: 30px;
}
#about {
  margin: 0px;
}

h1 {
  font-family: 'Merriweather Sans', sans-serif;
  font-weight: bold;
  font-size: 32px;
  text-shadow: 2px 2px 2px #aaa;
}

h2 {
font-family: 'Merriweather Sans', sans-serif;
}

p, h4 {
font-family: 'Montserrat', sans-serif;
}

.parallax {
  /* The image used */
  background: url('../assets/deathsDoor_transparent.png');

  /* Full height */
  height: 500 px;
  padding: 30px;

  /* Create the parallax scrolling effect */
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.info-mobile { 
  display: none;
  }
.info-desktop { 
  display: block; 
  }

@media only screen and (max-width: 600px) {
  .parallax {
    /* background: url('../assets/deathsDoor_transparent.png') no-repeat center center fixed; */
    background: url('../assets/deathsDoor_transparent.png');
    background-size: 250% 100%;
    background-position: center;
    background-repeat: no-repeat;
  }
  .info-mobile { display: block; }
  .info-desktop { display: none; }
}
#abouttext {
  color: black;
  background: rgba(255, 255, 255, 0.9);
  padding: 15px
}

#captext {
  color: black;
  background: rgba(255, 255, 255, 0.9);
  padding: 15px
}



</style>
