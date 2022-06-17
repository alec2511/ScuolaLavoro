<template>

 <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Monoton&display=swap" rel="stylesheet">

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"> 
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Fascinate&family=Monoton&display=swap" rel="stylesheet">


<link href="https://fonts.googleapis.com/css2?family=Monoton&display=swap" rel="stylesheet">
    
 

<div class="row" style="margin-left: 0!important;margin-right: 0!important;">
    <div class="col">
      <img :src="image_path()" class="card-img img-responsive" alt="..." style="width:700px; height: 835px;padding-right: 50px; padding-left: 100px;">
    </div>
    <div class="col">
      <div>
    <h5  style="color:mediumpurple ;font-size: 50px ; font-family: 'Monoton', cursive;">{{movie.name ? movie.name : movie.title}}</h5>
      <br>

     <p style="color:white;" v-if="movie.overview">
      <span style="color:blueviolet" v-if="language=='en-US'"> OVERVIEW:</span>  
      <span style="color:blueviolet"  v-else> TRAMA:</span>
      {{movie.overview}}
     </p>
     
     
      <p style="color:white;" v-if="movie.original_language">
      <span style="color:blueviolet" v-if="language=='en-US'"> LANGUAGE:</span>  
      <span style="color:blueviolet"  v-else> LINGUA:</span>
      {{movie.original_language}}
      </p>
     
       <p style="color:white;" v-if="movie.popularity">
      <span style="color:blueviolet" v-if="language=='en-US'"> POPULARITY:</span>  
      <span style="color:blueviolet"  v-else> POPOLARITA':</span>
      {{movie.popularity}}
      </p>

      <p style="color: white;">
        <span style="color:blueviolet" v-if="language==='en-US'"> GENRES:</span>
        <span style="color:blueviolet" v-else> GENERE:</span>
        <span v-for="item in movie.genres" :key="item.id">
            {{item.name}}
        </span>
      </p>

       <p style="color: white;" v-if="movie.networks">
        <span style="color:blueviolet" v-if="language==='en-US'"> WHERE SEE IT:</span>
        <span style="color:blueviolet" v-else> DOVE VEDERLO:</span>
        <span v-for="item in movie.networks" :key="item.id">
            {{item.name}}
        </span>
      </p>
     
      <p style="color:white;" v-if="movie.last_air_date">
      <span style="color:blueviolet" v-if="langauge=='en-US'"> DATE:</span>  
      <span style="color:blueviolet"  v-else> DATA:</span>
      {{movie.last_air_date}}
      </p>


      <p style="color: white;" v-if="movie">

     <span style="color:blueviolet" v-if="language=='en-US'"> VALUTATION:</span>  
      <span style="color:blueviolet" v-else> VALUTAZIONE: </span>
        <span v-for="item in getRating" :key="item">
        <span class="fa fa-star checked"></span>
        </span>
        <span v-for="item in getDifference" :key="item">
        <span class="fa fa-star"></span>
        </span>
      </p>
      
    </div>
  </div>
</div>



</template>
<script>
 export default{

    data(){
            
            return{
                  api_key:'6f9286d54de4891ea7a5c91779e09786',
                  language:'it-IT',
                  movie: {}
            }
        },
        computed: {
          getRating() {
            return  Math.round(this.movie.vote_average/2)
          },
          getDifference() {
            return  5 - Math.round(this.movie.vote_average/2)
          }
        },
        methods:{

          async getpost() 
          { 
           if(this.$route.query.value==='it-IT'){
            this.language='it-IT'
            }else if(this.$route.query.value==='en-US'){
              this.language='en-US'
            }else{
            this.language='it-IT'
            }
            let basePath = '' 
            console.log(this.$route)  
            if(this.$route.query.type==='serie'){
                basePath = 'https://api.themoviedb.org/3/tv/'
            } else {
              basePath = 'https://api.themoviedb.org/3/movie/'
            } 

              return await fetch(basePath+this.$route.params.id+'?api_key='+this.api_key+'&language='+this.language)
              .then(res =>res.json())  
              .then(data=>{
              
                  this.movie=data
                  console.log(data)
              })
          },
          
      
        image_path() {
              return this.movie.poster_path !== null ? 'https://image.tmdb.org/t/p/original'+ this.movie.poster_path : 'https://via.placeholder.com/750'

        }          

        },
            
            
        created(){
            this.getpost()
            
        },

       

        watch: { 
        '$route.query.value': {
         handler: function(value) {
           this.language=value
           this.getpost()
        },
        deep: true,
        immediate: true
      }
}
        
        
    }
</script>

<style >

.checked {
  color:mediumpurple;
}
.fot{

  width: 100%;


}
</style>
 
