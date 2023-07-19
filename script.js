const modalBtn = document.getElementById("modal-btn");
const modal = document.getElementById("modal");
const closeBtn = document.getElementById("close-btn");
const inpBtn = document.getElementById("inp-btn");
const inp = document.getElementById("inp");
const body = document.querySelector("body");
const inp2Btn = document.getElementById("inp2-btn");
const inp2 = document.getElementById("inp2");
const answer = document.getElementById("inp-answer");
modalBtn.addEventListener("click", () => {
  modal.classList.toggle("active");
});
closeBtn.addEventListener("click", () => {
  modal.classList.remove("active");
});
inpBtn.addEventListener("click", () => {
  var inpVal = inp.value;
  if (
    inpVal !== "red" &&
    inpVal !== "blue" &&
    inpVal !== "green" &&
    inpVal !== "black" &&
    inpVal !== "white"
  ) {
    alert("Enter Correct Color! {red, blue, green, black, white}");
  } else {
    body.style.backgroundColor = inpVal;
  }
  inp.value = "";
});

inp2Btn.addEventListener("click", () => {
  var val = inp2.value;
  var numbers = val.split(":");
  var quantity = 0;
  var sum = 0;
  var avg;
  numbers.map((number) => {
    sum += Number(number);
    quantity++
  });
  avg = sum / quantity;

  answer.innerText = avg;
});
