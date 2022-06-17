    <template>

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Monoton&display=swap" rel="stylesheet">

     <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"> 
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Fascinate&family=Monoton&display=swap" rel="stylesheet">
    
    <div class="row " style="margin-left: 0!important; margin-right:0!important;">
                        <div class="col-sm-3" 
                        v-for="movie in movies" 
                        :key="movie.id" >

                    
                        <div class="card" style="background: black;">
                            <img :src="image_path(movie.poster_path)" class="imma">
                           
                            <div class="card-body boh">
                            <h5 class="card-title" style="color:mediumpurple;  font-family: 'Monoton', cursive;" >{{movie.name}}</h5>

                            <h5 class="prop" v-if="this.$route.query.value==='en-US' ">POPULARITY:</h5>
                            <h5 class="prop" v-if="this.language == undefined ">POPOLARITA:</h5>
                            <h5 class="prop" v-if="this.$route.query.value==='it-IT' ">POPOLARITa:</h5>
                            <h5 class="prop2 card-title">{{movie.popularity}}</h5>

                            <h5 class="prop" v-if="this.$route.query.value==='en-US' ">ORIGINAL LANGUAGE:</h5>
                            <h5 class="prop" v-if="this.language == undefined ">LINGUA ORIGINALE:</h5>
                            <h5 class="prop" v-if="this.$route.query.value==='it-IT' ">LINGUA ORIGINALE</h5>
                            <h5 class="prop2 card-title">{{movie.original_language}}</h5>

                            <h5 class="prop" v-if="this.$route.query.value==='en-US' ">RELEASE DATE:</h5>
                            <h5 class="prop" v-if="this.language == undefined ">RILASCIATO IL:</h5>
                            <h5 class="prop" v-if="this.$route.query.value==='it-IT' ">RILASCIATO IL:</h5>
                            <h5 class="prop2 card-title">{{movie.first_air_date}}</h5>

                            <h5 class="prop" v-if="this.$route.query.value==='en-US' ">VOTE-AVERAGE:</h5>
                            <h5 class="prop" v-if="this.language == undefined ">MEDIA DEI VOTI:</h5>
                            <h5 class="prop" v-if="this.$route.query.value==='it-IT' ">MEDIA DEI VOTI:</h5>
                            <h5 class="prop2 card-title">{{movie.vote_average}}</h5>
                           
                        </div>
                         <router-link 
                            :key="movie.id"
                            :to="{name:'movie.show',params:{id:movie.id}, query: {type: 'serie'}}" class="centra1">
                            <div class="centra">
                            <button type="button" class=" botton"   v-if="this.$route.query.value==='it-IT' ">mostra altro</button>
                            <button type="button" class="botton"   v-if="this.language == undefined ">mostra altro:</button>
                            <button type="button" class=" botton"   v-if="this.$route.query.value==='en-US' ">show more</button>
                             </div>
                            </router-link>
                        </div>

                    
                    </div>
                    </div>
                    <div class="centra">
                    <button type="button" class=" bottone"  v-on:click="newGP()" v-if="language==='it-IT' ">carica altri</button>
                    <button type="button" class=" bottone"  v-on:click="newGP()" v-if="this.language == undefined ">carica altri</button>
                    <button type="button" class=" bottone"  v-on:click="newGP()" v-if="language==='en-US' ">load more</button>
                    </div>

    </template>

    <script >
    export default{

    data(){
            
            return{
                api_key:'6f9286d54de4891ea7a5c91779e09786',
                language:'it-IT',
                page:1,
                movies:[],
                best:[]
                
                

            }
        },
        methods:{

                async getpost() 
                {  
                    const res = await fetch('https://api.themoviedb.org/3/tv/top_rated?api_key='+this.api_key+'&language='+this.language+this.$route.query.value+'&page='+this.page)
  const post = await res.json()
  console.log(post)
  this.movies = post.results

                },
                image_path(poster_path) {
                    return 'https://image.tmdb.org/t/p/original'+poster_path

            },
            async newGP(){
                this.page=this.page+1;
                const ris=await fetch('https://api.themoviedb.org/3/trending/tv/day?api_key='+this.api_key)
                const post = await ris.json()
                console.log(post)
                this.best=post.results
                for(let i=0;i<20;i++){
                    this.movies.push(this.best[i])
                }
                
                },
            
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
