window.addEventListener("DOMContentLoaded", function() {
    var textElement = document.getElementById("fadeInText");
    var text = 'Este é o teste final, todos vocês precisam estar aqui.\nCaso você tenha chego antes dos outros, os espere.\n\nAgora começa o último teste.\nvocês já tem tudo que é necessário pra saber a reposta.\nO acróstico deve ser formado.';
  
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
      "abertura": "youtube.com"
      // Adicione mais palavras-chave e URLs conforme necessário
    };
  
    var inputValue = document.getElementById("myInput").value.toLowerCase();
    if (inputValue in keywords) {
      document.write(keywords[inputValue]);
    } else {
      // Redirecionamento padrão em caso de palavra-chave inválida
      alert("Revisem seus passos anteriores.");
    }
  });