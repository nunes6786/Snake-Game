const placar = {
    largura: 800,
    altura: 60,
    corFundo: 'gray',
    corTexto: 'black',
    pontuacao: 0,
    nomeJogo: "IFRJ SnakeZz",
    desenhar(){
        cCtx.fillStyle = this.corFundo;
        cCtx.fillRect(0,0, this.largura, this.altura);
        cCtx.fillStyle = this.corTexto;
        cCtx.font = '20px Fantasy'
        cCtx.textAlign = 'center'
        cCtx.textBaseline = "middle";
        cCtx.fillText(this.nomeJogo, 400,30);
        cCtx.font = "20px Fantasy";
        cCtx.textAlign = "left";
        cCtx.textBaseline = "bottom";
        cCtx.fillText(this.pontuacao + " pts", 10, 50);
    }

}
