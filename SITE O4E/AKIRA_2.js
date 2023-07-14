window.addEventListener("DOMContentLoaded", function() {
    var textElement = document.getElementById("fadeInText");
    var text = 'Você deve resolver essa fase com o Player de Grasir. \n .. -- --. ..- .-. .-.-.- -.-. --- -- \n "Sou um conceito abstrato, que transcende o tempo e o espaço.\n Sou fonte de felicidade e dor, capaz de mover montanhas.\n O que sou?"';
  
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
      "amor": "AKIRA_3.html"
      // Adicione mais palavras-chave e URLs conforme necessário
    };
  
    var inputValue = document.getElementById("myInput").value.toLowerCase();
    if (inputValue in keywords) {
      window.location.href = keywords[inputValue];
    } else {
      // Redirecionamento padrão em caso de palavra-chave inválida
      alert("A imagem gera esse conceito.");
    }
  });