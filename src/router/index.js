
//importato i file 
import {createRouter,createWebHistory} from 'vue-router'
import Home from "../views/Home.vue"
import SerieTv from "../views/SerieTv.vue"
import Movie from "../views/Movie.vue"
import aggFilm from "../views/aggInfo.vue"
import top10 from "../views/top10.vue"
import Ricerca from "../views/Ricerca.vue"


//creato router 
const router=createRouter({
    //richiamtao un metodo 
    history:createWebHistory(),
    //ho fatto dei routes
    routes:[
        {
            //ho iniozializzato gli oggetti 
            path:'/movies',
            name:"movies",
            component:Movie,
        },
        {
            path:'/',
            name:'Home',
            component:Home,
        },
        
    {
            path:'/descrizione/:id',
             name: 'movie.show',
             component: aggFilm,
            
        },
        {
            path:'/serietv',
            name:'SerieTv',
            component:SerieTv,
        },
        {
            path:'/top10',
            name:'top10',
            component:top10,
        },
 {
            path:'/ricerca/',
            name:'ricerca',
            component:Ricerca,
        }
    ]
})

//esportato router 

export default router