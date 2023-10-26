function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")
  //  if (html.classList.contains("light")) {
  //    html.classList.remove("light")
  //  } else {
  //    html.classList.add("light")
  //  }
  // acima a versão simplificada, usando apenas toggle

  // pegar a tag img
  const img = document.querySelector("#profile img")

  // substituir a img
  if (html.classList.contains("light")) {
    //se tiver light mode, adicionar img light
    img.setAttribute("src", "./assets/avatar-ap2.png")
  } else {
    //se tiver sem light mode, manter a img padrão
    img.setAttribute("src", "./assets/avatar-ap1.png")
  }
}
