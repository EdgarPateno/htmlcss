

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
          break;
      }
  
}
  


function calculate(button) {
  let num1 = +document.getElementById("num1").value;
  let num2 = +document.getElementById("num2").value;
  let calculator = button.getAttribute('value');
  
      switch (calculator) {
          case "+":
          document.getElementById("result2").innerHTML = num1 + num2;
          break;
          case "-":
          document.getElementById("result2").innerHTML = num1 - num2;
          break;
          case "*":
          document.getElementById("result2").innerHTML = num1 * num2;
          break;
          case "/":
          document.getElementById("result2").innerHTML = num1 / num2;
          break;
          default: 
          document.getElementById("result2").innerHTML = "nothing";
          break;
      }

}



function getMonthName(e){
  let date = new Date(e.currentTarget.value);
  let month = date.getMonth();

      switch(month){
          case 0:
              document.getElementById("result3").innerHTML = "Jan";
                  break;
          case 1: 
              document.getElementById("result3").innerHTML = "Feb";
                  break;
          case 2: 
              document.getElementById("result3").innerHTML = "March";
                  break;
          case 3: 
              document.getElementById("result3").innerHTML = "April";
                  break;
          case 4: 
              document.getElementById("result3").innerHTML = "May";
                  break;
          case 5: 
              document.getElementById("result3").innerHTML = "June";
                  break;
          case 6: 
              document.getElementById("result3").innerHTML = "July";
                  break;
          case 7: 
              document.getElementById("result3").innerHTML = "Aug";
                  break;
          case 8: 
              document.getElementById("result3").innerHTML = "Sep";
                  break;
          case 9: 
              document.getElementById("result3").innerHTML = "Oct";
                  break;
          case 10: 
              document.getElementById("result3").innerHTML = "Nov";
                  break;
          case 11: 
              document.getElementById("result3").innerHTML = "Dec";
                  break;
          default:
              document.getElementById("result3").innerHTML = "Unknown date value";
                  break;
          }
      }