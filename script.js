const mealButton=document.querySelector('#meal');
mealButton.addEventListener("click", createMeal);
let mealNum = 1;
let fat = 0;
let pro = 0;
let carb =  0;
appetizer;
entree;
dessert;
appButton;
entButton;
desButton;
fat;
fatCal;
pro;
proCal;
carb;
carbCal;
calTotal;
foodCalTotal;
summary;

function createMeal() {
  const para1 = document.createElement("p");
  para1.textContent = "Meal # " + mealNum;
  mealNum = mealNum + 1;
  document.body.appendChild(para1);
  foodInfo();
  foodCalTotal = 0;
}

function foodInfo() {
  appetizer = prompt ("What appetizer did you eat?");
  entree = prompt ("What entree did you eat?");
  dessert = prompt ("What dessert did you eat?");
  const para = document.createElement("p");
  para.textContent = `You ate: ${appetizer}, ${entree}, and ${dessert}.`
  document.body.appendChild(para);
  appButton = document.createElement("button");
  appButton.addEventListener("click", calcFat);
  appButton.addEventListener("click", calcPro);
  appButton.addEventListener("click", calcCarb);
  appButton.addEventListener("click", foodCalcTotal);
  entButton = document.createElement("button");
  entButton.addEventListener("click", calcFat);
  entButton.addEventListener("click", calcPro);
  entButton.addEventListener("click", calcCarb);
  entButton.addEventListener("click", foodCalcTotal);
  desButton = document.createElement("button");
  desButton.addEventListener("click", calcFat);
  desButton.addEventListener("click", calcPro);
  desButton.addEventListener("click", calcCarb);
  desButton.addEventListener("click", foodCalcTotal);
  appButton.textContent = appetizer;
  entButton.textContent = entree;
  desButton.textContent = dessert;
  document.body.appendChild(appButton);
  document.body.appendChild(entButton);
  document.body.appendChild(desButton);

  const para1 = document.createElement("p");
  para1.textContent = ` `;
  document.body.appendChild(para1);
  sumButton = document.createElement("button");
  sumButton.textContent = `Summary`
  sumButton.addEventListener("click", sum);
  document.body.appendChild(sumButton);
}

function calcFat() {
  fat = 0;
  fat = prompt ("How much fat?");
  fatCal = fat * 9;
  const para = document.createElement("p");
  para.textContent = fatCal + " calories in fat.";
  document.body.appendChild(para);
}
function calcPro() {
  pro = 0;
  pro = prompt ("How much protein?");
  proCal = pro * 9;
  const para = document.createElement("p");
  para.textContent = proCal + " calories in proteins.";
  document.body.appendChild(para);
}
function calcCarb() {
  carb = prompt ("How much carbohydrates?");
  carbCal = carb * 4;
  const para = document.createElement("p");
  para.textContent = carbCal + " calories in carbohydrates.";
  document.body.appendChild(para);
}
function foodCalcTotal() {
  calTotal = 0;
  calTotal = fatCal + proCal + carbCal;
  const para = document.createElement("p");
  para.textContent = "The total calories in this food is " + calTotal + " calories.";
  document.body.appendChild(para);
  foodCalTotal += calTotal;
}
function sum() {
  const para = document.createElement("p");
  para.textContent = "The total calories in this meal is " + foodCalTotal + " calories.";
  document.body.appendChild(para);
}
