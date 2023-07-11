const app = Vue.createApp({
    data(){
        return{
            showInfo: false,
            cardName: 'Dark Magician', 
            cardImg: 'https://images.ygoprodeck.com/images/cards_small/46986421.jpg'
        }
    },
    methods: {
        searchCard(){
            this.cardName = document.getElementById("inputCard").value
            console.log(this.cardName)
            this.showInfo = !this.showInfo
        }
    }
})

app.mount('#app')