new Vue({
    el: '#app',
        data: {
            vidaMonstro: 100,
            vidaPlayer: 100,
            jogoRodando: false,
            ganhou: true,
            lifeDangerPlayer: false,
            lifeDangerMonstro: false,

            listaLogs: [],
        },
        created(){
          setInterval(() => {
            this.validaEstadoJogo()
          }, 1);  
        },
        methods:{
            danoMonstro(){
                const danoMonstro = Math.floor(Math.random() * 13 );
                this.danoDoMonstro = danoMonstro
                console.log("O Monstro deu ", danoMonstro, " De dano")
                this.vidaPlayer -= danoMonstro;
                this.listaLogs.push({classe: 'monster', valor: danoMonstro, mensagem: `O monstro deu ${danoMonstro} de dano`})
            },
            atacar(){
                this.danoMonstro() //inicializa o dano do monstro
                const danoPlayer = Math.floor(Math.random() * 9) //randomiza o dano do player de 0 a 8
                this.danoPlayer = danoPlayer  //cria objeto
                this.vidaMonstro -= danoPlayer; //tira vida do monstro
                this.listaLogs.push({classe: 'player', valor: danoPlayer, mensagem: `O Player deu ${danoPlayer} de dano`}) //manda para a array logs

                // teste de console
                // console.log("O Player deu ", danoPlayer, " De dano")
                // console.log("O Monstro deu ", danoMonstro, " De dano")
            
            },  
            ataque_especial(){
                
                this.danoMonstro() //inicializa o dano do monstro
                const danoPlayer = Math.floor(Math.random() * (17 - 10) + 10) //randomiza o dano do player de 10 a 15
                this.danoPlayer = danoPlayer  
                this.vidaMonstro -= danoPlayer;
                console.log("O Player deu ", danoPlayer, " De dano")
                this.listaLogs.push({classe: 'player', valor: danoPlayer, mensagem: `O Player deu ${danoPlayer} de dano`})
            },    
            curar(){
                this.danoMonstro()
                const curaPlayer = Math.floor(Math.random() * 10);
                this.curaPlayer = curaPlayer;
                this.vidaPlayer += curaPlayer;
                console.log("O player curou ", curaPlayer, " de vida")
                this.listaLogs.push({classe: 'player', valor: curaPlayer, mensagem: `O Player curou ${curaPlayer} de vida`})
            },
            validaEstadoJogo(){
                if(this.vidaMonstro <= 0){
                    this.jogoRodando = false
                    this.ganhou = true
                }else if(this.vidaPlayer <= 0){
                    this.jogoRodando = false
                    this.ganhou = false
                }
                
                if(this.vidaPlayer <= 20){
                    this.lifeDangerPlayer = true
                }else if(this.vidaMonstro <= 20){
                    this.lifeDangerMonstro = true
                }
            },
            resetaComponentes(){
                this.vidaMonstro = 100
                this.vidaPlayer = 100
                this.jogoRodando = true
                this.lifeDangerMonstro = false
                this.lifeDangerPlayer = false
                this.listaLogs = []
            }
        },
        watch:{
            listaLogs(valorAtual, valorFinal){
                console.log(valorAtual)
            }
        },
})