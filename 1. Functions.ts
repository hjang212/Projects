/* delcare function */
function printMe() {
  console.log('printing...');
}

/* call the funtion */
printMe();

/* function w/ parameters */
function printThis(param: any) {
  console.log(param);
}
printThis('tapas')

/* function expression */
const printMe = function () {
  console.log('print');
}