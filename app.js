const texto = "🤖 Olá, eu sou ";
const destaque = "Rafael Duque!";
const h1 = document.querySelector('.conteudo__apresentacao__titulo');
h1.innerHTML = "";

let i = 0;

function digitarTexto() {
  if (i < texto.length) {
    h1.innerHTML += texto.charAt(i);
    i++;
    setTimeout(digitarTexto, 90);
  } else {
    h1.innerHTML += '<strong class="conteudo__apresentacao__titulo-destaque" id="destaque"></strong>';
    digitarDestaque();
  }
}

let j = 0;
function digitarDestaque() {
  const strong = document.getElementById('destaque');
  if (j < destaque.length) {
    strong.innerHTML += destaque.charAt(j);
    j++;
    setTimeout(digitarDestaque, 100);
  }
}

function clickMenu() {
  if (menu.style.display === "block") {
    menu.style.display = "none";
    burguer.textContent = "menu";
  } else {
    menu.style.display = "block";
    burguer.textContent = "close";
  }
}

function mudouTamanho() {
  if (window.innerWidth > 800) {
    menu.style.display = "block";
    burguer.textContent = "close";
  } else {
    menu.style.display = "none";
    burguer.textContent = "menu";
  }
}

digitarTexto();