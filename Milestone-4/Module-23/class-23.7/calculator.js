function add(num1, num2) {
  return num1 + num2;
}
function mult(num1, num2) {
  return num1 * num2;
}
function sub(num1, num2) {
  return num1 - num2;
}
function div(num1, num2) {
  return num1 / num2;
}
function remain(num1, num2) {
  return num1 % num2;
}

function calculator(x, y, operation) {
  if (operation === add) {
    return add(x, y);
  } else if (operation === mult) {
    return mult(x, y);
  } else if (operation === sub) {
    return sub(x, y);
  } else if (operation === div) {
    return div(x, y);
  } else if (operation === remain) {
    return remain(x, y);
  } else {
    return "Only this 'add' , 'multepication' , 'subtraction' , 'divition' ,'remainder' opration you do ";
  }
}
console.log(calculator(10, 3, sub));
console.log(calculator(10, 3, div));
console.log(calculator(10, 3, remain));
