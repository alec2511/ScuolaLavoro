<template>

<div style="height:40px">
            <form class="form-inline my-2 my-lg-0">
              <div style="float: left">
              <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search " v-model="nome"   >
              </div>
              <div style="float: right"></div>
              <a class="btn btn-outline-success my-2 my-sm-0 colbottone" type="submit" style="position:absolute;float: right;" @click="ricerca">cerca</a>


            </form>
</div>


    <div class="row " style="margin-left: 0!important; margin-right:0!important;">
  <div class="col-sm-4"
  v-for="movie in movies" 
     :key="movie.id"
  >
    <div class="card" style="background-color:black">
      <div class="card-body" style="background-color:black" >      
        <img :src=" image_path(movie.poster_path)" class="card-img-top">
        <h5 class="card-title" style="color:white">{{movie.original_title}}</h5>
        
         <router-link 
            :key="movie.id"
            :to="{name:'movie.show',params:{id:movie.id}}" class="centra1">
           <div class="centra">
        <button type="button" class=" botton"  v-on:click="newGP()">mostra altro</button>
        </div>
        </router-link>

      </div>
    </div>
  </div>
</div>

</template>
<script >   

 export default{

    data(){ 

            
            return{
                  api_key:'6f9286d54de4891ea7a5c91779e09786',
                  language:'it-IT',
                  movies: {},
                  page:1,

            }
        },
        computed: {
        },
        methods:{

           

          async getpost() 
          { 
             console.log(this.$route.query.name)
              return await fetch('https://api.themoviedb.org/3/search/movie?api_key='+this.api_key+'&language='+this.language+'&page='+this.page+'&query='+this.nome)
              .then(res =>res.json())  
              .then(data=>{
              
                  this.movies=data.results
                  
             console.log(this.movies)
              })
          },

      
              
        image_path(poster_path) {
              return poster_path !== null ? 'https://image.tmdb.org/t/p/original'+poster_path : 'https://via.placeholder.com/750x1150'

        }, 
           
            ricerca(){
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
        },
            
            

        
        
    }
</script>