"use strict";

const counter = document.querySelector(".counter");
const button = document.querySelector("button");

button.addEventListener("click", () => {
    const active_notoficarions = document.querySelectorAll(".active");
    active_notoficarions.forEach(notification => notification.classList.remove("active"));
    counter.innerText = 0;
})