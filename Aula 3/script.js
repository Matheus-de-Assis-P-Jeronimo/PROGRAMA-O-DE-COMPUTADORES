function dica(){

    var frases = [
        "Programar é errar rápido para aprender rápido.",
        "Todo grande programador já começou com um 'Hello, World!'.",
        "Um erro de sintaxe hoje é um aprendizado amanhã.",
        "Não tenha medo do bug, ele é seu professor disfarçado.",
        "Quem nunca esqueceu um ponto e vírgula não programou de verdade.",
        "A lógica é a base, a linguagem é apenas a ferramenta.",
        "O computador só faz exatamente o que você manda — e esse é o problema. 😅",
        "Cada linha de código escrita é um passo rumo à fluência digital.",
        "Debugar é como ser um detetive em um crime que você mesmo cometeu.",
        "Errar faz parte: até o Google já caiu por causa de um código errado.",
        "Não existe código perfeito, existe código funcionando (e bem explicado).",
        "Aprender a programar é como aprender uma língua nova: prática todo dia.",
        "Um bom programador transforma café em código. ☕💻",
        "Primeiro faça funcionar, depois melhore o código.",
        "Lembre-se: até os maiores softwares começaram pequenos."
    ];
    var nfrase = Math.floor(Math.random() * frases.length);
    var d = document.getElementById("dica_do_dia");
    d.innerHTML = "A dica do dia é: " + frases[nfrase];

    for(var i=0; i<frases.length; i++){
        document.writeln("<div class='dica'>"+frases[i]+"</div><br>");
    }
}
    
function iniciar_pagina (entrada){
    var h1 = document.getElementById("title");
    h1.innerHTML = entrada; h1.style.color = "green";
}
function mudar_cor(cor){
    var c1 = document.getElementById("title");
    c1.style.color = cor;
}
function sorteio(){
    var n = Math.floor(Math.random() * 6) + 1;
    var r = document.getElementById("resultado");
    r.innerHTML = "Número sorteado: " + n;
    //iniciar_pagina(n);
    var dado = document.getElementById("dado");
    dado.src = "img/dado" + n + ".png";
}