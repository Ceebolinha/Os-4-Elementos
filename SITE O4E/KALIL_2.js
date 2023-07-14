window.addEventListener("DOMContentLoaded", function() {
    var textElement = document.getElementById("fadeInText");
    var text = 'Você deve resolver essa fase com o Player de Noah. \n 612f3064364c595741 \n\n "Vida antiga"';
  
    for (var i = 0; i < text.length; i++) {
      var span = document.createElement("span");
      span.textContent = text.charAt(i);
      span.classList.add("fade-in-letter");
      span.style.animationDelay = (i * 0.09) + "s";
      textElement.appendChild(span);
    }
  
    textElement.style.opacity = 1;
  });

  document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio do formulário padrão
  
    var keywords = {
      "roubo": "TRIO.html",
      "roubar": "TRIO.html",
      "rouba": "TRIO.html",
      "roubava": "TRIO.html",
      // Adicione mais palavras-chave e URLs conforme necessário
    };
  
    var inputValue = document.getElementById("myInput").value.toLowerCase();
    if (inputValue in keywords) {
      window.location.href = keywords[inputValue];
    } else {
      // Redirecionamento padrão em caso de palavra-chave inválida
      alert("O que fazia pra viver?");
    }
  });