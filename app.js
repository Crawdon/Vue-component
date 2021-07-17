
Vue.component("card", {
    props: {
        title:String,
        body:String
    },
    template: `
      <div class="card">
      <h2 class="card-title">{{ title }}</h2>  
      <p class="card-body">{{ body }}</p>
      </div>
    `,
  });

var app = new Vue({
    el: '#app',
    data: {   
        cards:[
            {
            title:"Titulo 1",
            body:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
            },
            {
            title:"Titulo 2",
            body:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
            },
            {
            title:"Titulo 3",
            body:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
            }
        ]     
    },
    template:
    `
    <div>
        <card 
            v-for="(card,index) in cards"
            :key="index"
            :title="card.title"
            :body="card.body"
            >
        </card>
    </div>`
  }) 