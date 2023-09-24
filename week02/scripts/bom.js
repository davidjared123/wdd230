// input_text
// btn_submit

const input = document.querySelector(".input_text");
const button = document.querySelector(".btn_submit");
const list = document.querySelector("#list");

button.addEventListener("click", () => {
  const li = document.createElement("li");
  const delate_button = document.createElement("button");
  // console.log(input.value);
  if (input.value != "") {
    li.textContent = input.value;
    delate_button.textContent = "✖️";
    li.append(delate_button);
    list.append(li);
  }
  input.value = "";
  delate_button.addEventListener("click", () => {
    list.removeChild(li);
    input.focus();
  });
});
