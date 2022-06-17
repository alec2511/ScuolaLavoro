      
        <template> 
        <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=Monoton&display=swap" rel="stylesheet">
    
                    <div id="app">
              <H1 class="titolo">CATALOGO FILM</H1>  
              <div class="d-flex justify-content-between " style="margin-left: 30px; margin-right:30px;">
                <div >
                  <div>
                    <router-link to="/" style="margin-right:10px;color: mediumpurple;">
                      HOME
                    </router-link>
                    <router-link to="/movies" style="margin-right:10px;color: mediumpurple;">
                      FILM
                    </router-link>
                      <router-link to="/serietv" style="margin-right:10px;color: mediumpurple;">
                        SerieTV
                    </router-link>
                    <router-link to="/top10" style="color: mediumpurple;">
                      TOP 10
                      </router-link>
                  </div>
                </div>
                <div >
                    <router-link to="/ricerca/" style="margin-right:10px;color: mediumpurple;">
                      ricerca
                    </router-link>
                    <div class="ling">
                      <p>Lingua:
                        <select v-model="selected" @change="languageChanged">
                          <option :value="'en-US'">Inglese</option>
                          <option :value="'it-IT'">Italiano</option>
                        </select>
                      </p> 
                    </div>
                    
                </div>
              </div> 
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






