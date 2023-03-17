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
            curar(){
                
            },
            ataque_especial(){
                const danoPlayer = Math.floor(Math.random() * (21 - 15) + 15)
                const danoMonstro = Math.floor(Math.random() * 13 );

                this.danoMonstro = danoMonstro
                this.danoPlayer = danoPlayer
                
                // console.log("O Player deu ", danoPlayer, " De dano")
                // console.log("O Monstro deu ", danoMonstro, " De dano")
                
                this.vidaMonstro -= danoPlayer;
                this.vidaPlayer -= danoMonstro;
                
                this.logs.push(danoMonstro)
                this.logs.push(danoPlayer)

            },
            atacar(){
                const danoPlayer = Math.floor(Math.random() * 9)
                const danoMonstro = Math.floor(Math.random() * 13 );
                const danoPlayerEspecial = Math.floor(Math.random() * 21)

                this.danoMonstro = danoMonstro
                this.danoPlayer = danoPlayer
                this.danoPlayerEspecial = danoPlayerEspecial
                
                // console.log("O Player deu ", danoPlayer, " De dano")
                // console.log("O Monstro deu ", danoMonstro, " De dano")
                
                this.vidaMonstro -= danoPlayer;
                this.vidaPlayer -= danoMonstro;
                
                this.logs.push(danoMonstro)
                this.logs.push(danoPlayer)

            },       
        },
        watch:{
             logs(valorAtual, valorFinal){
                // console.log(valorAtual)
            }
        }
})