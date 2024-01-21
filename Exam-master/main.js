const addBtn = document.querySelector("#hamburger");
const remove = document.querySelector(".remove");
const nav_items = document.querySelector(".nav_items");

addBtn.addEventListener("click", () => {
  nav_items.classList.add("d-block");
  // nav_items.style = "transform: translateY(0%)";
  console.log(1);
});
remove.addEventListener("click", () => {
  nav_items.classList.remove("d-block");
  // nav_items.style = "transform: translateY(0%)";
  console.log(1);
});


window.addEventListener("scroll", function () {
  toggleBacktop();
});

let backtop = document.getElementById("backtop");

function toggleBacktop() {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 200
  ) {
    backtop.style.bottom = "20px";
  } else {
    backtop.style.bottom = "-50px";
  }
}
backtop.addEventListener("click", () => window.scrollTo(0, 0));
