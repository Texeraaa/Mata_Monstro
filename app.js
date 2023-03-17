new Vue({
    el: '#app',
        data: {
            vidaMonstro: 100,
            vidaPlayer: 100,
            logDanoMonstro: [],
            logDanoPlayer: [],
            logs: [],
        },
        methods:{
            danoMonstro(){
                const danoMonstro = Math.floor(Math.random() * 13 );
                this.danoDoMonstro = danoMonstro
                console.log("O Monstro deu ", danoMonstro, " De dano")
                this.vidaPlayer -= danoMonstro;
                this.logs.push(danoMonstro)
                return
            },
            curar(){

            },
            ataque_especial(){
                const danoPlayer = Math.floor(Math.random() * (21 - 15) + 15)
                this.danoPlayer = danoPlayer  
                this.vidaMonstro -= danoPlayer;
                // console.log("O Player deu ", danoPlayer, " De dano")
                this.danoMonstro()
                this.logs.push(danoPlayer)

            },
            atacar(){
                this.danoMonstro()
                const danoPlayer = Math.floor(Math.random() * 9)

                this.danoPlayer = danoPlayer
                
                // console.log("O Player deu ", danoPlayer, " De dano")
                // console.log("O Monstro deu ", danoMonstro, " De dano")
                
                this.vidaMonstro -= danoPlayer;
                
                this.logs.push(danoPlayer)

            },       
        },
        watch:{
             logs(valorAtual, valorFinal){
                // console.log(valorAtual)
            }
        }
})