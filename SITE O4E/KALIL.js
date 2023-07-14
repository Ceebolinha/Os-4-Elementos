window.addEventListener("DOMContentLoaded", function() {
    var textElement = document.getElementById("fadeInText");
    var text = "Kalil Cesarini - #002";
    
    function showNextLetter(index) {
      if (index < text.length) {
        textElement.textContent += text.charAt(index);
        setTimeout(function() {
          showNextLetter(index + 1);
        }, 100);
      }
    }
    
    showNextLetter(0);
  });
  
  document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio do formulário padrão
  
    var keywords = {
      "experimento": "KALIL_2.html"
      // Adicione mais palavras-chave e URLs conforme necessário
    };
  
    var inputValue = document.getElementById("myInput").value.toLowerCase();
    if (inputValue in keywords) {
      window.location.href = keywords[inputValue];
    } else {
      // Redirecionamento padrão em caso de palavra-chave inválida
      alert("Código incorreto.");
    }
  });