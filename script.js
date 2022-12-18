document.getElementById('Concatinatesomestring').onclick = function () {
    let message = 'Good day😛';
    let userName = 'Ahmed';
    let banger = '!';
    console.log(message + ' ' + userName + banger);}
  
    // alert(message +' '+ userName + banger);
    // document.write(message +' '+ userName + banger);
  
  
  // prompt
  document.getElementById('asknamefromuser').onclick = function () {
    let message = 'Good day😊';
    let firstNmae = prompt('Please Enter your firstName?')
    let lastNmae = prompt('Please Enter your lastName?')
    let banger = '!';
  
  
    // let num1= +prompt('Enter first number?')
    // if(num1 == 0){
    //  alert('Please enter 1st Number')
    //  return;
    // }
    // let num2=+prompt('Enter Second number?')
    // if(num2 == 0){
    //   alert('Please enter 2nd Number')
    //   return;
    //  }
    //   console.log(num1+num2)
    console.log(message + ' ' + firstNmae + ' ' + lastNmae + banger)
    document.getElementById('output').innerHTML = message + ' ' + firstNmae + ' ' + lastNmae + banger
    //   var one =' 1'
    //   var two = 2
    // //   console.log((one=two))
    //   if(one != two){
    //     document.getElementById('output').innerHTML='its true'
    //   }
  }
  
  
  // comparision operator topic
  
  document.getElementById('ComparisionOperator').onclick = function () {
    var num1 = prompt('enter number 1')
    var num2 = prompt('enter number2')
  
    if (num1 > num2) {
      alert('This condition is True')
    }
    else if (num1 >= num1) {
      alert('This condition is false')
    } else {
      alert('false')
    }
  
  }
  
  // ifelse
  document.getElementById('ifelse').onclick = function () {
    var num1 = prompt('enter number 1')
    var num2 = prompt('enter number2')
  
    if (num1 > num2) {
      alert('This condition is True')
    }
    else if (num1 === num1) {
      alert('This condition true')
    } else {
      alert('false')
    }
  
  }
  
  // testing sets of conditions
  
  
  document.getElementById('testing').onclick = function () {
  
    var age = +prompt('Your age?');
    var weight = +prompt('Your Weight');
  
    if (age >= 18 && weight <= 70) {
      alert('Your are a smart boy!')
    }
    else if (age >= 18 && weight > 70) {
      alert('you are a fat guy')
    }
    else {
      alert('you are a baby')
    }
  }
  
  // ifstatement nested
  
  document.getElementById('IfstatementNested').onclick = function () {
  
    var age = +prompt('Enter Your age!')
    if (age >= 18) {
      var weight = +prompt('Enter your weight!')
      if (weight <= 70) {
        alert('your are a smart men.')
      }
      else {
        alert('you are a fat guy')
      }
    }
    else {
      alert('you are a baby')
    }
  }
  
  // login
  
  document.getElementById('login').onclick=function(){
    var userName=prompt('Username') 
    var pass=prompt('passward')
    if (userName==='umair' && pass==='123'){
      alert('you logged in')
  }
  else{
    alert('incorrect data')
  }
  
  
  }
  