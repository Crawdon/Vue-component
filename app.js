Vue.component("card", {
    props: ["title", "pContent"],
    template: `
      <div>
      <h2>{{ title }}</h2>  
      <p>{{ pContent }}</p>
      </div>
    `,
  });

var app = new Vue({
    el: '#app',
    data: {   
        cards:[
            {
            title:"Titulo 1 configurable",
            pContent:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
            },
            {
            title:"Titulo 2 configurable",
            pContent:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
            },
            {
            title:"Titulo 3 configurable",
            pContent:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
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
                :pContent="card.pContent"
                >
            </card>
        </div>`
  })


/* 

-font family arial
-titulo configurable
-backgroundcolor #ccc
-p font size 14px
wxh 150*300 px


Card.init({
el: selector,
config: {

title: '',
body: ''
}
}); */