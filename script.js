function Sim(){
    alert("Você aceitou namorar comigo! Oi amor, te amo <3")
}

function desvia(t){
    var btn = t;
    btn.style.position = 'absolute';
    btn.style.bottom = geraPosicao(10, 90);
    btn.style.left = geraPosicao(10, 90);
    console.log("opa, desviei");
}

function geraPosicao(min, max){
    return (Math.random() * (max - min) + min) + "%";
}

