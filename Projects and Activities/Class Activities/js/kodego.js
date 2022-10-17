

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



      function incrementCounter(counter, maxvalue, targetDisplay, increment=1){
        if(targetDisplay == null){
            targetDisplay = document.body;
        }
        let addComma = false;
        while(counter <= maxvalue){
            if(addComma){
                targetDisplay.innerHTML += ", ";
            }
            targetDisplay.innerHTML += counter;
            addComma = true;
            counter += increment;
        }
    }
    
    function decrementCounter(counter, minvalue, targetDisplay, decrement=1){
        if(targetDisplay == null){
            targetDisplay = document.body;
        }
        let addComma = false;
        while(counter >= minvalue){
            if(addComma){
                targetDisplay.innerHTML += ", ";
            }
            targetDisplay.innerHTML += counter;
            addComma = true;
            counter -= decrement;
        }
    }



    //Fibonacci

    //0,1,1,2,3,5,8,13,21,34,..
function doFibonacciSequence(limit){

    let numbers = [0,1];
    let newValue = 0;
    let n1 = 0;
    let n2 = 1;

    if(limit <= 1){
        number = numbers.pop();
    }

    for(let i=0; i < limit-2; i++){
        newValue = n1 + n2;
        n1 = n2;
        n2 = newValue;
        numbers.push(newValue);
    }

    return numbers;
}