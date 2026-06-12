const botao = document.getElementById("btn");

function reagirAoClique() {
    document.querySelector('.quadrado').style.backgroundColor = '#c1da33ff'
}

botao.addEventListener("click", reagirAoClique);

const quadrado = document.quarySelector(".quadrado");
let x = 0;
let y = 0;

document.addEventListener("keydown",function(e){
    switch (e.key)
   
      case 'w': 
            Y -= 20;
            break;
        case 's':
            Y += 20;
            break;
        case 'a': 
            X -= 20;
            break;
        case 'd': 
            X += 20;
            break;
    quadrado.style.top = x + 'px';
    quadrado.style.left = y + 'px';

})

const btn-att= document.getElementById('btn-tema'); 
        const  = document.body;