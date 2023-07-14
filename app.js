const app = Vue.createApp({
    data(){
        return{
            showInfo: false,
            cardName: '', 
            cardImg: ''
        }
    },
    methods: {
        searchCard(){
            this.cardName = document.getElementById("inputCard").value
        
            const ygoxhr= new XMLHttpRequest
            ygoxhr.open('GET','https://db.ygoprodeck.com/api/v7/cardinfo.php?name='+this.cardName)
            ygoxhr.onload = function () {
                let info = ygoxhr.response
                console.log("info returned"+info)

                let printinfo = JSON.parse(info).data[0]
                //parsed info//
                console.log(printinfo)
                console.log(printinfo.name)
                console.log(printinfo.card_images[0].image_url_small)
                // TO DO: format parsed info so it can be displayed on the home page.//
                this.cardName = printinfo.name
                this.cardImg = printinfo.card_images[0].image_url_small

                document.getElementById("ygoimg").src = printinfo.card_images[0].image_url_small
                document.getElementById("ygoname").innerHTML = "Card Name: "+printinfo.name
                document.getElementById("ygoid").innerHTML = "Card ID: "+printinfo.id
                document.getElementById("ygodesc").innerHTML = "Card Description: "+printinfo.desc
            }
            ygoxhr.send()
            this.showInfo = !this.showInfo
        }
    }
})

app.mount('#app')