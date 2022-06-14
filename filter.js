'use strict';
let courses = [
    { name: "Courses in England", prices: [0, 100] },
    { name: "Courses in Germany", prices: [500, null] },
    { name: "Courses in Italy", prices: [100, 200] },
    { name: "Courses in Russia", prices: [null, 400] },
    { name: "Courses in China", prices: [50, 250] },
    { name: "Courses in USA", prices: [200, null] },
    { name: "Courses in Kazakhstan", prices: [56, 324] },
    { name: "Courses in France", prices: [null, null] },
];
Vue.createApp({
    data(){
        return{
            courses,
            requiredRange: []

        }
    },
    computed:{
        filterRange(){
            return this.courses.forEach(el => {
                if (el.prices[0] === null)   el.prices[0] = 0;
                if (el.prices[1] === null)   el.prices[1] = Infinity;
            });

            /*       if (this.courses[i].prices[0] === null) this.courses[i].prices[0] = 0;
                if (this.courses[i].prices[1] === null) this.courses[i].prices[1] = Infinity;
            }
            return courses;*/
        }
    },
    methods:{
        filterFrom0To200(courses){ //фильтр цен до 200
            this.requiredRange.length = 0;
            for (let elem of this.courses){
                if(elem.prices[0] <= 200 && elem.prices[1] <= 200)
                    this.requiredRange.push(elem);
            }
            return this.requiredRange;
        },
         filterFrom100To350(courses){ //фильтр цен от 100 до 350
            this.requiredRange.length = 0;
            for (let elem of this.courses){
                if(elem.prices[0] >= 100 && elem.prices[0] <= 350 && elem.prices[1] <= 350)
                    this.requiredRange.push(elem);
            }
            return this.requiredRange;
        },
         filterFrom200(courses){ //фильтр цен от 200
            this.requiredRange.length = 0;
            for (let elem of this.courses){
                if(elem.prices[0] >= 200 && elem.prices[1] >= 200)
                    this.requiredRange.push(elem);
            }
            return this.requiredRange;
        },

        sortLowToHigh() {
            this.courses.sort((a,b)=>{
                if (a.prices[0] - b.prices[0] === 0) return b.prices[1] - a.prices[1];
                return a.prices[0] - b.prices[0];
                }
            )
        },
         sortHighToLow() {
            this.courses.sort((a,b) => {
                if (b.prices[0] - a.prices[0] === 0) return a.prices[1] - b.prices[1];
                return b.prices[0] - a.prices[0];
                }
            )
        }
    }
}).mount("#cards");

