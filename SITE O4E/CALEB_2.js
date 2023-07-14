window.addEventListener("DOMContentLoaded", function() {
    var textElement = document.getElementById("fadeInText");
    var text = 'Você está por si só. \n B64 \n aW1ndXIuY29tL2EvcE5FM0dWZw== \n "Sou uma sombra do passado, um fantasma que assombra a mente. \n Sou resultado de eventos, difíceis de esquecer. \n O que sou?"';
  
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
      "trauma": "TRIO.html"
      // Adicione mais palavras-chave e URLs conforme necessário
    };
  
    var inputValue = document.getElementById("myInput").value.toLowerCase();
    if (inputValue in keywords) {
      window.location.href = keywords[inputValue];
    } else {
      // Redirecionamento padrão em caso de palavra-chave inválida
      alert("Anagrama.");
    }
  });