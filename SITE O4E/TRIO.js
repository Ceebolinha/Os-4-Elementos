window.addEventListener("DOMContentLoaded", function() {
    var textElement = document.getElementById("fadeInText");
    var text = '18-24-6-9-18 13-6-20-22-10 11-9-22-10 22-10-11-18-6 1-12-5-11-6-10,\n11-9-22-10 7-3-18-16-22-9-10, 5-6-18-25,\n2-18-3-26-3 22 20-18-3-22-19.\n19-6-18 10-6-9-11-22.\n10-22-12 6-19-1-22-11-26-13-6 22 22-5-20-6-5-11-9-18-9 18 9-22-10-7-6-10-11-18,\n12-4-18 12-5-26-20-18 7-18-3-18-13-9-18.\n7-6-21-22 6-20-6-9-9-22-9 11-18-5-11-6 5-6\n4-22-5-26-10-20-6 8-12-18-5-11-6 5-18 11-26-19-26-18.\n11-18-5-11-6 5-12-4-18 11-13 8-12-18-5-11-6 5-12-4 11-26-1-6-3-6.\n23-9-18-24-4-22-5-11-18, 10-22-7-18-9-18, 21-22-10-11-9-6-26.\n18 22-8-12-26-7-22 21-22 5-6-18-25.\n6 18-13-26-18-6 21-22 20-18-3-22-19.\n18 13-26-21-18 21-22 2-18-3-26-3.\nA1Z26 | A-->R';
  
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
      "romper": "FINAL.html",
      "rompimento": "FINAL.html",
      "ruptura": "FINAL.html",
      "rompeu": "FINAL.html",
      "rompi": "FINAL.html"
      // Adicione mais palavras-chave e URLs conforme necessário
    };
  
    var inputValue = document.getElementById("myInput").value.toLowerCase();
    if (inputValue in keywords) {
      window.location.href = keywords[inputValue];
    } else {
      // Redirecionamento padrão em caso de palavra-chave inválida
      alert("Aqui é pura lógica, podem pedir dicas ao mestre ou aos outros players.");
    }
  });