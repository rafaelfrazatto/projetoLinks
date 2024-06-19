function toggleMode() {
  const html = document.documentElement;
  html.classList.toggle("light");

  //pegar a tag img

  const img = document.querySelector("#profile img");

  // substituir a imagem

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatarbola.jpg");
    img.setAttribute(
      "alt",
      "Foto do Bola te dando uma encarada porque ele não gosta do light mode."
    );
  } else {
    img.setAttribute("src", "https://github.com/bolazildo.png");
    img.setAttribute(
      "alt",
      "Foto do Bola usando camiseta branca, barba e fundo roxo."
    );
  }

  // se tiver light mode, adicionar a imagem light
  // se tiver sem light mode, manter imagem normal
}
