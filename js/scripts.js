let food= prompt("ماذا تحب ان تاكل");


switch(food) {
    case "1":
       console.log("بيتزا");
      break;
    case "2":
        console.log("بييرقر");
      break;
    default:
        console.log("ما تاكل شي");
  }



  let numb1 =  parseInt(prompt("ادخل الرقم الاول"))

  let numb2= parseInt(prompt("ادخل الرقم الثاني"))

  let calculation = prompt("+,-,*,/")
  if (numb1 && numb2){
        console.log("wrong")
  if  (calculation == "+"){
      console.log(numb1 + numb2);
  }else if (calculation == "-"){
    console.log(numb1 - numb2);
  }else if (calculation == "*"){
    console.log(numb1 * numb2);
  }else  if (calculation == "/"){
    console.log(numb1 / numb2);
  }
  else {
      console.log("wrong")
  }

}


let age = parseInt(prompt("عمرك"))

if (age < 5) {
    console.log("روضه");
} else if (5 < age < 17){
    console.log("مدرسه");
} else if (18 < age < 25) {   
   console.log("جماعه");
  }
