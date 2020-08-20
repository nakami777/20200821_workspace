const input = [];
const operator = '';
const isEqualPush = false;
const inputArray = [];
const formula = '';
const tax = 1.10;

async function changeNumber (newNumber) {
  if (newNumber != '') {
    inputArray.push (newNumber);
    document.getElementById ('display').value = inputArray;
  }
}

// async function changeNumber (newNumber) {
//   if (newNumber != '') {
//     input.push (newNumber);
//     document.getElementById ('display').value = input;
//   }
// }
// function push (tmpNum) {
//   if (isEqualPush == true) {
//     reset ();
//   }
//   if (operator != '') {
//     if (input != '-') {
//       disp ('');
//     }
//   }
//   if (tmpNum != '.') {
//     input += tmpNum;
//   } else if (
//     tmpNum == '.' &&
//     input.indexOf ('.') == -1 &&
//     inputArray.indexOf ('.') == -1
//   ) {
//     input += tmpNum;
//   }
//   disp (input);
// }
// function plusminus () {
//   if (input != '') {
//     input = -input;
//     disp (input);
//   } else {
//     input = '-';
//     disp (input);
//   }
//   isEqualPush = false;
// }
// function disp (view) {
//   document.getElementById ('display').value = view;
// }
