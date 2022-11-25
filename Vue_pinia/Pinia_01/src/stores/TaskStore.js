import { defineStore } from "pinia";

export const useTaskStore= defineStore('taskStore',{
    state:()=>({
        tasks:[
            {id:1 , name:'Iphone', isFav:false},
            {id:2 , name:'Samsung', isFav:true},
            {id:3 , name:'OPPO', isFav:false},
        ],
        subjects:[
            {id:1 , name:'C#', isFav:false},
            {id:2 , name:'C++', isFav:true},
            {id:3 , name:'Vue 3', isFav:false},
        ],
        name:'JOINCODER',
    }),
    getters:{
        favs(){
            return this.tasks.filter(t=>t.isFav)
        }
    }
})