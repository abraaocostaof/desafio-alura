function encriptar() {
  let texto = document.getElementById("texto").value;
  let tituloMensaje = document.getElementById("titulo-mensagem");
  let parrafo = document.getElementById("paragrafo");
  let garoto = document.getElementById("garoto");

  let textoCifrado = texto
    .replace(/e/gi, "enter")
    .replace(/i/gi, "imes")
    .replace(/a/gi, "ai")
    .replace(/o/gi, "ober")
    .replace(/u/gi, "ufat");

  if (texto.length != 0) {
    document.getElementById("texto").value = textoCifrado;
    tituloMensaje.textContent = "Texto encriptado com sucesso!!";
    parrafo.textContent = "";
    garoto.src = "./img/encriptado.jpg";
  } else {
    garoto.src = "./img/garoto.png";
    tituloMensaje.textContent = "Nenhuma mensagem encontrada";
    parrafo.textContent = "Insira o texto que deseja criptografar ou desencriptar";
    swal("Ooops!", "Insira o seu texto amigo(a)", "warning");
  }
}

function desencriptar() {
  let texto = document.getElementById("texto").value;
  let tituloMensaje = document.getElementById("titulo-mensagem");
  let parrafo = document.getElementById("paragrafo");
  let garoto = document.getElementById("garoto");

  let textoCifrado = texto
    .replace(/enter/gi, "e")
    .replace(/imes/gi, "i")
    .replace(/ai/gi, "a")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u");
  
    if (texto.length != 0) {
      document.getElementById("texto").value = textoCifrado;
      tituloMensaje.textContent = "Texto desencriptado com sucesso!";
      parrafo.textContent = "";
      garoto.src = "./img/desencriptado.jpg";
    } else {
      garoto.src = "./img/garoto.png";
      tituloMensaje.textContent = "Nenhuma mensagem foi encontrada, :[";
      parrafo.textContent = "Insira o texto que deseja criptografar ou desencriptar";
      swal("Ooops!", "Você deve inserir um texto", "warning");
    }
}
