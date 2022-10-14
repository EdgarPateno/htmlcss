
  function vowelConsonant() {
      
    let letters = document.getElementById("inputLetter").value.toLowerCase();
  
      switch(letters) {
          case "a":
          case "e":
          case "i":
          case "o":
          case "u":
          document.getElementById("result").innerHTML ="I am a vowel.";
          break;
          
          default:
          document.getElementById("result").innerHTML ="I am a consonant.";
      }
    
  }


  function calculate(button) {
    let num1 = +document.getElementById("num1").value;
    let num2 = +document.getElementById("num2").value;
    let calculator = button.getAttribute('value');
    
      switch (calculator) {
          case "+":
          document.getElementById("result").value = num1 + num2;
          break;
          case "-":
          document.getElementById("result").value = num1 - num2;
          break;
          case "*":
          document.getElementById("result").value = num1 * num2;
          break;
          case "/":
          document.getElementById("result").value = num1 / num2;
          break;
      }

  }