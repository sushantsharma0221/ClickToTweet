let btn = document.querySelector(".btn");
let input = document.querySelector(".text");
let limit = document.querySelector(".limit");
let max = 280;
// let min = 0;
const updateLimit = () => {
  limit.textContent = max;
  input.addEventListener("input", () => {
    let inputLength = input.value.length;
    limit.textContent = max - inputLength;
    if (inputLength > max) {
      btn.disabled = true;
      btn.style.background = "gray";
      btn.innerText = "Limit Exceded";
      limit.style.color = "red";
    } else {
      btn.disabled = false;
      limit.style.color = "black";
      btn.innerText = "Tweet";
      btn.style.background = "rgb(60, 162, 226)";
    }
  });
};
updateLimit();

btn.addEventListener("click", (e) => {
  e.preventDefault();
  const tweetInput = "https://twitter.com/intent/tweet?text=";
  window.open(`${tweetInput}${input.value}`);
});
