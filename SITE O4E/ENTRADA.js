document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio do formulário padrão
  
    var keywords = {
      "akira": "AKIRA.html",
      "grasir": "GRASIR.html",
      "kalil": "KALIL.html",
      "caleb": "CALEB.html",
      "noah": "NOAH.html"
      // Adicione mais palavras-chave e URLs conforme necessário
    };
  
    var inputValue = document.getElementById("myInput").value.toLowerCase();
    if (inputValue in keywords) {
      window.location.href = keywords[inputValue];
    } else {
      // Redirecionamento padrão em caso de palavra-chave inválida
      alert("Apenas o primeiro nome.");
    }
  });

  window.addEventListener("DOMContentLoaded", function() {
    var textElement = document.getElementById("fadeInText");
    var text = "Quem está ai?";
    
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