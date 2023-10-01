const menu = document.getElementById("menu");
const menu_list = document.querySelector(".menu_list");
let actived = "false";

menu.addEventListener("click", () => {
  console.log("runing");
  if (actived === "false") {
    // console.log("checked");
    menu_list.classList.add("actived-menu");
    console.log("true");
    actived = "true";
  } else {
    // console.log("no check");
    menu_list.classList.remove("actived-menu");
    console.log("false");
    actived = "false";
  }
});
