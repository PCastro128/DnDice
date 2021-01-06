//button/function name is what the highlighted number is already
//will provide

//suppose to get the string highlighted 
function get_input() {
  return document.getElementById("inputNumber").value;
}

function get_custom_base() {
  var base = document.getElementById("baseSelector").value;
  return parseInt(base);
}

//display result of conversions to the page
function display_strings(hex, binary, decimal, custom) {
  document.getElementById("hex").innerHTML = hex;
  document.getElementById("binary").innerHTML = binary;
  document.getElementById("decimal").innerHTML = decimal;
  document.getElementById("custom").innerHTML = custom;
}

//replacing onclick function (cause Chrome is stupid and won't let us use it)
document.getElementById('hexButton').addEventListener('click',fromHex); 
document.getElementById('binaryButton').addEventListener('click',fromBinary);
document.getElementById('decimalButton').addEventListener('click',fromDecimal);
document.getElementById('customButton').addEventListener('click',fromCustom);

function fromDecimal() {
  var int = parseInt(get_input());
  convertInt(int);
}

function fromHex() {
  var int = parseInt(get_input(), 16);
  convertInt(int);
}

function fromBinary() {
  var int = parseInt(get_input(), 2);
  convertInt(int);
}

function fromCustom(){
  var int = parseInt(get_input(), get_custom_base());
  convertInt(int);
}

function convertInt(int) {
  display_strings(hexadecimal(int), binary(int), decimal(int), custombase(int));
}

function hexadecimal(int)
{
  return int.toString(16);
}

function binary(int)
{
  return int.toString(2);
}

function decimal(int)
{
  return int.toString();
}

function custombase(int){
  return int.toString(get_custom_base()); //user needs to input n
}





















//NEVERMIND lol
/*
//bin to dec
  var n = parseInt(get_input());       

  var toDecSum = 0;
  var exp = 1;
  
  for(var i = n.length - 1; i >= 0; i++){
    toDecSum += n.charAt(i) * base;
    base *= 2;
  }
  //print

  //bin to hex -- take above bin to dec and do dec to hex
  var n = toDecSum;
  var toHexArr = [];
  while(n > 20){           //may not be n idk
    var x = n % 16;
    if(x < 10){
      toHexArr.unshift(x);
    }
    else{
      switch(x){
        case 10:
          toHexArr.unshift('A');
          break;
        case 11:
          toHexArr.unshift('B');
          break;
        case 12:
          toHexArr.unshift('C');
          break;
        case 13:
          toHexArr.unshift('D');
          break;
        case 14:
          toHexArr.unshift('E');
          break;
        case 15:
          toHexArr.unshift('F');
          break;
      }
    }
    n = Math.floor(n/16);
  }


print statement saying this is binary form
  var n = parseInt(get_input());          
  var toBinArr = [];
  while(n > 0){
    var x = n % 2;
    toBinArr.unshift(x);
    if(x == 1){
      n = (n - 1)/2;
    }
    else{
      n = n/2;
    }
  }
  //insert print to extension here, will need to print toBinArr 

  //print statment saying this is hex form
  var n = parseInt(get_input());
  var toHexArr = [];
  while(n > 20){           //may not be n idk
    var x = n % 16;
    if(x < 10){
      toHexArr.unshift(x);
    }
    else{
      switch(x){
        case 10:
          toHexArr.unshift('A');
          break;
        case 11:
          toHexArr.unshift('B');
          break;
        case 12:
          toHexArr.unshift('C');
          break;
        case 13:
          toHexArr.unshift('D');
          break;
        case 14:
          toHexArr.unshift('E');
          break;
        case 15:
          toHexArr.unshift('F');
          break;
      }
    }
    n = Math.floor(n/16);
  }
  //insert print to extension here, will need to print toBinArr */