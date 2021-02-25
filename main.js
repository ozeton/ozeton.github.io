"use strict"

{
  const open = document.getElementById("open");
  const overlay = document.querySelector(".overlay");
  const close = document.getElementById("close");
  const body = document.querySelector(".body");

  open.addEventListener("click", () => {
    overlay.classList.add("show");
    open.classList.add("hide");
    body.classList.add("scroll");
  })

  close.addEventListener("click", () => {
    overlay.classList.remove("show");
    open.classList.remove("hide");
    body.classList.remove("scroll");
  })

}