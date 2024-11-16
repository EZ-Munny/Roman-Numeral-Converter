const userInput = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");
const form = document.getElementById("form");


function decimalToNumeral(num) {
  const romanData = [
    ['M', 1000],
    ['CM', 900],
    ['D', 500],
    ['CD', 400],
    ['C', 100],
    ['XC', 90],
    ['L', 50],
    ['XL', 40],
    ['X', 10],
    ['IX', 9],
    ['V', 5],
    ['IV', 4],
    ['I', 1]
  ];
  const romanArr = [];
  romanData.forEach((arr) => {
    while(num >= arr[1]) {
      romanArr.push(arr[0]);
      num -= arr[1];
    }
  });

  return romanArr.join('');
}


const checkUserInput = () => {
  let errText = '';
  const inputCheck = parseInt(userInput.value);
  const strCheck = userInput.value;

  if(!strCheck || strCheck.match(/[e.]/g)) {
    errText = "Please enter a valid number"
  }
  else if(inputCheck < 1) {
    errText = "Please enter a number greater than or equal to 1";
  }
  else if(inputCheck > 3999) {
    errText = "Please enter a number less than or equal to 3999";
  }
  else {
    return true;
  }

  output.innerText = errText;
  output.classList.add('alert');

  return false;
};

const clearForm = () => {
  userInput.value = "";
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    //update();
})

convertBtn.addEventListener("click", () => {
  update();
})

userInput.addEventListener("keydown", (e) => {
  if(e.key === "Enter") {
    update();
  }
})

const update = () => {
  checkUserInput();
  output.classList.remove('hidden');
  if(checkUserInput() === true) {
    output.innerText = (decimalToNumeral(userInput.value))
  }
  clearForm();
}