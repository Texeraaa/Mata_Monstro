new Vue({
    el: '#app',
        data: {
            vidaMonstro: 100,
            vidaPlayer: 100,
            logs: [ ],
        },
        methods:{
            atacar(){
                const danoPlayer = Math.floor(Math.random() * 9)
                const danoMonstro = Math.floor(Math.random() * 13 );
                this.danoMonstro = danoMonstro
                this.danoPlayer = danoPlayer
            


                this.vidaMonstro -= danoPlayer;
                
                console.log("O Player deu ", danoPlayer, " De dano")
                this.vidaPlayer -= danoMonstro
                console.log("O Monstro deu ", danoMonstro, " De dano")

                this.logs.push(danoMonstro)
                this.logs.push(danoPlayer)

            },       
        },
        watch:{
             logs(valorAtual, valorFinal){
                console.log(valorAtual)
            }
        }
})