      
        <template> 
        <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=Monoton&display=swap" rel="stylesheet">
    
                    <div id="app">
              <H1 class="titolo">CATALOGO FILM</H1>          
            <nav class="navbar navbar-expand-lg" style="color:white">
             <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarTogglerDemo01">

            <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
               <router-link to="/">
              <li class="nav-item active">
                <a class="nav-link colorB" style="color:mediumpurple" href="#">HOME <span class="sr-only"></span></a>
              </li>
              </router-link>
              <router-link to="/movies">
                <li class="nav-item active">
                 <a class="nav-link"  style="color:mediumpurple">FILM<span class="sr-only"></span></a>
              </li>
               </router-link>
                <router-link to="/serietv"
               >
               <li class="nav-item active">
                <a class="nav-link"  style="color:mediumpurple">SERIE TV </a>
              </li>
              </router-link>
              <router-link to="/top10">
               <li class="nav-item active">
                <a class="nav-link"  style="color:mediumpurple">TOP 10 <span class="sr-only"></span></a>
              </li>
                </router-link>




         <br>
       
        
            </ul>
          </div>
                <div>
                 <router-link to="/ricerca/">
                <a class="nav-link ricc"  style="color:mediumpurple;padding-right: 10px;">ricerca  <span class="sr-only"></span></a>
                </router-link>
              </div>
        <div class="ling">
         <p class="mt-2">Lingua:</p> 
          </div>
         <div style="float:right;padding-top: 0%;">

            <select v-model="selected" @change="languageChanged">
              <option :value="'en-US'">Inglese</option>
              <option :value="'it-IT'">Italiano</option>
            </select>

        </div>
        </nav>
      
      
        
      

        <router-link to="/aggFilm"></router-link>
        
      
      
        <router-view></router-view>
        </div>


        </template>

        <script>

      
    export default{

    data(){
            
            return{
               
                selected: 'it-IT'
                
                

            }
        },
        methods:{

            languageChanged() {
              const query = JSON.parse(JSON.stringify(this.$route.query))
              query.value = this.selected
               this.$router.replace({path: this.$route.path, query: query })
            }
          
            },
            

        
        
    }

        </script>






