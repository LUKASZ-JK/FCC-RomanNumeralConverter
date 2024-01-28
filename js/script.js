'use strict';

const numberInput = document.getElementById('number');
const convertButton = document.getElementById('convert-btn');
const outputDiv = document.getElementById('output')

convertButton.addEventListener('click', convertProcedure);

function convertProcedure(e) {
   e.preventDefault();
   while (outputDiv.firstChild) {
      outputDiv.removeChild(outputDiv.firstChild);
   }
   const result = document.createElement('span');
   let number = parseInt(numberInput.value);

   if (!number) {
      result.innerText = 'Please enter a valid number';
   }
   else if (number < 1) {
      result.innerText = 'Please enter a number greater than or equal to 1';
   }
   else if (number > 3999) {
      result.innerText = 'Please enter a number less than or equal to 3999';
   }
   else {
      result.innerText = convertNumber(number);
   }
   outputDiv.appendChild(result);
}

function convertNumber(number) {
   const thousands = ['', 'M', 'MM', 'MMM'];
   const hundreds = ['', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'];
   const tens = ['', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'];
   const ones = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];
   let roman = '';
   if (number >= 1000) {
      roman += thousands[Math.floor(number / 1000)];
      roman += convertNumber(number % 1000);
   }
   else if (number >= 100) {
      roman += hundreds[Math.floor(number / 100)];
      roman += convertNumber(number % 100);
   }
   else if (number >= 10) {
      roman += tens[Math.floor(number / 10)];
      roman += convertNumber(number % 10);
   }
   else if (number > 0) {
      roman += ones[number];
   }
   return roman;
}